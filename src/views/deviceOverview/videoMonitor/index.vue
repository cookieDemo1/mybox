<template>
  <div class="content">
    <div class="select">
      <el-popover>
        <div class="select1" slot="reference" style="cursor: pointer" trigger="hover">
          <span>全部分组</span>
          <img src="../../../assets/imgs/deviceOverview/xxgwd.png" alt="">
        </div>

        <ul class="ul1">
          <li>全部</li>
          <li>五楼前台</li>
          <li>多媒体室</li>
          <li>研发室</li>
        </ul>
      </el-popover>

      <el-popover>
        <div class="select2" slot="reference" style="cursor: pointer" trigger="hover">
          <span>研发一室传输箱</span>
          <img src="../../../assets/imgs/deviceOverview/xxgwd.png" alt="">
        </div>
        <ul class="ul2">
          <li>大堂待客</li>
          <li>大堂入口</li>
          <li>北京</li>
          <li>天津</li>
          <li>广东深圳</li>
        </ul>
      </el-popover>
    </div>
    <div class="img">
      <img src="../../../assets/imgs/deviceOverview/video.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoMonitor'
}
</script>

<style lang="scss" scoped>

  .content{
    height: 100%;

    display: flex;
    flex-direction: column;

    .select{
      width: 440px;
      height: 44px;
      background-color: #F0F3F5;
      border-radius: 8px;
      padding: 9px 0;

      div{
        display: inline-block;
        height: 100%;
        padding-left: 20px;
        font-size: 16px;
        color: #333333;
      }

      .select1{
        width: 169px;
        border-right: 2px solid #E8EBEB;
        img{
          margin-left: 53px;
        }
      }

      .select2{
        width: 231px;
        img{
          margin-left: 69px;
        }


      }
    }
    .img{
      flex: 1;
      width: 100%;
      margin-top: 20px;
      overflow: hidden;
      border-radius: 4px;

      img{
        width: 100%;
        height: 100%;
      }
  }

}

.ul1, .ul2{
  margin: 0;
  padding: 0;
}

.ul2{
  width: 180px;
}
li{
  height: 34px;
  line-height: 34px;
  color: #333333;
  font-size: 14px;
  padding-left: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover{
    background-color: rgba(0, 0, 0, .16);
  }
}

.el-popover{
  padding-left: 0 !important;
  padding-right: 0 !important;
}


</style>