<template>
  <div class="numberVotes_tj">
    <div class="single" v-for="(item, index) in ticketLsit" :key="index">
      <div class="left">
        <div class="above">
          <img :src="iconUrl ? require('@/assets/images/ic_cls.png') : require('@/assets/images/ic_sst.png')" v-if="index < 3"/>
          <img :src="iconUrl && index >= 3 ? require('@/assets/images/ic_sc.png') : require('@/assets/images/ic_sst.png') " v-else>
          <span>{{item.name}}</span>
        </div>
        <div class="below">
          <span>{{item.num}}</span>
          <div class="up_num" v-if="item.upNum">
            <img src="@/assets/images/ic_xs.png"  />
            <span>{{item.upNum}}</span>
          </div>
          <div class="dowm_num" v-if="item.dowmNum">
            <img src="@/assets/images/ic_xx.png" />
            <span>{{item.dowmNum}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="above">
          <img :src="iconUrl ? require('@/assets/images/ic_cls.png') : require('@/assets/images/ic_sst.png')" v-if="index < 3"/>
          <img :src="iconUrl && index >= 3 ? require('@/assets/images/ic_sc.png') : require('@/assets/images/ic_sst.png') " v-else>
          <span>{{item.lastName}}</span>
        </div>
        <div class="below">
          <span>{{item.lastNum}}</span>
          <div class="up_num" v-if="item.lastupNum">
            <img src="@/assets/images/ic_xs.png"  />
            <span>{{item.lastupNum}}</span>
          </div>
          <div class="dowm_num" v-if="item.lastdowmNum">
            <img src="@/assets/images/ic_xx.png" />
            <span>{{item.lastdowmNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toThousands } from '../../utils/help.js'
export default {
  props: {
    ticketLsit: {
      type: Array,
      default: () => []
    },
    iconUrl: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  mounted() {
    console.log(this.iconUrl)
    // 格式化数字
    this.ticketLsit.map(res => {
      this.$set(res, 'lastNum', toThousands(res.lastNum));
      this.$set(res, 'num', toThousands(res.num));
    })
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.numberVotes_tj {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .single {
    width: 24%;
    height: 9rem;
    border: 1px solid #1F63A3;
    padding: 0 2.5rem 0 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    line-height: 4rem;
    background: #001D66;
    .above {
      display: flex;
      align-items: center;
      color: #D3DAFF;
      img {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: .5rem;
      }
    }
    .below {
      color: #d6d7f7;
      font-size: 2rem;
      text-shadow: 0 2px 8px #fff;
      display: flex;
      .up_num, .dowm_num {
        margin-left: 1rem;
        padding-bottom: 10rem;
        img {
          width: .6rem;
        }
        span {
          font-size: .8rem;
        }
      }
    }
  }
}
</style>