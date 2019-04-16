<template>
  <div>
    <div class="header">
      <div class="logo-container">
        <div class="head-logo">
          <a href="#">
            <img src="http://m.kugou.com/v3/static/images/index/logo.png">
          </a>
        </div>
        <div class="head-search">
          <img src="http://m.kugou.com/v3/static/images/index/search.png">
        </div>
      </div>
    </div>
    <div class="head-nav">
      <mt-navbar class="container">
        <mt-tab-item id="head-nav-new">新歌</mt-tab-item>
        <mt-tab-item id="head-nav-rank">排行</mt-tab-item>
        <mt-tab-item id="head-nav-list">歌单</mt-tab-item>
        <mt-tab-item id="head-nav-singer">歌手</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "Head"
  }
</script>

<style>
  .mint-navbar {
    padding: 0 20px;
    height: 90px;
  }
  .mint-tab-item {
    padding: 24px 0 !important;
  }
  .mint-tab-item.is-selected {
    color: #26a2ff;
    border-bottom: 3px solid #26a2ff;
  }
  .mint-tab-item-label { 
    font-size: 34px !important;
    /*line-height: initial;*/
  }
</style>