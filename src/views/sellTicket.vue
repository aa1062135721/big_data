<template>
    <!-- 票务分析模块 -->
    <div class="sellTicket">
        <allFlow :topTitle="topTitle"></allFlow>
        <flow-detail :ticketLsit="ticketLsit"></flow-detail>
        <div class="threeline">
            <div class="single_biaoge">
                <channel></channel>
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
                    <typeRatio></typeRatio>
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
import channel from '../components/sellTicketComponents/channel.vue'
import sales from '../components/sellTicketComponents/sales.vue'
import realTimeSales from '../components/sellTicketComponents/realTimeSales.vue'
import typeRatio from '../components/sellTicketComponents/typeRatio.vue'
import ticketAll from '../components/sellTicketComponents/ticketAll.vue'
export default {
    data() {
        return {
            topTitle: {
                sellTicketNum: 999999,
                frontText: '累计售票数',
                unit: '张'
            },
            type: 1,
            city: ["0:00", '2:00', '4:00', "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"],
            ticketLsit: [
                {
                    name: '今日售票数',
                    num: 1100,
                    lastName: '昨日售票数',
                    lastNum: 1710
                },
                {
                    name: '本周售票数',
                    num: 5110,
                    lastName: '上周售票数',
                    lastNum: 5760
                },
                {
                    name: '本月售票数',
                    num: 12110,
                    lastName: '上月售票数',
                    lastNum: 8110,
                    upNum: 2000
                },
                {
                    name: '本年售票数',
                    num: 98110,
                    lastName: '去年售票数',
                    lastNum: 88110,
                    lastdowmNum: 1000
                }
            ]
        };
    },

    components: {
        channel,
        sales,
        allFlow,
        flowDetail,
        realTimeSales,
        typeRatio,
        ticketAll
    },

    mounted() {
        
    },

    methods: {
        fetch () {
        }
    },
};
</script>

<style lang="scss" scoped>
.sellTicket {
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