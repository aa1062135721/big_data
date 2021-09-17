<template>
	<div class="patrolAnalysis">
		<div class="left">
			<maps/>
		</div>
		<div class="right">
			<div class="real_time">
				<realTime/>
			</div>
			<div class="complete">
				<complete/>
			</div>
			<div class="report">
				<report/>
			</div>
		</div>
	</div>
</template>

<script>
	import realTime from "./component/real_time.vue"
	import report from "./component/report.vue"
	import complete from "./component/complete.vue"
	import maps from "./component/map.vue"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			realTime,report,
			complete,maps
		}
	}
</script>

<style scoped lang="scss">
.patrolAnalysis{
	-moz-user-select: none;
	/* Firefox */
	-webkit-user-select: none;
	/* WebKit */
	-ms-user-select: none;
	/* IE */
	-khtml-user-select: none;
	/* KHTML */
	-o-user-select: none;
	/* Opera */
	user-select: none;
	/* CSS3属性 */
	box-sizing: border-box;
	// padding-top: 1.625rem;
	height: 100%;
	display: flex;
	position: relative;
	>.left{
		height:61.8rem;
		width: 100%;
		margin-right: 0.62rem;
	}
	>.right{
		z-index: 600;
		position: absolute;
		top:1.625rem;
		right: 0;
		width: 28.75rem;
		>div:not(:last-child){
			margin-bottom: 0.75rem;
		}
		>div{
			background:rgba(7, 23, 83, 0.8);
			border: 1px solid #1F63A3;
			border-radius: 0.312rem;
			box-sizing: border-box;
			padding: 0.56rem 1rem;
			>img{
				width: 10.56rem;
				height: 2.68rem;
			}
		}
		.real_time{
			box-sizing: border-box;
			font-size: 0.81rem;
			height: 15.31rem;
		}
		.complete{
			height: 15.93rem;
		}
		.report{
			height: 27.5rem;
		}
	}
}
</style>
