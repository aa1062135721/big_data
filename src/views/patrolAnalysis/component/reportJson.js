export function options(echarts) {
  return {
    xAxis: {
      type: 'category',
      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      axisTick: { //去掉y轴刻度线
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 'normal',
          color: "#FFFFFF"
        },
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: '#0C6970'
        } // x轴坐标轴颜色
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: "#001A5C",
      borderColor: '#1F63A3',
      textStyle: {
        color: 'white',
      },
      borderWidth: 1,
      formatter:function(value){
        var htmls = ''
        value.forEach((item)=>{
          htmls+="<span>"+item.axisValue+"</span><br/>"+item.seriesName+"&emsp;"+item.value+"<br/>"
        })
      	return htmls;
      }
    },
    legend: {
      show: true,
      left: '0%',
      bottom: '10%',
      itemGap: 35,
      itemWidth:15,
      itemHeight:10,
      padding: [20, 0, 0, 20],
      data: [
          {
              name: '未处理',
              textStyle: {
                  color: '#FFA755',
              },
              itemStyle: {
                  color: '#FFA755'
              }
          },
          {
              name: '已处理',
              textStyle: {
                  color: '#0090FF',
              },
              itemStyle: {
                  color: '#0090FF'
              }
          }
      ],
    },
    grid: {
      top: '10%',
      left: '0%',
      right: '2%',
      bottom: '20%',
      containLabel: true
    },
	dataZoom: [{
	       type: 'slider',
	       show: true,
	       xAxisIndex: [0],
	       left: '0%',
		   right:"0%",
	       bottom: "-1%",
	       start: 1,
		   height:12,
		   borderColor:"none",
		   backgroundColor:"#06254c",
		   fillerColor:"#0278e7",
		   textStyle:{
			color:"#071755FF"   
		   },
	       end: 40 //初始化滚动条
	   },
	    {
		   type: 'inside',
		   start: 1,
		   end: 40
	    }
	],
    yAxis: {
      type: 'value',
      axisTick: { //去掉y轴刻度线
        show: false,
      },
      axisLine: {
        "show": true,
        lineStyle: {
          color: '#192C65FF'
        }
      },
      splitLine: {
        show: true,
		lineStyle: {
		  color: '#192C65FF'
		}
      },
      axisLabel: {
        textStyle: {
          fontSize: 'normal',
          color: "#5D7DACFF"
        },
      },
    },
    series: [{
      name: '未处理',
      data: [100,200,300,100,100,200,100,200,300,100,100,200,500],
      type: 'bar',
      itemStyle: {
        color: '#36BCDF'
      },
      barWidth: 20,
      itemStyle: {
        normal: {
		  barBorderRadius:[4, 4, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ffa755FF'
          }, {
            offset: 1,
            color: '#ff9136FF'
          }]),
		  label: {
		  	show: true, //开启显示
		  	position: 'top', //在上方显示
		  	formatter:function(val){
		  		return val.value
		  	},
		  	textStyle: { //数值样式
		  		color: '#FFA453FF',
		  		fontSize: 10
		  	}
		  }
        }
      }
    },
	{
	  name: '已处理',
	  data: [30,20,100,100,100,400,100,350,600,100,140,280,500],
	  type: 'bar',
	  itemStyle: {
	    color: '#36BCDF'
	  },
	  barWidth: 20,
	  itemStyle: {
	    normal: {
		  barBorderRadius:[4, 4, 0, 0],
	      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	        offset: 0,
	        color: '#00c8ffFF'
	      }, {
	        offset: 1,
	        color: '#0090ffFF'
	      }]),
		  label: {
		  	show: true, //开启显示
		  	position: 'top', //在上方显示
		  	formatter:function(val){
		  		return val.value
		  	},
		  	textStyle: { //数值样式
		  		color: '#00C1FFFF',
		  		fontSize: 10
		  	}
		  }
	    }
	  }
	}
	]
  };
}