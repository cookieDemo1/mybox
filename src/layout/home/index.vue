<template>
  <div class="home">
    <leftMenu></leftMenu>
    <div class="right">
      <navBar></navBar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import leftMenu from '_components/leftMenu/index'
  import navBar from '_components/navBar/index'
  export default {
    name: "index",
    components: {leftMenu, navBar}
  }
</script>

<style scoped lang='scss'>
  .home{
    min-height: 100%;
    display: flex;
  }

  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
  
    .content{
      flex: 1;
      background-color: #F2F2F3;
    }
  }



  
</style>