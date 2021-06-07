<template>
  <div :class="{left:true, collapse: isCollapse}">
    <div class="logo" v-if="!isCollapse">
      <img src="../../assets/imgs/LOGO2.png" alt="">
    </div>

    <div class="zhankai" v-if="isCollapse == true" @click="isCollapse=false">
      <img src="../../assets/imgs/zhankai.png" alt="" >
    </div>

    <el-menu class="menu"
      :default-active="$route.path" router
      background-color="#151936"
      text-color="#878FB6"
      active-text-color="#00DDBB"
      >
      <el-menu-item v-for="item in routes" :key="item.path" :index='item.path' :route="item.path" class="menu-item">
        <img :src="item.icon" alt="">
        <span class="name" v-if="!isCollapse">{{item.name}}</span>
      </el-menu-item>
      <img src="../../assets/imgs/shouqi.png" class="shouqi" alt="" v-if="isCollapse == false" @click="isCollapse=true">
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  data(){
    return{
      isCollapse: false,
      routes: [
        {path: '/deviceOverview', name: '设备总览', icon: require('../../assets/imgs/menu/deviceOverview.png')},
        {path: '/deviceManage', name: '设备管理', icon: require('../../assets/imgs/menu/deviceManage.png')},
        {path: '/policeManage', name: '报警管理', icon: require('../../assets/imgs/menu/policeManage.png')},
        {path: '/authManage', name: '权限管理', icon: require('../../assets/imgs/menu/authManage.png')},
        {path: '/operationLog', name: '操作日志', icon: require('../../assets/imgs/menu/operationLog.png')},
        {path: '/systemLog', name: '系统日志', icon: require('../../assets/imgs/menu/systemLog.png')},
        {path: '/firmwareUpdate', name: '固件升级', icon: require('../../assets/imgs/menu/firmwareUpdate.png')},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .left{
    width: 174px;
    flex-shrink: 0;
    /* height: 100%; */
    background-color: #151936;
  }

  .left.collapse{
    width: 60px;
    padding-top: 70px;
    .menu{
      .menu-item{
        img{
          padding-left: 0px;
        }
      }
    }
    .zhankai{
      height: 20px;
      line-height: 20px;
      text-align: center;
      &:hover{
        background-color: #060815;
      }
    }
  }

  .logo{
    height: 70px;
    border-bottom: 1px solid #212747;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 132px;
      height: 30px;
    }
  }

  .menu{
    border-right: none;
    position: relative;
    .menu-item{
      img{
        padding-left: 19px;
      }
      
      .name{
        padding-left: 11px;
        font-size: 16px;    
      }

      &:hover{
        background-color: #060815 !important;
      }
    }

    /* 收起图片 */
    .shouqi{
      position: absolute;
      right: 0;
      bottom: 15%;
      cursor: pointer;
    }
  }

  

  .el-menu-item.menu-item.is-active{
    border-left: 3px solid #00DDBB;
  }
  

</style>