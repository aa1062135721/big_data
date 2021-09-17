<template>
    <div class="top">
      <div class="left">
        <p>
          <img src="../assets/images/ic_fh.png" />
          <span>返回</span>
        </p>
      </div>
      <div class="center">
         <span  v-for="(item, index) in menuList" :key="item.id" :class="[typeStyle(item.id, index), `span${item.id}`]" @click="goPage(item.id)">{{item.name}}</span>
      </div>
      <div class="right">
        <p class="p1">周{{week[dayjs(date).format('d')]}} {{dayjs(date).format("HH:mm")}}</p>
        <p class="p2">{{dayjs(date).format('YYYY年MM月DD日')}}</p>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        type: Number
    },

    data() {
        return {
            menuList: [
                {id: 1, name: '景区概览'},
                {id: 2, name: '票务分析'},
                {id: 3, name: '客流分析'},
                {id: 4, name: '巡检分析'},
                {id: 5, name: '车位分析'}
            ],
            date: new Date(),
            week: ['天', '一', '二', '三', '四', '五', '六'],
            timer: "",
        };
    },
    
    mounted() {
        this.timer = setInterval(() => {
            this.date = new Date()
        }, 1000)
    },

    methods: {
        typeStyle (id) {
            let str = ''
           if (id <= 2) {
                this.type === id ? str = 'leftBg' : str = 'leftBgNot'
           } else {
                this.type === id ? str = 'rightBg' : str = 'rightBgNot'
           }
            return str
        },

        goPage (id) {
            this.$emit('typeMenu', id);
            sessionStorage.setItem("typeMenu", id)
            let url = ''
            switch (id) {
                case 1:
                    url = 'allScenicSpot'
                    break;
                case 2:
                    url = 'sellTicket'
                    break;
                case 3:
                    url = 'passengerFlow'
                    break;
				case 4:
					url = 'patrolAnalysis'
                    break;
                case 5:
                    url = 'parkingLot'
                    break;
            }
            this.$router.push(url)
        }
    }
};
</script>

<style lang="scss" scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding-top: .2rem;
    .left {
        width: 15%;
        font-size: .8rem;
        color: #C1C8F1;
        display: flex;
        justify-content: flex-start;
        align-self: flex-end;
        padding-bottom: .5rem;
        p {
            text-align: center;
            width: 4.5rem;
            height: 2rem;
            background: url('../assets/images/nav_btn_back.png') no-repeat center center;
            background-size: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
            width: .7rem;
            height: .7rem;
            margin-right: .4rem;
            }
        }
    }
    .center {
        width: 70%;
        height: 100%;
        background: url('../assets/images/nav_bg.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        color: #EDEDED;
        font-size: .8rem;
        span {
            line-height: 2.5rem;
            bottom: .5rem;
            position: absolute;
            text-align: center;
        }
        .span1 {
            left: 8rem;
        }
        .span2 {
            left: 15rem;
        }
        .span3 {
            right: 16.5rem;
        }
        .span4 {
            right: 9.5rem;
        }
        .span5 {
            right: 2.5rem;
        }
        .leftBg, .leftBgNot, .rightBg, .rightBgNot {
            width: 8.4rem;
            height: 2.1rem
        }
        .leftBgNot {
            background: url('../assets/images/btn_top_left_not.png') no-repeat;
            background-size: cover;
        }
        .leftBg {
            background: url('../assets/images/btn_top_left.png') no-repeat;
            background-size: cover;
        }
        .rightBgNot {
            background: url('../assets/images/btn_top_right_not.png') no-repeat;
            background-size: cover;
        }
        .rightBg {
            background: url('../assets/images/btn_top_right.png') no-repeat;
            background-size: cover;
        }
    }
    .right {
        width: 15%;
        color: #D3FBFB;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        align-self: flex-end;
        line-height: 2rem;
        .p1 {
            font-size: 1.7rem;
            margin-bottom: .2rem;
        }
        .p2 {
            font-size: 1.1rem;
        }
    }
}
</style>