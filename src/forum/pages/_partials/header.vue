<template>
   <header>
     <main class="container clearfix">
        <div class="header-warper">
          <div class="g_logo fl">
            <a href="https://gocn.io"></a>   
          </div>
          <global-search></global-search>
          <div class="fr">
            <el-button type="primary">登录</el-button>
            <el-button type="success">注册</el-button>
          </div>
        </div>
     </main>
   </header>
</template>

<style scoped lang="stylus">
  .header-warper
    margin: 8px 0 0 0;

  header
    position: relative;
    overflow: hidden;
    z-index: 1001;
    width: 100%;
    min-height: 50px;
    background-color: #499ef3;
    .g_logo
      width: 160px;
      height: 40px;
      a
        display: block;
        width: 160px;
        height: 40px;
        background: url('../../assets/logo.png') no-repeat;
</style>

<script>
  import globalSearch from './search';

  export default {
    name: 'header',
    components: {
      globalSearch
    }
  };
</script>
