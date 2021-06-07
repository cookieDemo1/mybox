<template>
  <div class="list">
    <div class="top">
      <span class="title">传输箱实时动态</span>
      <ul class="select">
        <li class="active">全部</li>
        <li>提醒</li>
        <li>告警</li>
        <li>问题</li>
      </ul> 
    </div>
    <ul class="data">
      <div class="header">
        <span>设备</span>
        <span>动态</span>
        <span>时间</span>
      </div>
      <li v-for="item in dynamics" :key="item.id">
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p class="id">{{item.id}}</p>
          </div>
        <div :class="['dynamic', {'green': item.status===1}, {'orange': item.status===2}, {'red': item.status === 3}]">{{item.dynamic}}</div>
        <div class="time">{{item.time}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dynamic',
  props: {
    dynamics: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped lang='scss'>
  .list{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    /* background-color: rosybrown; */
    padding: 12px 20px 20px 20px;
  }

  .top{
    height: 32px;
    line-height: 32px;
    .title{
      display: inline-block;
      font-size: 16px;
      color: #333333;
    }

    ul{
      float: right;
      box-shadow: 0 0 1px #E2E2E2;
      border-radius: 8px;

      .active{
        border-radius: 8px;
        color: #FFFFFF;
        background-color: #00DDBB;          
      }
      li{
        display: inline-block;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #F0F2F2;
        cursor: pointer;

        
        &:last-child{
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        &:first-child{
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        &:nth-child(2){
          color: #37CF76;
        }

        &:nth-child(3){
          color: #FB9400;
        }

        &:nth-child(4){
          color: #FF5B67;
        }
      } 
    }
  }

   .data{

    .header{
      display: flex;
      color: #A6A6A6;
      font-size: 12px;
      padding-top: 30px;
      padding-bottom: 9px;
      
      span{
        &:nth-child(1){
          flex: 133;
          padding-left: 20px;
        }
        &:nth-child(2){
          flex: 192;
        }
        &:nth-child(3){
          flex: 132;
        }
      }
    }

      li{
        height: 50px;
        background-color: #F0F3F5;
        margin-bottom: 6px;
        border-radius: 8px;

        display: flex;
        font-size: 14px;
        align-items: center;
        .info{
          flex: 133;
          padding-left: 20px;


          .id{
            font-size: 12px;
            color: #666666;
          }

        }
        .dynamic{
          flex: 192;
        }
        .time{
          flex: 132;
          color: #A6A6A6;
        }
      }
    
    }

    .green{
      color: #37CF76;
    }

    .orange{
      color: #FB9400;
    }

    .red{
      color: #FF5B67;
    }

    
</style>

