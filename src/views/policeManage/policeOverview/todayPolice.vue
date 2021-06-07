<template>
  <div class="today">
    <p class="title">今日报警</p>
    <ul class="list">
      <li class="list-item">
        <p>
          <span>23</span>
          <span>次</span>
        </p>
        <p>电压低</p>
      </li>
      <li class="list-item">
        <p>
          <span>5</span>
          <span>次</span>
        </p>
        <p>电压高</p>
      </li>
      <li class="list-item">
        <p>
          <span>0</span>
          <span>次</span>
        </p>
        <p>过流</p>
      </li>
      <li class="list-item">
        <p>
          <span>23</span>
          <span>次</span>
        </p>
        <p>短路</p>
      </li>
      <li class="list-item">
        <p>
          <span>0</span>
          <span>次</span>
        </p>
        <p>漏电</p>
      </li>
      <li class="list-item">
        <p>
          <span>1</span>
          <span>次</span>
        </p>
        <p>缺相</p>
      </li>
      <li class="list-item">
        <p>
          <span>123</span>
          <span>次</span>
        </p>
        <p>箱门打开</p>
      </li>
      <li class="list-item">
        <p>
          <span>2</span>
          <span>次</span>
        </p>
        <p>温度过高</p>
      </li>
      <li class="list-item">
        <p>
          <span>3</span>
          <span>次</span>
        </p>
        <p>设备离线</p>
      </li>
      <!-- <li class="list-item"></li> -->
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .today{
    height: 100%;
    background-color:#FFFFFF;
    padding-left: 20px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .title{
    font-size: 16px;
    color: #333333;
    line-height: 1;
    padding-top: 29px;
    padding-bottom: 19px;
  }

  .list{
    height: 80px;

    .list-item{
      display: inline-block;
      height: 100%;
      width: 108px;
      border-radius: 8px;
      background-color: #F0F3F5;
      padding-left: 14px;
      p{
        &:first-child{
          margin-top: 19px;
          color: #333333;
          font-weight: bold;
          span{
            &:first-child{
              font-size: 24px;
            }

            &:last-child{
              font-size: 14px;
            }
          }
        }
        &:last-child{
          font-size: 14px;
          color: #A6A6A6;
        }
      }
    }

    .list-item + .list-item{
      margin-left: 16px;
    }
  }
</style>