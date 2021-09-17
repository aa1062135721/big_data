<template>
    <!-- 车位分析模块 -->
    <div class="parkingLot">
        <allFlow :topTitle="topTitle"></allFlow>
        <flowDetail :ticketLsit="ticketLsit" :iconUrl="true"></flowDetail>
        <div class="twoline">
            <div class="single_biaoge">
               <div class="item_single">
                   <!-- 车辆使用趋势 本周 -->
                    <carUserDetail :type='1' :xData="carUserWeekList"></carUserDetail>
                </div>
                <div class="item_single">
                   <!-- 车辆使用趋势 本月 -->
                    <carUserDetail :type='2' :xData="carUserMonthList"></carUserDetail>
                </div>
            </div>
            <div class="single_biaoge">
                <div class="item_single">
                    <realTimeCar></realTimeCar>
                </div>
                <div class="item_single">
                    <carTimeUse></carTimeUse>
                </div>
            </div>
        </div>
        <div class="twoline">
            <div class="single_biaoge">
               <div class="item_single">
                   <carTypeRatio></carTypeRatio>
                </div>
                <div class="item_single">
                    <!-- 车辆累计情况 -->
                    <carDetail :carInfo="carAllDetail"></carDetail>
                </div>
            </div>
            <div class="single_biaoge">
                <div class="item_single">
                    <!-- 车辆归属地统计 -->
                    <carDetail :carInfo="carBelong"></carDetail>
                </div>
                <div class="item_single">
                    <!-- 停车时长趋势 -->
                    <carDetail :carInfo="parkingTime"></carDetail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import allFlow from '../components/topComponents/allFlow.vue'
import flowDetail from '../components/topComponents/flowDetail.vue'
import carUserDetail from '../components/parkingLotComponents/carUserDetail.vue'
import realTimeCar from '../components/parkingLotComponents/realTimeCar.vue'
import carTimeUse from '../components/parkingLotComponents/carTimeUse.vue'
import carTypeRatio from '../components/parkingLotComponents/carTypeRatio.vue'
import carDetail from '../components/parkingLotComponents/carDetail.vue'
export default {
    data() {
        return {
            topTitle: {
                sellTicketNum: 9999999,
                frontText: '累计车辆数',
                unit: '辆'
            },
            ticketLsit: [
                {
                    name: '今日车辆数',
                    num: 1100,
                    lastName: '昨日车辆数',
                    lastNum: 1710
                },
                {
                    name: '本周车辆数',
                    num: 5110,
                    lastName: '上周车辆数',
                    lastNum: 5760
                },
                {
                    name: '本月车辆数',
                    num: 12110,
                    lastName: '上月车辆数',
                    lastNum: 8110,
                    upNum: 2000,
                    lastdowmNum: 1000
                },
                {
                    name: '平均停车时长',
                    num: '330分钟',
                    lastName: '车位占用率',
                    lastNum: '20%',
                }
            ],
            carUserWeekList: ['08/08', '08/09', '08/10', '08/11', '08/12', '08/13', '08/14'],
            carUserMonthList: ['08/01', '08/05', '08/15', '08/20', '08/25', '08/31'],
            carAllDetail: { // 车辆累计情况
                type: 1,
                titleImgDetail: {
                    img: require('@/assets/images/title_cl_lj.png'),
                    width: 137,
                    height: 43
                }
            },
            carBelong: { // 车辆归属地统计
                type: 2,
                titleImgDetail: {
                    img: require('@/assets/images/title_cl_gs.png'),
                    width: 153,
                    height: 43
                }
            },
            parkingTime: { // 停车时长趋势
                type: 3,
                titleImgDetail: {
                    img: require('@/assets/images/title_tc_time.png'),
                    width: 137,
                    height: 43
                }
            }
        };
    },

    components: {
        allFlow,
        flowDetail,
        carUserDetail,
        realTimeCar,
        carTimeUse,
        carTypeRatio,
        carDetail
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.parkingLot {
    .twoline {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .single_biaoge {
            width: 49.2%;
            height: 19.2rem;
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item_single {
                width: 49.2%;
                height: 100%;
                border: 1px solid #1F63A3;
            }
        }
    }
}
</style>