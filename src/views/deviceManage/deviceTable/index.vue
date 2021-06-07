<template>
  <div class="device-table">
    <div class="top">
      <topOperation></topOperation>
    </div>
    <div class="table">
      <tableInfo></tableInfo>
    </div>
  </div>
</template>

<script>
import topOperation from './topOperation'
import tableInfo from './tableInfo'
export default {
  name: 'deviceTable',
  components: {topOperation, tableInfo},
  methods: {
  },

  mounted(){
    this.$emit.$on('addDevice', () => {
      console.log('addDevice')
    })
  }
}
</script>

<style lang='scss' scoped>
  .device-table{
    min-height: calc(100% - 40px);
    background-color: #FFFFFF;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 20px;
  }

  .top{
    height: 56px;
    /* background-color: blue; */
  }

  .table{
    margin-top: 20px;
  }
</style>