<template>
  <div class="box-list">
    <p class="title">{{title}}</p>
    <ul class="box-info">
      <li v-for="item in list" :key="item.name" class="item">
        <img src="../../../assets/imgs/deviceManage/box.png" alt="" class="one">
        <div class="two">
          <p :class="['name', {'green': item.status==1}, {'orange': item.status==2},{'gray': item.status==3}]">{{item.name}}</p>
          <p class="id">{{item.id}}</p>
        </div>
        <div class="three">
          <p class="time_status">{{item.time_status}}</p>
          <p class="time">{{item.time}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'boxList',
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang='scss' scoped>
  .box-list{
    padding: 20px;
    border-radius: 8px;
    background-color: #FFFFFF;
  }

  .title{
    font-size: 16px;
    color: #333333;
  }

  .box-info{

    .item{
      height: 60px;
      line-height: 60px;
      background-color: #F0F3F5;
      border-radius: 8px;
      display: flex;

      align-items: center;

      .one{
        margin-left: 20px;
        margin-right: 10px;
        width: 40px;
        height: 40px;
      }

      .two{
        flex: 153;

        .name{
          font-size: 16px;
          line-height: 1;
          margin-bottom: 8px;
        }

        .id{
          /* height: 20px; */
          font-size: 12px;
          line-height: 1;
          color: #A6A6A6;
        }

      }

      .three{
        flex: 89;
        .time_status{
          font-size: 12px;
          line-height: 1;
          color: #A6A6A6;
          margin-bottom: 8px;
        }

        .time{
          /* height: 20px; */
          font-size: 12px;
          line-height: 1;
          color: #A6A6A6;
        }
      }


      
      &:first-child{
        margin-top: 19px;
      }
      


    }

    .item+.item{
      margin-top: 8px;
    }

    .green{
      position: relative;
      padding-left: 10px;
      &::before{
        position: absolute;
        content: '';
        width: 6px;
        height: 6px;
        background-color: #00D9DB;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        left: -1px;
      }

    }

    .orange{
      position: relative;
      padding-left: 10px;
      &::before{
        position: absolute;
        content: '';
        width: 6px;
        height: 6px;
        background-color: #FB9400;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        left: -1px;
      }
    }

    .gray{
      position: relative;
      padding-left: 10px;
      &::before{
        position: absolute;
        content: '';
        width: 6px;
        height: 6px;
        background-color: #A6A6A6;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        left: -1px;
      }
    }
  }
</style>