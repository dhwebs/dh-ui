<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="top">
      <div class="nav">
        <div class="left">
          <img src="./assets/logo.png" alt />
          <p>DHUI</p>
        </div>
        <div class="right">
          <p :class="{text:active==i}" v-for="(item,i) in navList" :key='i' @click="navChange(i)">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navList:['指南','组件','主题','资源'],
      active:1
    }
  },
  created(){

  },
  methods:{
    navChange(t){
      this.active=t
    }
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view {
  height: calc(100vh - 80px);
  margin: 80px auto;
  width: 1080px;
  overflow: auto;
}
.top {
  width: 100vw;
  position: fixed;
  top: 0;
}
.nav {
  height: 80px;
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: $borderBottom;
  .left {
    width: 540px;
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
    }
    p {
      font-size: 30px;
      color: $primary;
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      height: 100%;
      line-height: 80px;
      text-align: center;
      flex: 1;
      color: $primaryOpcity;
      cursor: pointer;
    }
    .text {
      color: $primary;
      border-bottom: 2px solid $primary;
    }
  }
}
::-webkit-scrollbar {
  // display: none;
  /*滚动条整体样式*/
  width : 5px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  // display: none;
  border-radius   : 10px;
  background-color: $infoOpcity;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
::-webkit-scrollbar-track {
  // display: none;
  /*滚动条里面轨道*/
  // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #fff;
  border-radius: 10px;
  }
</style>
