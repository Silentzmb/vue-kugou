<template>
  <div class="play-view">
    <audio class="play-audio" :src="audio.songUrl" autoplay ></audio>
    <div class="play-panel">
      <img class="singer-img" :src="audio.imgUrl" >
      <div class="song-info">
        <p class="song-name">{{audio.title}}</p>
        <p class="song-singer">{{audio.singer}}</p>
      </div>
      <div class="play-control">
        <span class="play-song" :class="{'pause': isPlayingSong}" @click="togglePlaySong()"></span>
        <span class="play-next" @click="playNextSong()"></span>
      </div>
    </div>
  </div>  
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    name: "play",
    computed: {
      ...mapGetters(['audio', 'isPlayingSong'])
    },
    methods: {
      togglePlaySong() {
        var audio = document.querySelector(".play-audio")
        if(audio.currentSrc.length === 0) {
          return
        }
        if(this.isPlayingSong){
          audio.pause()
        }else{
          audio.play()
        }
        this.$store.commit('setIsPlayingSong', !this.isPlayingSong)
      },
      playNextSong() {
        this.$store.dispatch('next')
      }
    }
  }
</script>

<style type="text/css">
    
</style>