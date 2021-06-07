<template>
  <div class="content">
    <div class="top">
      <topOperation></topOperation>
    </div>
    <div class="main">
      <group></group>
    </div>
  </div>
</template>

<script>
import group from './group'
import topOperation from './topOperation'
export default {
  name: 'deviceGroup',
  components: {topOperation, group}
}
</script>

<style lang='scss' scoped>
  .content{
    background-color: #FFF;
    /* height: 400px; */
    padding: 30px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;

    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

  }

  .top{
    height: 36px;
    /* background-color: bisque; */
  }

  .main{
    flex: 1;
  }
</style>