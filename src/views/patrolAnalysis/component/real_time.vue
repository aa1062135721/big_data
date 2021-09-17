<template>
		<div class="real_times">
			<img src="../../../assets/images/real_time.png" />
			<div class="headers">
				<div class="address">巡检地点</div>
				<div class="name">巡检设备</div>
				<div class="person">巡检人</div>
				<div class="radios">是否异常</div>
			</div>
			<div class="cont">
				<vue-seamless-scroll :data="listData" :class-option="defaultOption">
				<div v-for="(it,ix) in listData" class="list">
					<div class="address">巡检巡检地巡检巡检地点地点巡检巡检地点地点点地点</div>
					<div class="name">巡检设备</div>
					<div class="person">巡检人</div>
					<div class="radios">
						<span class="normal" v-if="it==1">正常</span>
						<span class="abnormal" v-else>异常</span>
					</div>
				</div>
				</vue-seamless-scroll>
			</div>
		</div>
</template>

<script>
	import vueSeamlessScroll from 'vue-seamless-scroll'
	export default{
		data(){
			return{
				listData:[]
			}
		},
		computed: {
		    defaultOption () {
		        return {
		            step: .5, // 数值越大速度滚动越快
		            limitMoveNum: this.listData.length, // 开始无缝滚动的数据量 this.dataList.length
		            hoverStop: true, // 是否开启鼠标悬停stop
		            direction: 1, // 0向下 1向上 2向左 3向右
		            openWatch: true, // 开启数据实时监控刷新dom
		            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
		            singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
		            waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
		        }
		    }
		},
		components: {
		    vueSeamlessScroll
		},
		created(){
			for(var i=0;i<20;i++){
				this.listData.push({})
			}
		}
	}
</script>

<style scoped lang="scss">
.real_times{
	>.headers{
		display: flex;
		width: 100%;
		color: white;
		box-sizing: border-box;
		padding: 0.43rem 0 0.68rem 0;
		font-weight: 400;
	}
	.address{
		width: 40%;
		box-sizing: border-box;
		padding-left: 1.5rem;
	}
	.name,.person,.radios{
		width: 20%;
		text-align: center;
	}
	.radios{
		text-align: left;
		.normal{
			color: #FFBC38FF;
		}
		.abnormal{
			color: #B52627FF;
		}
	}
	.cont::-webkit-scrollbar {
	  display: none; /* Chrome Safari */
	}
	.cont{
		scrollbar-width: none; /* firefox */
		 -ms-overflow-style: none; /* IE 10+ */
		height: 9.12rem;
		overflow-y: scroll;
		.list{
			display: flex;
			align-items: center;
			display: flex;
			margin-bottom: 0.43rem;
			height: 2rem;
			color: #7BBCEEFF;
			background-color:#0F3270FF;
			>div{
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
			}
		}
	}
}
</style>
