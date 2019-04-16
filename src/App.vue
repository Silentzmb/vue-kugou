<template>
  <div id="app">
    <Head />
    <div class="main">
      <router-view></router-view>
    </div>
    <Play />
  </div>
</template>

<script>
  import Head from "./components/Head"
  import Play from "./components/Play"
  export default {
    name: 'App',
    components: {
      Head, Play
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
