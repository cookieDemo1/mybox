<template>
  <div class="box-info">
    <div class="one">
      <p>28台</p>
      <p>设备总数</p>
    </div>
    <div class="two">
      <p><span  class="green">22台</span></p>
      <p>正常设备</p>
    </div>
    <div class='three'>
      <p><span  class="orange">2台</span></p>
      <p>异常设备</p>
    </div>
    <div class='four'>
      <p><span class="gray">4台</span></p>
      <p>离线设备</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'bixInfo'
}
</script>

<style scoped lang='scss'>
  .box-info{
    height: 100%;
    background-color: #FFFFFF;
    border-top-right-radius: 8px;
    display: flex;
    align-items: center;
    div{
      flex: 1;
      text-align: center;

      p{
        &:first-child{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        &:last-child{
          font-size: 12px;
          color: #A6A6A6;
        }
      }

      .green{
        position: relative;
        padding-left: 5px;
        &::before{
          position: absolute;
          content: '';
          width: 8px;
          height: 8px;
          background-color: #00D9DB;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -5px;
          /* transform: translate(-50%, -50%); */
        }
      }

      .orange{
        position: relative;
        padding-left: 5px;
        &::before{
          position: absolute;
          content: '';
          width: 8px;
          height: 8px;
          background-color: #FB9400;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -5px;
          /* transform: translate(-50%, -50%); */
        }
      }

      .gray{
        position: relative;
        padding-left: 5px;
        &::before{
          position: absolute;
          content: '';
          width: 8px;
          height: 8px;
          background-color: #A6A6A6;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -5px;
          /* transform: translate(-50%, -50%); */
        }
      }
    }
  }
</style>