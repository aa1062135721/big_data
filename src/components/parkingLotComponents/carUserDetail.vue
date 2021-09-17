<template>
  <div class="carUserDetail" ref="carUserDetail">
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    props: ['type', 'xData'], // type： 1 表示本周， type： 2 表示本月
    data() {
        return {
            myChart: null,
            colors: {
                typeOneColorS: '#44F0FF',
                typeOneColorE: '#021132',
                typeTwoColorS: '#FF9E17',
                typeTwoColorE: '#071755'
            }
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
        var chartDom = this.$refs.carUserDetail;
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
                        height: 43,
                        width: 182,
                        backgroundColor: {
                        image: this.type === 1 ? require('../../assets/images/ic_cwfx_bz.png') : require('../../assets/images/ic_cwfx_by.png')
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
                    data: this.xData,
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
                        color: this.type === 1 ? this.colors.typeOneColorS : this.colors.typeTwoColorS,
                    },
                    itemStyle: {
                        normal: {
                            color: this.type === 1 ? this.colors.typeOneColorS : this.colors.typeTwoColorS,
                            borderColor: this.type === 1 ? this.colors.typeOneColorS : this.colors.typeTwoColorS,
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0,
                                        color: this.type === 1 ? this.colors.typeOneColorS : this.colors.typeTwoColorS,
                                    },
                                    {
                                        offset: .8,
                                        color: this.type === 1 ? this.colors.typeOneColorE : this.colors.typeTwoColorE,
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
.carUserDetail {
    width: 100%;
    height: 100%;
}
</style>