<template>
	<div class="boxs">
		<img src="../../../assets/images/complete.png" />
		<div class="conth">
			<div id="complete">
				
			</div>
			<div class="type_box">
				<div>
					<div>
						<span></span>
						<div>未开始</div>
					</div>
					<div>任务数200 ，占比35%</div>
				</div>
				<div>
					<div>
						<span></span>
						<div>进行中</div>
					</div>
					<div>任务数200 ，占比50%</div>
				</div>
				<div>
					<div>
						<span></span>
						<div>已完成</div>
					</div>
					<div>任务数200 ，占比15%</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as echarts from "echarts";
	import {options} from "./completeJson.js";
	export default{
		data(){
		  return{
			complete:null
		  }
		},
		mounted(){
			this.complete = echarts.init(document.getElementById('complete'));
			this.setData()
			this.$root.$on("resize", item => {
				if (item) {
					setTimeout(() => {
					this.complete.resize();
					}, 0);
				}
			});
		},
		methods:{
			setData(){
				this.complete.setOption(options(echarts));
			 }
		}
	}
</script>

<style scoped lang="scss">
.boxs{
	width: 100%;
	height: 100%;
	#complete{
		width: 60%;
		height: 100%;
	}
	>.conth{
		align-items: center;
		display: flex;
		width: 100%;
		height:80%;
		.type_box{
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
						font-size: 12px;
						color: #FFFFFFFF;
						font-weight: 500;
					}
				}
				>div:last-child{
					box-sizing: border-box;
					padding-left: 0.68rem;
					font-size: 10px;
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
