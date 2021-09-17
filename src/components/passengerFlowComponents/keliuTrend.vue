<template>
  <div class="keliuTrend" ref="keliuTrend">
  </div>
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
    this.fetch()
    this.$root.$on('resize',(item) => {
        if (item) {
            setTimeout(() => {
                this.myChart.resize()
            }, 0);
        }
    })
  },

  methods: {
    fetch() {
        var chartDom = this.$refs.keliuTrend;
        this.myChart = echarts.init(chartDom);
        let option = {
            backgroundColor: '#001D66',
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
                        height: 45,
                        width: 179,
                        backgroundColor: {
                        image: require('../../assets/images/title_klsd.png')
                        }
                    },
                    }
                }
            },
            grid: {
                top: '25%',
                bottom: '15%',
                right: '8%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        width: 0,
                    },
                },
                padding: [10,40,10,10],
                backgroundColor: '#0F3270',
                borderColor: '#1F63A3',
                textStyle: {
                    color: '#CAF2F5',
                },
                formatter: function (params) {
                    console.log(params)
                    var result = ''
                    params.forEach(function (item) {
                        result += item.seriesName +  '<br>' + item.marker + item.axisValue + '：' + item.value + '<br>'
                    })
                    return result
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                    axisLine: {
                        lineStyle: {
                            color: '#1F63A3'
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#8A9ECF',
                        },
                        // 默认x轴字体大小
                        fontSize: 12,
                        // margin:文字到x轴的距离
                    },
                    boundaryGap: false,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'solid',
                            color: '#1F63A3',
                        },
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#1F63A3',
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#8A9ECF',
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'solid',
                            color: '#1F63A3',
                        },
                    },
                },
                {
                    type: 'value',
                    position: 'right',
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#0173DA',
                        },
                        formatter: '{value}',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#0173DA',
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    name: '客流量',
                    type: 'line',
                    data: [500, 1200, 1100, 1400, 2500, 1600, 1000, 2400, 800, 1400],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 1.5,
                        color: '#FF9E17',
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF9E17',
                            borderColor: '#FF9E17',
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0,
                                        color: '#FF9E17',
                                    },
                                    {
                                        offset: .8,
                                        color: '#071755',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                }
            ],
        };
        option && this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.keliuTrend {
    width: 100%;
    height: 100%;
}
</style>