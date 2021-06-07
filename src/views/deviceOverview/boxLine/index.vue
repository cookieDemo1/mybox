<template>
  <div class="line">
    <p class="title">近7天传输箱在线率</p>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'boxLine',
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
        xAxis: {
          type: 'category',
          data: ['1.05', '1.06', '1.07', '1.08', '1.09', '1.10', '1.11'],

          axisTick: {
            show: false
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: '#E6E6E6'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#666666'
            }
          }
        },

        yAxis: {
          type:'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },

          splitLine: {
            lineStyle: {
              color: '#E6E6E6'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#666666'
            }
          }
        },
        
        series: [{
          data: [0.1, 0.4, 0.6, 0.8, 0.9, 0.7, 0.65],
          color: '#00DDBB',
          type: 'bar',
          barWidth: 18
        }],
        

        grid: {
          top: '7%',
          left: '2%',
          right: '10%',
          bottom: '0%',
          containLabel: true
        }
      }

      chart.setOption(option)
      
    }
  },

}
</script>

<style lang='scss' scoped>
  .line{
    height: 100%;
    /* background-color: orangered; */
    padding: 20px;
  }

  .title{
    font-size: 16px;
    color: #333333;
  }

  .chart{
    margin-top: 20px;
    height: 80%;
    /* background-color: bisque; */
  }
</style>