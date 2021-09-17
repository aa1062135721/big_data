<template>
  <div class="realTimeCar" ref="realTimeCar">
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
            },
            data: {
                city: ["0:00", "6:00", "12:00", "14:00", "18:00", "20:00", "22:00", "24:00"],
                num: ["40", "60", "22", "85", "50", "40", "68", "24"]
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
        var chartDom = this.$refs.realTimeCar;
        this.myChart = echarts.init(chartDom);
       
        let option = {
            backgroundColor:'#001D66',
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
                        width: 184,
                        backgroundColor: {
                        image: require('../../assets/images/ic_ssllqs.png')
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
                        result += item.marker + item.seriesName + '&nbsp;&nbsp;' + item.value + '<br>'
                    })
                    return `
                        <div>
                            <p>车辆数</p>
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
                        name: '停车场A',
                        textStyle: {
                            color: '#04CDF4',
                        },
                        itemStyle: {
                            color: '#50FCFC'
                        }
                    },
                    {
                        name: '停车场B',
                        textStyle: {
                            color: '#FF9E17',
                        },
                        itemStyle: {
                            color: '#FF9E17'
                        }
                    },
                    {
                        name: '停车场C',
                        textStyle: {
                            color: '#06F0B8',
                        },
                        itemStyle: {
                            color: '#00A0E9'
                        }
                    },
                ],
            },
            grid: {
                top: '25%',
                bottom: '28%',
                right: '8%'
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: 'color:"#092b5d"'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#24c4ff',
                        margin: 15,
                    },
                },
                axisTick: {
                    show: false,
                },
                data: this.data.city
            }],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#092b5d'
                        },
                    },
                    axisLine: {
                        show: false, // Y轴，轴线不显示
                        lineStyle: {
                            color: "#092b5d"
                        }

                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#24c4ff',

                        },
                        formatter: function(value) {
                            if (value === 0) {
                                return value
                            }
                            return value 
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                }
            ],
            series: [{
                name: '停车场A',
                type: 'line',
                symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbolSize: 4,
                lineStyle: {
                    normal: {
                        color: "#04CDF4", // 线条颜色
                    },
                    borderColor: 'rgba(0,0,0,.4)',
                },
                itemStyle: {
                    color: "#04CDF4",
                    borderColor: "#04CDF4",
                    borderWidth: 2
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                tooltip: {
                    show: true
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#04CDF4"
                            },
                            {
                                offset: 1,
                                color: "#001d66"
                            }
                        ], false)
                    }
                },
                data: [100, 300, 600, 1200, 1500, 300, 2700, 1000, 400, 800]
            },
            {
                name: '停车场B',
                type: 'line',
                symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbolSize: 4,
                lineStyle: {
                    normal: {
                        color: "#FF9E17", // 线条颜色
                    },
                    borderColor: 'rgba(0,0,0,.4)',
                },
                itemStyle: {
                    color: "#FF9E17",
                    borderColor: "#FF9E17",
                    borderWidth: 1

                },
                label: {
                    normal: {
                        show: false
                    }
                },
                tooltip: {
                    show: true
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#FF9E17"
                            },
                            {
                                offset: 1,
                                color: "#002569"
                            }
                        ], false)
                    }
                },
                data:  [500, 1200, 1100, 1400, 2500, 1600, 1000, 2400, 800, 1400]
            },
            {
                name: '停车场C',
                type: 'line',
                symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbolSize: 4,
                lineStyle: {
                    normal: {
                        color: "#06F0B8", // 线条颜色
                    },
                    borderColor: 'rgba(0,0,0,.4)',
                },
                itemStyle: {
                    color: "#06F0B8",
                    borderColor: "#06F0B8",
                    borderWidth: 2
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                tooltip: {
                    show: true
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#06F0B8"


                            },
                            {
                                offset: 1,
                                color: "#03246C"
                            }
                        ], false)
                    }
                },
                data: [700, 1500, 600, 1000, 2000, 1800, 1600, 1700, 1800, 1400]
            }]
        };
        option && this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.realTimeCar {
    width: 100%;
    height: 100%;
}
</style>