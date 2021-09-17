<template>
  <div class="real_time_sales" ref="real_time_sales"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ['type', 'city'],
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
        city: this.city,
        num: ['33', '38', '32', '35', '145', '105', '145', '68', '142', '58', '44', '42', '66']
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
                      image: this.type === 1 ? require('../../assets/images/ic_spsd.png') : require('../../assets/images/title_klqs.png')
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
                var result = ''
                params.forEach(function (item) {
                    result += item.seriesName + '<br>' + item.axisValueLabel + '&nbsp&nbsp' + item.value + '<br>'
                })
                return `
                    <div>
                        ${result}
                    </div>
                  `
            }
        },
        grid: {
            top: '25%',
            bottom: '15%',
            right: '8%'
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
            name: "售票数",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 4,
            lineStyle: {
              normal: {
                color: "#06F0B8" // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)"
            },
            itemStyle: {
              color: "#06F0B8",
              borderColor: "#06F0B8",
              borderWidth: 1
            },
            label: {
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "#289279"
                    },
                    {
                      offset: .8,
                      color: "#001D66"
                    }
                  ],
                  false
                ),
              }
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