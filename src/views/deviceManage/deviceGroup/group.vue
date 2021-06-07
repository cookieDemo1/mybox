<template>
  <div class='group'>
    <div class="group-list">
      <div class="group-item" v-for="(item, index) in list" :key="index">
        <p class="name">{{item.name}}</p>
        <p class="time">{{item.time}}</p>
        <p class="number">
          <span>{{item.number}}</span>
          <span>台</span>
        </p>
        <p class="about">关联传输箱 ></p>
        <p class="right">...</p>
      </div>
    </div>

      <el-pagination background layout="prev,pager,next" :total="1000" style="margin-top: 40px; text-align: center"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'group',
  data(){
    return{
      list: [
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发2部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发3部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发4部传输箱组',
          time: '2020.03.15 12:30',
          number: 25,
        },
        {
          name: '研发5部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 45,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 31,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 92,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 18,
        },
        {
          name: '研发1部传输箱组',
          time: '2020.03.15 12:30',
          number: 31,
        }
      ]
    }
  }

}
</script>

<style lang='scss' scoped>
  .group{
    height: 100%;
    padding-top: 20px;
    /* background-color: slateblue; */
    display: flex;
    flex-direction: column;
  }

  .group-list{
    flex: 1;
    /* background-color: gold; */

    .group-item{
      display: inline-block;
      width: 353px;
      height: 180px;
      background-color: #F0F3F5;
      border-radius: 4px;
      margin-right: 16px;
      margin-bottom: 16px;
      padding-left: 38px;
      padding-top: 29px;
      cursor: pointer;
      position: relative;

      .name{
        font-size: 18px;
        color: 606266;
        line-height: 1;
        font-weight: bold;
      }

      .time{
        margin-top: 13px;
        font-size: 14px;
        color: #A6A6A6;
        line-height: 1;
      }

      .number{
        margin-top: 35px;
        font-weight: bold;
        color: #00DDBB;
        span{
          &:first-child{
            font-size: 22px;
          }
          &:last-child{
            font-size: 12px;
          }
        }
      }

      .about{
        margin-top: 9px;
        font-size: 16px;
        color: #A6A6A6;
      }

      .right{
        position: absolute;
        color: #808080;
        width: 23px;
        text-align: center;
        line-height: 23px;
        height: 23px;
        background-color: #E1E8E8;
        border-radius: 4px;
        top: 8px;
        right: 8px;
      }
    }
  }
</style>