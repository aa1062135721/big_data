<template>
    <div class="sales">
       <div class="top">
           <img :src="type === 1 ? require('../../assets/images/title_xl.png') : require('../../assets/images/title_jdkll.png')">
       </div>
        <div class="menus">
            <p v-for="(item, index) in salesMenus" :key="index">{{item}}</p>
        </div>
       <div class="page-example3">
        <vue-seamless-scroll :data="listData" :class-option="defaultOption">
            <ul class="ul-scoll">
                <li v-for="(item, index) in listData" :key="index">
                    <p>{{item.name}}</p>
                    <p>{{item.salesName}}</p>
                    <p>{{item.type}}</p>
                    <p>{{item.price}}</p>
                    <p>{{item.sales_volume}}</p>
                    <p style="color: #FFBC38">{{item.top}}</p>
                </li>
            </ul>
        </vue-seamless-scroll>
       </div>
    </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
    props: ['type'],  // type 为1 表示 票务分析， type 为1 表示客流分析
    data() {
        return {
            salesMenus: ['景点名称', '票名称', '类型', '票价', '销量', '排行'],
            listData: [
                {name: '景点1', salesName: 11, type: 1, price: 100, sales_volume: 1000, top: 1},
                {name: '景点2', salesName: 22, type: 2, price: 200, sales_volume: 2000, top: 2},
                {name: '景点3', salesName: 33, type: 3, price: 300, sales_volume: 3000, top: 3},
                {name: '景点4', salesName: 44, type: 4, price: 400, sales_volume: 4000, top: 4},
                {name: '景点5', salesName: 55, type: 5, price: 500, sales_volume: 5000, top: 5},
                {name: '景点6', salesName: 66, type: 6, price: 600, sales_volume: 6000, top: 6},
                {name: '景点7', salesName: 77, type: 7, price: 700, sales_volume: 7000, top: 7},
                {name: '景点8', salesName: 88, type: 8, price: 800, sales_volume: 8000, top: 8},
                {name: '景点9', salesName: 99, type: 9, price: 900, sales_volume: 9000, top: 9},
                {name: '景点10', salesName: 100, type: 10, price: 1000, sales_volume: 10000, top: 10},
                ]
        };
    },

    components: {
        vueSeamlessScroll
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
    mounted() {
        console.log(this.type, 555)
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.sales {
    width: 100%;
    height: 100%;
    padding: 1rem 0 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: #001D66;
    .top {
        height: 2.8rem;
    }
    .menus {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        margin: 0 1rem .5rem .2rem;
        padding: 1rem;
        height: 2rem;
        box-sizing: border-box;
        p {
            flex: 1;
            text-align: center;
            font-size: .8rem;
        }
    }
    .page-example3{
        flex: 1;
        overflow: hidden;
        .ul-scoll{
            li{
                margin: .5rem 1rem 0 .2rem;
                padding: 1rem;
                background: #0F3270;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;
                color: #7BBCEE;
                p {
                    flex: 1;
                    text-align: center;
                    font-size: .8rem;
                }
            }
        }
    }
}
</style>