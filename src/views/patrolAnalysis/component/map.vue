<template>
  <div class="boxs" @mousewheel.prevent="rollImg">
    <div ref="map" class="maps">
      <img src="../../../assets/images/maps.png" @mousedown="move" />
      <div v-for="(item,index) in mapList" :key="index">
        <div class="spot" :style="{'left':item.x+'rem','top':item.y+'rem'}" v-if="item.type==1">
          <span>{{item.title}}</span>
          <div class="pops" v-if="item.show">
            <div class="danshen">{{item.title}}</div>
            <div>当前设备数:3台</div>
          </div>
          <div class="grad2" @click="checkOpen(item)">
            <div class="biggest">
              <div class="middle">
                <div class="inner"></div>
              </div>
            </div>
          </div>
          <!-- <img src="../../../assets/images/playNanem.png" @click="checkOpen(item)"/> -->
        </div>

        <div v-else :style="{'left':item.x+'rem','top':item.y+'rem'}" class="equipment">
          <img
            :src="item.isNormal ? require('../../../assets/images/reduceIcon.png') : require('../../../assets/images/addIcon.png')"
            @click="checkOpen(item)"
          />
          <span>{{item.title}}</span>
          <div class="pops popTwos" v-if="item.show">
            <div class="danshen">{{item.title}}</div>
            <div>当前设备数:3台</div>
            <div>事件上报:5</div>
          </div>
        </div>
      </div>
    </div>
    <div class="infoTotal">
      <div class="tit">巡检点位总数</div>
      <div class="total">185,088</div>
      <div class="outher">
        <div>
          <div>今日巡检数</div>
          <div>
            <img src="../../../assets/images/jiantouTwo.png" />
            <span>5000</span>
          </div>
        </div>
        <div>
          <div>昨日巡检数</div>
          <div>
            <img src="../../../assets/images/jiantouOne.png" />
            <span>5000</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bot_box">
      <div>
        <div>
          <div>安全巡检-未完成</div>
          <div>135</div>
        </div>
      </div>
      <div>
        <div>
          <div>安全巡检-已完成</div>
          <div>135</div>
        </div>
      </div>
      <div>
        <div>
          <div>事件上报-未处理</div>
          <div>135</div>
        </div>
      </div>
      <div>
        <div>
          <div>事件上报-已处理</div>
          <div>135</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapList } from "./mapList.json";
