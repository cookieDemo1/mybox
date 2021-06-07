<template>
  <div class="outer">
    <p class="title">30天报警最多的设备排行</p>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'bottomRightChart',

  mounted() {
    this.draw()
  },

  methods: {
    draw(){
      const chart = this.$echarts.init(this.$refs.chart)

      const option = {
        xAxis: {
          type: 'category',
          data: ['1区2巷', '1区4巷', '2区4巷', '3区2巷', '3区4巷'],

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
          data: [90, 82, 80, 60, 55],
          color: '#FB9400',
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
  }
}
</script>

<style lang='scss' scoped>
  .outer{
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 20px 30px 30px 20px;
    display: flex;
    flex-direction: column;
  }

  .title{
    height: 17px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .chart{
    flex: 1;
    /* background-color: slateblue; */
  }
</style>