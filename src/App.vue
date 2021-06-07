<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",

    created(){
      localStorage.setItem('active', '1')
    }
  }
</script>

<style scoped lang="scss">
  .app{
    height: 100%;
    >>> .el-input__inner{
      height: 36px !important;
    }
  }
</style>