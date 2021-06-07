<template>
  <div class="outer">
    <p class="title">最近30天报警类型排行</p>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'middleLeftChart',

  data(){
    return{

    }
  },

  mounted(){
    const chart = this.$echarts.init(this.$refs.chart)
    
    console.log(chart)

    const option = {
        xAxis: {
          type: 'value',
          // data: ['箱门打开', '设备离线', '60', '88', '42',],

          axisTick: {
            show: false
          },

          axisLine: {
            show: false,
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
          type:'category',
          data: ['电压过低', '电压过高', '温度过高', '设备离线', '箱门打开',],
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
          data: ['30', '50', '60', '88', '42',],
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