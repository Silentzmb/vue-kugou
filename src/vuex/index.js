import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    audio: {
      songUrl: '',
      imgUrl: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
      title: '',
      singer: '',
      currentLength: 0,
      songLength: 0,
      currentFlag: false
    },
    isPlayingSong: false,
    listInfo: {
      songList: [],
      songIndex: 0
    }
  },
  getters: {
    audio: state => state.audio,
    isPlayingSong: state => state.isPlayingSong
  },
  mutations: {
    setListInfo (state, {list, index}) {
      state.listInfo.songList = list
      state.listInfo.songIndex = index
    },
    setAudio (state, audio) {
      state.audio = {...(state.audio), ...audio}
    },
    setIsPlayingSong (state, bool) {
      state.isPlayingSong = bool
    }
  },
  actions:{
    getSong({commit, state}, hash){
      axios.get(`/kugou/yy/index.php?r=play/getdata&hash=${hash}`).then(({data}) => {
        let songData = data.data
        let songUrl = songData.play_url
        let imgUrl = songData.img
        let title = songData.audio_name
        let singer = songData.author_name
        let songLength = songData.timelength / 1000
        let currentLength = 0
        let lrc = data.lyrics
        let audio = {songUrl, imgUrl, title, singer, songLength, currentLength}
        commit("setAudio", audio)
        commit('setIsPlayingSong', true)
      })
    },
    next({commit, dispatch, state}){
      let list = state.listInfo.songList
      let curIndex = state.listInfo.songIndex
      let nextIndex
      if(curIndex === list.length - 1){
        nextIndex = 0
      }else{
        nextIndex = curIndex + 1
      }
      let hash = list[nextIndex].hash
      console.log("nextIndex：", nextIndex)
      commit('setListInfo', {list: list, index: nextIndex})
      dispatch('getSong', hash)
    }
  }
})

export default store