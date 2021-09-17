<template>
    <div class="ticket-all" ref="ticketAll">
        
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    props: ['carInfo'],
    data() {
        return {
            myChart: null
        };
    },

    mounted() {
        this.fetch()
        this.$root.$on("resize", item => {
            if (item) {
                setTimeout(() => {
                this.myChart.resize();
                }, 0);
            }
        });
        console.log(this.carInfo)
    },

    methods: {
        fetch () {
            let chartDom = this.$refs.ticketAll;
            this.myChart = echarts.init(chartDom);
            let charts = {
                xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                value: ['124', '125', '648', '423', '409', '347', '456', '852', '1234', '1344', '1452', '2563']
            }

            let option =  {
                backgroundColor: '#001D66',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    backgroundColor: '#001A5C',
                    borderColor: '#1F63A3',
                    textStyle: {
                        color: '#FFFFFF',
                    },
                    padding: [10,40,10,10],
                    formatter: function (params) {
                        var result = ''
                        params.forEach(function (item) {
                            result += item.axisValueLabel + '&nbsp&nbsp' + item.value + '<br>'
                        })
                        return `
                            <div>
                                <p>售票数</p>
                                ${result}
                            </div>
                        `
                    }
                },
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
                            width: 137,
                            backgroundColor: {
                                image: this.carInfo.titleImgDetail.img
                            }
                        },
                        }
                    }
                },
                grid: {
                    top: '30%',
                    left: '15%',
                    right: '8%',
                    bottom: '15%'
                },
                
                color: '#fff',
                xAxis: [{
                    type: 'category',
                    data: charts.xAxis,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,1)'
                        }
                    },
                    axisLabel: {
                        color: '#B1BCD2', 
                        textStyle: {
                            fontSize: 8
                        }
                    },
                    axisPointer: {
                        lineStyle: {
                            color: 'red'
                        }
                    }
                }],
                yAxis: [{
                    axisLabel: {
                        formatter: '{value}',
                        color: '#B1BCD2'
                    },
                    axisLine: {
                        show: true
                    },
                    splitLine: {
                        show: false, // 分割线
                    }
                }],
                series: [
                    {
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                            color: 'rgba(255,255,255,0.1)',
                            borderColor: '#FFF',
                            borderWidth: 2,
                            normal: {
                                show: true,
                                color: '#185EA9'
                            },
                            emphasis: {
                                color: '#18F7FF',
                            }
                        },
                        data: charts.value,
                        animationDuration: 1000,
                    }
                ],
                animationEasing: 'cubicOut'
            }
            option && this.myChart.setOption(option);
        }
    },
};
</script>

<style lang="scss" scoped>
.ticket-all {
    width: 100%;
    height: 100%;
}
</style>