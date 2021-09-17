export function options(echarts) {
  return {
        tooltip: {
            trigger: 'item'
        },
        legend: {
           show:false
        },
        series: [
            {
                type: 'pie',
                radius: '75%',
				center: ["40%", "48%"], 　　　　//这个属性调整图像的位置
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
  };
}