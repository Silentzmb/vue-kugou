<template>
  <div>
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="(banner, index) in banner" :key="index">
        <a :href="banner.extra.tourl">
          <img :src="banner.imgurl" :title="banner.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 歌曲列表 -->
    <mt-cell v-for="(song, index) in songList" :title="song.filename" @click.native="playAudio(index)" :key="index">
      <img class="download-song-btn" src="../assets/images/download_icon.png" />
    </mt-cell>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import { PLAY_AUDIO } from '../mixins'
  export default {
    mixins: [PLAY_AUDIO],
    name: 'NewSongs',
    data() {
      return {
        banner: [],
        songList: []
      }
    },
    created() {
      this.getSongs()
    },
    methods: {
      getSongs() {
        Indicator.open({
          text: 'londing...',
          spinnerType: "triple-bounce"
        });
        this.$http.get('mKugou/?json=true').then(({data}) => {
          console.log(data)
          this.banner = data.banner
          this.songList = data.data
        }).then(() => {
            Indicator.close()
          }
        )
      }
    }
  }
</script>
<style>
  .mint-swipe {
    height: 40vw !important;
    /*height: 290px !important;*/
  }
  .mint-swipe-item a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mint-swipe-indicator {
    width: 25px !important;
    height: 25px !important;
  }
  .mint-swipe-indicators {
    bottom: 5px !important;
  }

  .mint-cell {
    min-height: 100px;
    text-align: left;
    padding-left: 20px;
  }
  .mint-cell-wrapper {
    padding-left: 20px;
    min-height: inherit;
    font-size: 26px;
    border-bottom: 1px solid #e8e8e8;
    background-image: none;
  }
  .mint-cell-title {
    padding-right: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .mint-cell-text {
    line-height: initial;
  }
  .download-song-btn {
    width: 40px;
    height: 40px;
  }
</style>