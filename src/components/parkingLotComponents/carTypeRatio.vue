<template>
	<div class="cartypeRatio">
		<div class="conth">
			<div id="echartsBox" ref="complete">
				
			</div>
			<div class="type_box">
				<div>
					<div>
						<span></span>
						<div>本区车辆数</div>
					</div>
					<div>车辆200 ，占比35%</div>
				</div>
				<div>
					<div>
						<span></span>
						<div>本市车辆数</div>
					</div>
					<div>车辆200 ，占比50%</div>
				</div>
				<div>
					<div>
						<span></span>
						<div>异地车辆数</div>
					</div>
					<div>车辆200 ，占比15%</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as echarts from "echarts";
export default{
    data(){
        return{
        complete:null
        }
    },
    mounted(){
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
    methods:{
        fetch () {
            let chartDom = this.$refs.complete;
            this.myChart = echarts.init(chartDom);
            let option = {
                backgroundColor: "#001D66",
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                show:false
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
                            width: 201,
                            backgroundColor: {
                            image:require('../../assets/images/ic_clsj_zbfx.png')
                            }
                        },
                        }
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '60%',
                        center: ["50%", "55%"], 　　　　//这个属性调整图像的位置
                        label:{            //饼图图形上的文本标签
                            normal:{
                                show:true,
                                position:'inner', //标签的位置
                                textStyle : {
                                    fontWeight : 300 ,
                                    color:"#fff",
                                    fontSize : 13    //文字的字体大小
                                },
                                formatter:'{d}%'   
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,   // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                                shadowOffsetX: 0, // 阴影水平方向上的偏移距离
                                shadowColor: 'rgba(0,0,0,0.5)' // 阴影颜色
                            }
                        },
                        data: [
                            {value: 1048, name: '未开始',itemStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#cd2ef8FF'
                                }, {
                                offset: 1,
                                color: '#f90bfdFF'
                                }]),
                            }},
                            {value: 735, name: '进行中',itemStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#6a37fdFF'
                                }, {
                                offset: 1,
                                color: '#904afdFF'
                                }]),
                            }},
                            {value: 580, name: '已完成',itemStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#31d1e9FF'
                                }, {
                                offset: 1,
                                color: '#3ccfe8FF'
                                }]),
                            }},
                        ],
                    }
                ]
            }
            option && this.myChart.setOption(option);
        }
    }
}
</script>

<style scoped lang="scss">
.cartypeRatio {
	width: 100%;
	height: 100%;
    background: #001D66;
	#echartsBox{
		width: 60%;
		height: 100%;
	}
	>.conth{
		align-items: center;
		display: flex;
		width: 100%;
		height:100%;
		.type_box{
            margin-top: 1rem;
			>div{
				>div{
					display: flex;
					align-items: center;
					>span{
						display: inline-block;
						width: 0.37rem;
						background-color: #CD2EF8FF;
						height: 0.37rem;
						border-radius: 50%;
						margin-right: 5px;
					}
					>div{
						font-size: .7rem;
						color: #FFFFFFFF;
						font-weight: 500;
					}
				}
				>div:last-child{
					box-sizing: border-box;
					padding-left: 0.68rem;
					font-size: .6rem;
					margin-top: 0.5rem;
					color: #7BBCEEFF;
				}
			}
			>div:not(:last-child){
				margin-bottom: 1.68rem;
			}
			>div:nth-of-type(2){
				span{
					background-color: #6A37FDFF;
				}
			}
			>div:nth-of-type(3){
				span{
					background-color: #35D0E9FF;
				}
			}
		}
	}
}
</style>
