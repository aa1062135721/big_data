<template>
  <div class="main" :class="type === 1 ? 'bg' : 'bg_1'">
    <topNav :type="type" @typeMenu="typeMenu"></topNav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import topNav from '../components/topNav.vue';
export default {
  data() {
    return {
      type: sessionStorage.getItem("typeMenu") * 1 || 1
    }
  },
  components: {
    topNav
  },
  watch: {
    $route: function (newVal) {
      console.log(newVal)
    }
  },
  mounted() {
    this.fetch()
    
  },
  methods: {
    fetch () {

    },
    typeMenu (id) {
      this.type = id
    }
  },
}
</script>
<style lang="scss" scoped>
  .main {
    min-height: 100%;
    padding: 0 2rem 2rem 2rem;
    box-sizing: border-box;
  }
  .bg {
     background: url('../assets/images/bg.png') no-repeat;
     background-size: cover;
  }
  .bg_1 {
    background: url('../assets/images/bg_1.png') no-repeat;
    background-size: cover;
  }
</style>