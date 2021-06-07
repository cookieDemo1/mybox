<template>
  <header class="nav">
    <div class="one">
      智能传输箱
    </div>
    <div class="two">
      <el-popover style="cursor: pointer" trigger="hover">
        <template slot="reference">
          <img src="../../assets/imgs/deviceOverview/csx01.png" alt="">
          <span>传输箱 6台</span>
          <img src="../../assets/imgs/deviceOverview/xxgwd.png" alt="" class="spin">
        </template>
        <ul class="select">
          <li>已过期</li>
          <li>已修复</li>
          <li>已完成</li>
        </ul>
      </el-popover>
    </div>
    <div class="three">
      <el-popover style="cursor: pointer" trigger="hover">
        <template slot="reference">
          <img src="../../assets/imgs/deviceOverview/sxt01.png" alt="">
          <span>摄像头 10台</span>
          <img src="../../assets/imgs/deviceOverview/xxgwd.png" alt="" class="spin">
        </template>
        <ul class="select">
          <li>已过期</li>
          <li>已修复</li>
          <li>已完成</li>
        </ul>
      </el-popover>
    </div>
    <div class="four">
      <el-popover style="cursor: pointer" trigger="hover">
        <template slot="reference">
          <img src="../../assets/imgs/deviceOverview/ssbj01.png" alt="">
          <span>实时报警 5台</span>
          <img src="../../assets/imgs/deviceOverview/xxgwd.png" alt="" class="spin">
        </template>
        <ul class="select">
          <li>已过期</li>
          <li>已修复</li>
          <li>已完成</li>
        </ul>
      </el-popover>
    </div>
    <div class="five">
      <el-popover style="cursor: pointer" trigger="hover">
        <template slot="reference">
          <img src="../../assets/imgs/deviceOverview/toux.png" alt="">
          <div class="user">
            <div class="name">李相赫</div>
            <div class="phone">13232634775</div>
          </div>
          <img src="../../assets/imgs/deviceOverview/xxgwd.png" alt="" class="spin">
        </template>
        <ul class="select">
          <li>修改密码</li>
          <li>切换主题</li>
          <li>设置</li>
          <li @click="exit">退出</li>
        </ul>
      </el-popover>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navBar',
  data(){
    return{

    }
  },

  methods: {
    exit(){
      console.log('exit')
      sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
  .nav{
    height: 70px;
    line-height: 70px;
    display: flex;

    .one{
      flex: 373;
      color: #333333;
      font-size: 22px;
      font-weight: bold;
      margin-left: 20px;
      
    }
    .two, .three, .four{
      flex: 373;
      img{
        vertical-align: middle;
      }
      span{
        color: #333333;
        font-size: 16px;
        margin-left: 10px;
      }
      .spin{
        margin-left: 12px;
      }
    }
    .five{
      flex: 373;
      position: relative;
      img{
        position: absolute;
        /* position: relative;
        top: 12px; */
        /* vertical-align: middle; */
        top: 50%;
        transform: translateY(-50%);
      }

      .user{
        display: inline-block;
        height: 100%;
        width: 90px;
        margin-left: 60px;
        .name{
          height: 50%;
          line-height: 1;
          font-size: 14px;
          color: #333333;
          padding-top: 18px;
        }
        .phone{
          padding-top: 5px;
          height: 50%;
          line-height: 1;
          font-size: 12px;
          color: #A6A6A6;
        }
      }

      .spin{
        margin-left: 20px;
      }
    }

    
  }

  .select{
      li{
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        padding-left: 10px;
        &:hover{
          background-color: #F0F3F5;
        }
      }
    }
</style>