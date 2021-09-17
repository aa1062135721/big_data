<template>
    <!-- 客流分析模块 -->
    <div class="passengerFlow">
        <allFlow :topTitle="topTitle"></allFlow>
        <flowDetail :ticketLsit="ticketLsit"></flowDetail>
        <div class="threeline">
            <div class="single_biaoge">
                <keliuTrend></keliuTrend>
            </div>
            <div class="single_biaoge">
                <sales :type="type"></sales>
            </div>
        </div>
        <div class="fourline">
            <div class="single_biaoge left">
                <realTimeSales :type="type" :city="city"></realTimeSales>
            </div>
            <div class="single_biaoge right">
                <div class="item_single">
                    <keliuTrendWeek></keliuTrendWeek>
                </div>
                <div class="item_single">
                    <ticketAll :type="type"></ticketAll>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import allFlow from '../components/topComponents/allFlow.vue'
import flowDetail from '../components/topComponents/flowDetail.vue'
import keliuTrend from '../components/passengerFlowComponents/keliuTrend.vue'
import keliuTrendWeek from '../components/passengerFlowComponents/keliuTrendWeek.vue'
import sales from '../components/sellTicketComponents/sales.vue'
import ticketAll from '../components/sellTicketComponents/ticketAll.vue'
import realTimeSales from '../components/sellTicketComponents/realTimeSales.vue'
export default {
    data() {
        return {
            topTitle: {
                sellTicketNum: 9999999,
                frontText: '累计客流量',
                unit: '人'
            },
            type: 2,
            city: ['08/01', '08/03', '08/05', '08/07', '08/10', '08/15', '08/17', '08/19', '08/21', '08/23', '08/25', '08/27', '08/29', '08/31'],
            ticketLsit: [
                {
                    name: '今日客流量',
                    num: 1100,
                    lastName: '昨日客流量',
                    lastNum: 1710
                },
                {
                    name: '本周客流量',
                    num: 5110,
                    lastName: '上周客流量',
                    lastNum: 5760
                },
                {
                    name: '本月客流量',
                    num: 12110,
                    lastName: '上月客流量',
                    lastNum: 8110,
                    upNum: 2000
                },
                {
                    name: '本年客流量',
                    num: 98110,
                    lastName: '去年客流量',
                    lastNum: 88110,
                    lastdowmNum: 1000
                }
            ]
        };
    },

    components: {
        allFlow,
        flowDetail,
        keliuTrend,
        keliuTrendWeek,
        sales,
        realTimeSales,
        ticketAll
    },

    mounted() {
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.passengerFlow {
    padding: 0 4rem;
    .threeline {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .single_biaoge {
            width: 49.2%;
            height: 22rem;
            border: 1px solid #1F63A3;
            margin-top: 1rem;
        }
    }
    .fourline {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .single_biaoge {
            width: 49.2%;
            height: 16rem;
            margin-top: 1rem;
        }
        .left {
            border: 1px solid #1F63A3;
        }
        .right {
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