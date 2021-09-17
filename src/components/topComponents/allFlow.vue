<template>
    <div class="top">
         <div class="title">
            <span>{{topTitle.frontText}}</span>
            <div class="number">
                <h4 v-for="(item, index) in String(topTitle.sellTicketNum)" :key="index" class="numItemStyle">{{item}}</h4>
            </div>
            <span>{{topTitle.unit}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        topTitle: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            //  SellTicketNum: 999999,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.title {
    height: 6rem;
    background: url('../../assets/images/home_dzk.png') no-repeat;
    background-size: auto 100%;
    background-position-x: center;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: #D5FDFD;
    letter-spacing: .5rem;
    font-weight: 600;
    .number {
        display: flex;
        .numItemStyle {
            background: #001D66;
            width: 2rem;
            border: 1px solid #1F63A3;
            margin-right: .4rem;
            padding: .6rem .2rem .6rem .4rem;
            text-align: right;
            text-shadow: 0 2px 8px #ccc;
        }
    }
}
</style>