export default {
  data() {
    return {
      mapList: mapList
    };
  },
  methods: {
    checkOpen(item) {
      console.log(item);
      this.mapList.forEach(item => {
        item.show = false;
      });
      item.show = true;
    },
    rollImg() {
      /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */
      var zoom = parseInt(this.$refs.map.style.zoom) || 100;
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
      zoom += event.wheelDelta / 12;
      /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (zoom >= 30 && zoom < 500) {
        this.$refs.map.style.zoom = zoom + "%";
      }
      return false;
    },
    move(e) {
      e.preventDefault();
      // 获取元素
      var left = document.querySelector(".boxs");
      var img = document.querySelector(".maps");
      var x = e.pageX - img.offsetLeft;
      var y = e.pageY - img.offsetTop;
      // 添加鼠标移动事件
      left.addEventListener("mousemove", move);
      function move(e) {
        img.style.left = e.pageX - x + "px";
		img.style.top = e.pageY - y + "px";
		}
      // 添加鼠标抬起事件，鼠标抬起，将事件移除
      img.addEventListener("mouseup", function() {
        left.removeEventListener("mousemove", move);
      });
      // 鼠标离开父级元素，把事件移除
      left.addEventListener("mouseout", function() {
        left.removeEventListener("mousemove", move);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.grad2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
}
.inner {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.31rem;
  background-color: #00d3e9;
  animation: moveInner 1s infinite;
}
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background-color: rgba(0, 211, 233, 0.2);
  animation: moveMiddle 1s infinite;
}
.biggest {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 211, 233, 0.1);
  animation: moveBiggest 1s infinite;
}
@keyframes moveInner {
  from {
    width: 0.25rem;
    height: 0.25rem;
  }
  to {
    width: 0.5rem;
    height: 0.5rem;
  }
}
@keyframes moveMiddle {
  from {
    width: 0.5rem;
    height: 0.5rem;
  }
  to {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@keyframes moveBiggest {
  from {
    width: 0.5rem;
    height: 0.5rem;
  }
  to {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.pops {
  width: 8.25rem;
  height: 5rem;
  position: absolute;
  top: -5.4rem;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  background: url(../../../assets/images/popAlert.png) no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0.81rem;
  > div:not(:last-child) {
    margin-bottom: 0.62rem;
  }
  > div:nth-of-type(1) {
    font-size: 0.87rem;
    color: #ffffffff;
  }
  > div:nth-of-type(2),
  > div:nth-of-type(3) {
    font-size: 0.75rem;
    color: #ffffffff;
  }
}
.popTwos {
  height: 6rem !important;
  top: -5.7rem !important;
}
.equipment {
  position: absolute;
  cursor: pointer;
  > img {
    position: relative;
    z-index: 100;
    width: 1.93rem;
    height: 2.37rem;
  }
  > span {
    position: absolute;
    font-size: 0.93rem;
    color: white;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
}
.spot {
  position: absolute;
  cursor: pointer;
  // top:253rem;
  // left:119rem;
  z-index: 400;
  > span {
    position: absolute;
    font-size: 0.93rem;
    color: #bb9683ff;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  > img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.bot_box {
  display: flex;
  align-items: center;
  position: absolute;
  right: 33.75rem;
  bottom: 4.37rem;
  z-index: 500;
  > div {
    width: 11.37rem;
    height: 4.68rem;
    display: flex;
    justify-content: flex-end;
    margin-left: 2.5rem;
    > div {
      height: 100%;
      display: flex;
      justify-content: center;
      margin-right: 0.68rem;
      flex-direction: column;
      align-items: center;
      > div:nth-of-type(1) {
        font-size: 0.93rem;
        color: #00b5edff;
        margin-bottom: 0.68rem;
      }
      > div:nth-of-type(2) {
        font-size: 1.31rem;
        color: #00e5edff;
      }
    }
  }
  > div:nth-of-type(1),
  > div:nth-of-type(2) {
    background: url(../../../assets/images/home_ic_aqxj.png) 100% 100% no-repeat;
    background-size: cover;
  }
  > div:nth-of-type(3),
  > div:nth-of-type(4) {
    background: url(../../../assets/images/home_sjsb.png) 100% 100% no-repeat;
    background-size: cover;
  }
}
.maps {
  position: absolute;
  width: 587.5rem;
  height: 317.81rem;
  top: -217.25rem;
  left: -102rem;
  > img {
    width: 100%;
    height: 100%;
    cursor: move;
  }
}
.boxs {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .infoTotal {
    position: absolute;
    top: 2.12rem;
    left: 7.37rem;
    .tit {
      font-size: 1.12rem;
      color: #aacddaff;
      margin-bottom: 1.37rem;
    }
    .total {
      font-size: 3.18rem;
      color: #06f0b8ff;
      margin-bottom: 1.37rem;
    }
    .outher {
      display: flex;
      align-items: center;
      > div {
        margin-right: 2.68rem;
        > div:nth-of-type(1) {
          font-size: 1rem;
          margin-bottom: 0.81rem;
          color: #aacddaff;
        }
        > div:nth-of-type(2) {
          display: flex;
          align-items: center;
          > img {
            width: 0.87rem;
            height: 0.68rem;
          }
          > span {
            font-size: 1rem;
            margin-left: 0.31rem;
            color: #06f0b8ff;
          }
        }
      }
      > div:nth-of-type(2) {
        > div:nth-of-type(2) {
          > span {
            color: #aacddaff;
          }
          > img {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
.danshen {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
