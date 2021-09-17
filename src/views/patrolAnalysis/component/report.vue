<template>
	<div class="boxs">
		<img src="../../../assets/images/report.png" />
		<div id="reports">
			
		</div>
	</div>
</template>

<script>
	import * as echarts from "echarts";
	import {options} from "./reportJson.js"
	export default{
		data(){
		  return{
			reports:null
		  }
		},
		mounted(){
			this.reports = echarts.init(document.getElementById('reports'));
			this.setData()
			this.$root.$on("resize", item => {
				if (item) {
					setTimeout(() => {
					this.reports.resize();
					}, 0);
				}
			});
		},
		methods:{
			setData(){
				this.reports.setOption(options(echarts));
			 }
		}
	}
</script>

<style scoped lang="scss">
#reports{
	width:100%;
	height: 85%;
}
.boxs{
	width: 100%;
	height:100%;
}
</style>
