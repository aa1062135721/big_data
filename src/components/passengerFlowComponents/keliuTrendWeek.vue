<template>
  <div class="real_time_sales" ref="real_time_sales"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ['type'],
  data() {
    return {
      myChart: null
    };
  },

  mounted() {
    this.fetch();
    // 监听页面，改变图表大小
    this.$root.$on("resize", item => {
      if (item) {
        setTimeout(() => {
          this.myChart.resize();
        }, 0);
      }
    });

    console.log(this.city, 22)
  },

  methods: {
    fetch() {
      let chartDom = this.$refs.real_time_sales;
      this.myChart = echarts.init(chartDom);
      let data = {
        city: ['08/08', '08/09', '08/11', '08/12', '08/13', '08/14', '08/15'],
        num: ['33', '38', '32', '35', '145', '105', '145']
      };
      let option = {
        backgroundColor: "#001D66",
        title: {
            text: ' {a|}',
            padding: [30, 0, 0, 20],
            show: true,
            textStyle: {
                fontFamily: '幼圆',
                lineHeight:20,
                rich: {
                a: {
                    color: '#FFF',
                    fontSize: '12',
                    height: 43,
                    width: 136,
                    backgroundColor: {
                      image:require('../../assets/images/title_klqs_bz.png')
                    }
                },
                }
            }
        },
        tooltip: {
            trigger: "axis",
            backgroundColor: '#001A5C',
            borderColor: '#1F63A3',
            textStyle: {
                color: '#FFFFFF',
            },
            padding: [10,40,10,10],
            formatter: function (params) {
                console.log(params)
                var result = ''
                params.forEach(function (item) {
                    result += item.seriesName + '<br>' + item.marker + item.axisValueLabel + '&nbsp&nbsp' + item.value + '<br>'
                })
                return result
            }
        },
        grid: {
          top: "30%",
          left: "10%",
          bottom: '20%',
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              lineStyle: {
                color:"#6EA8C2"
              }
            },
            
            axisLabel: {
              //坐标轴刻度标签的相关设置
              interval: 0,
              textStyle: {
                color: "#6EA8C2",
                // margin: 15
              },
            },
            axisTick: {
              show: false
            },
            data: data.city
          }
        ],
        yAxis: [
          {
            splitLine: {
              show: true,
              lineStyle: {
                color: "#092b5d"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#65ABE7"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "客流趋势",
            type: "line",
            symbol: "none", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            stack: 100,
             smooth: true,
            // lineStyle: {

            //   normal: {
            //     color: "#06F0B8" // 线条颜色
            //   },
            //   borderColor: "rgba(0,0,0,.4)"
            // },
            itemStyle: {
                normal: {
                    lineStyle: { // 系列级个性化折线样式
                        width: 0.5,
                        type: 'solid',
                        color: "rgba(72,252,180, 0.6)"
                    }
                 },
                 emphasis: {
                    color: '#02675f',
                    lineStyle: { // 系列级个性化折线样式
                        width: 0.5,
                        type: 'dotted',
                        color: "#02675f" //折线的颜色
                    }
                 }
            },
            labelLine: {
                show: false
            },
            tooltip: {
              show: true
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                offset: 0,
                                color: '#44F1AF',
                            },
                            {
                                offset: 1,
                                color: '#001D66',
                            },
                        ],
                        false
                    ),
                },
            },
            data: data.num
          }
        ]
      };

      option && this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.real_time_sales {
  width: 100%;
  height: 100%;
}
</style>