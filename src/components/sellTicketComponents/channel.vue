<template>
  <div class="channel" ref="channer">
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
        var chartDom = this.$refs.channer;
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
                        width: 169,
                        backgroundColor: {
                        image: require('../../assets/images/ic_spqd.png')
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
            legend: {
                show: true,
                right: '10%',
                top: '5%',
                itemGap: 35,
                itemWidth:15,
                itemHeight:10,
                padding: [20, 0, 0, 20],
                data: [
                    {
                        name: '窗口售票',
                        textStyle: {
                            color: '#CAF2F5',
                        },
                        itemStyle: {
                            color: '#50FCFC'
                        }
                    },
                    {
                        name: '自主售票',
                        textStyle: {
                            color: '#CAF2F5',
                        },
                        itemStyle: {
                            color: '#FF9E17'
                        }
                    },
                    {
                        name: '线上售票',
                        textStyle: {
                            color: '#CAF2F5',
                        },
                        itemStyle: {
                            color: '#00A0E9'
                        }
                    },
                ],
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
                    var result = ''
                    params.forEach(function (item) {
                        result += item.marker + item.seriesName + '：' + item.value + '<br>'
                    })
                    return `
                        <div>
                            <p>售票渠道</p>
                            ${result}
                        </div>
                `
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
                    name: '窗口售票',
                    type: 'line',
                    data: [100, 300, 600, 1200, 1500, 300, 2700, 1000, 400, 800],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 1.5,
                        color: '#00DAFF',
                    },
                    itemStyle: {
                        normal: {
                            color: '#00DAFF',
                            borderColor: '#00DAFF',
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0,1,
                                [
                                    {
                                        offset: 0,
                                        color: '#4FF9FA',
                                    },
                                    {
                                        offset: .8,
                                        color: '#071652',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
                {
                    name: '自主售票',
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
                },
                {
                    name: '线上售票',
                    type: 'line',
                    data: [700, 1500, 600, 1000, 2000, 1800, 1600, 1700, 1800, 1400],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 1.5,
                        color: '#0097e0',
                    },
                    itemStyle: {
                        normal: {
                            color: '#00A0E9',
                            borderColor: '#00A0E9',
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0,
                                        color: '#0097e0',
                                    },
                                    {
                                        offset: .8,
                                        color: '#021a5d',
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
.channel {
    width: 100%;
    height: 100%;
}
</style>