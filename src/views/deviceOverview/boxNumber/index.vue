<template>
  <div class="box">
    <p class="title">传输箱数量</p>
    <div class="outer">
      <div class="chart" ref="chart"></div>
      <div class="info">
        <p class="sum">
          <span>48</span>
          <span>总共</span>
        </p>
        <p class="line">
          <span>36</span>
          <span>在线</span>
        </p>
        <p class="dead">
          <span>12</span>
          <span>离线</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boxNumber',
  data(){
    return{

    }
  },

  mounted(){
    this.draw()
  },

  methods: {
    draw(){
      const chart = this.$echarts.init(this.$refs.chart)
      
      const option = {
        series: [{
          type: 'liquidFill',
          data: [0.8, 0.7],
          color: ['#4FD684', '#4FD684'],
          label: {
            fontSize: 32,
            color: '#1C9048'
          },
          radius: '100%',
          outline: {
            show: false
          }
        }]
      }
      

      chart.setOption(option)  
    }
  }
}
</script>

<style scoped lang='scss'>
  .box{
    /* height: 100%; */
    border-radius: 6px;
    position: relative;
  }

  .title{
    margin: 20px 0 0 20px;
    font-size: 16px;
  }

  .outer{
    width: 270px;
    height: 160px;
    margin-top: 30px;
    /* background-color: palegreen; */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .chart{
      width: 160px;
      height: 100%;
      /* background-color: papayawhip; */
      display: inline-block;
    }

    .info{
      display: inline-block;
      width: calc(100% - 160px);
      height: 100%;
      /* background-color: wheat; */
      position: absolute;
      top: 10px;
    

      p{
        height: calc(100% * 1/3);
        text-align: right;
      }

      .sum{
        span:first-child{
          font-size: 20px;
          color: #1980FF;
          padding-right: 5px;
        }
        span:last-child{
          font-size: 12px;
          color: #333;
        }
      }

      .line{
        span:first-child{
          font-size: 20px;
          color: #37CF76;
          padding-right: 5px;
        }
        span:last-child{
          font-size: 12px;
          color: #333;
        }
      }

      .dead{
        span:first-child{
          font-size: 20px;
          color: #A6A6A6;
          padding-right: 5px;

        }
        span:last-child{
          font-size: 12px;
          color: #333;
        }
      }

    }
  }
</style>