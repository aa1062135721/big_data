<template>
  <div class="real_time_sales" ref="real_time_sales"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
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
  },

  methods: {
    fetch() {
      let chartDom = this.$refs.real_time_sales;
      this.myChart = echarts.init(chartDom);
      let data = {
        city: ['6:00', '10:00', '12:00', '14:00', '16:00', '20:00', '22:00'],
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
                    width: 201,
                    backgroundColor: {
                      image:require('../../assets/images/ic_ssuse.png')
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
                    result += item.marker + item.seriesName + '&nbsp;&nbsp;' + item.value + "%" + '<br>'
                })
                return `
                    <div>
                        <p>使用率</p>
                        ${result}
                    </div>
                  `
            }
        },
        legend: {
            show: true,
            right: '20%',
            bottom: '5%',
            itemGap: 35,
            itemWidth:15,
            itemHeight:10,
            padding: [20, 0, 0, 20],
            data: [
                {
                    name: '总车位',
                    textStyle: {
                        color: '#47FCB3',
                    },
                    itemStyle: {
                        color: '#47FCB3'
                    }
                },
                {
                    name: '空闲车位',
                    textStyle: {
                        color: '#349EE0',
                    },
                    itemStyle: {
                        color: '#349EE0'
                    }
                },
                {
                    name: '已用车位',
                    textStyle: {
                        color: '#4CE7F8',
                    },
                    itemStyle: {
                        color: '#4CE7F8'
                    }
                },
            ],
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
         series: [{
              name: '总车位',
              type: 'line',
              smooth: true, //是否平滑
              showAllSymbol: true,
              // symbol: 'image://./static/images/guang-circle.png',
              symbol: 'none',
              label: {
                  normal: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      color: "#47FCB3",
                      borderColor: "#47FCB3",
                      borderWidth: 2,
                      lineStyle: { // 系列级个性化折线样式
                          width: 0.5,
                          type: 'solid',
                          color: "#47FCB3"
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
              areaStyle: {
                  normal: {
                      color: '#47FCB3'
                  }
              },
              
              data: [0, 30, 60, 120, 150, 30, 0]
          },
          {
              name: '空闲车位',
              type: 'line',
              smooth: true, //是否平滑
              showAllSymbol: true,
              symbol: 'none',
              label: {
                  normal: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      color: "#349EE0",
                      borderColor: "#349EE0",
                      borderWidth: 2,
                      lineStyle: { // 系列级个性化折线样式
                          width: 0.5,
                          type: 'solid',
                          color: "#349EE0"
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
              areaStyle: {
                  normal: {
                      color: '#349EE0'
                  }
              },
              data: [0, 50, 60, 100, 60, 80, 0],
          },
          {
              name: '已用车位',
              type: 'line',
              smooth: true, //是否平滑
              showAllSymbol: true,
              symbol: 'none',
              label: {
                  normal: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      color: "#4CE7F8",
                      borderColor: "#4CE7F8",
                      borderWidth: 2,
                      lineStyle: { // 系列级个性化折线样式
                          width: 0.5,
                          type: 'solid',
                          color: "#4CE7F8"
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
              areaStyle: {
                  normal: {
                      color: '#4CE7F8'
                  }
              },
              data: [0, 50, 60, 100, 200, 100, 0],
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