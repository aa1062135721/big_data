<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
    mounted () {
    // 监听窗口是否发生变化
    window.addEventListener('resize', () => {
        this.$root.$emit('resize', true);
    })
  },
}
</script>

<style lang="scss">
html,body,#app {
  width: 100%;
  height: 100%;
}
</style>
