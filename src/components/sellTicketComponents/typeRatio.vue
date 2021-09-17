<template>
    <div class="ratio">
        <div class="type-ratio" ref="typeRatio">

        </div>
        <div class="text">
            <ul>
                <li v-for="(item, index) in ratioList" :key="index">
                    <span :style="{backgroundColor: color[index]}"></span>
                    <p>{{item.name}}</p>
                    <p>票数{{item.num}}, 占比{{item.ratio}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    data() {
        return {
            myChart: null,
            data: [
                {
                value: 335,
                name: 'A'
            },
            {
                value: 310,
                name: 'B'
            },
            {
                value: 234,
                name: 'C'
            },
            {
                value: 135,
                name: 'D'
            },
            {
                value: 148,
                name: 'E'
            }
            ],
            color: [  
                "#0BB4AB",
                "#FA8C09",
                "#77BFFF",
                "#EF2D2D",
                "#006CFF",
                "#FF4848"
            ],
            ratioList: [
                {name: '票1', num: 100, ratio: '20%'},
                {name: '票2', num: 200, ratio: '40%'},
                {name: '票3', num: 50, ratio: '10%'},
                {name: '票4', num: 100, ratio: '20%'},
                {name: '票5', num: 50, ratio: '10%'}
            ]
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
        if (this.ratioList.length > this.color.length) {
           this.color.map(res => {
               this.color.push(res)
           })
        }
    },

    methods: {
        fetch() {
            let chartDom = this.$refs.typeRatio;
            this.myChart = echarts.init(chartDom);
            let option ={
                backgroundColor:"#001D66",
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
                            image: require('../../assets/images/title_spzb.png')
                            }
                        },
                        }
                    }
                },
                color: this.color,
                graphic:[{       //图形中间文字
                    type:"text",
                    left:"center",
                    top:"45%",
                    style:{
                        text:"200",
                        textAlign:"center",
                        fill:"#FFFFFF",
                        fontSize: 20
                    }
                },
                {       //图形中间文字
                    type:"text",
                    left:"center",
                    top:"54%",
                    style:{
                        text:"售票总数",
                        textAlign:"center",
                        fill:"#FFFFFF",
                        fontSize: 14
                    }
                }],
                series: [
                    {
                        name: "售票类型占比分析",
                        type: "pie",
                        radius: ["44%", "63%"],
                        center: ["50%", "60%"],
                        roseType: "radius",
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true,
                                lineStyle: {
                                    color: '#fff' //引导线颜色
                                }
                            }
                        },
                        data: this.data
                    }
                ]
            };
            option && this.myChart.setOption(option);
        }
    },
};
</script>

<style lang="scss" scoped>
.ratio {
    width: 100%;
    height: 100%;
    background-color: #001D66;
    display: flex;
    justify-content: space-around;
    .type-ratio {
        width: 62%;
        height: 99%;
    }
    .text {
        overflow: hidden;
        width: 38%;
        overflow-y: auto;
        padding-top: .5rem;
        ul {
            li {
                margin: 1rem 0;
                position: relative;
                padding-left: 1.5rem;
                p:nth-of-type(1) {
                    color: #D5FDFD;
                    margin-bottom: .5rem;
                    font-size: .8rem;
                    text-shadow: 0 0px 8px #ccc;
                }
                p:last-child {
                    color: #DDDFEB;
                    font-size: .8rem;
                }
                span {
                    display: inline-block;
                    width: .5rem;
                    height: .5rem;
                    border-radius: 50%;
                    position: absolute;
                    top: .2rem;
                    left: 0;
                }
            }
        }
        &::-webkit-scrollbar {
            display: none; 
        }
    }
}
</style>