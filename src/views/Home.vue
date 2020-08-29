<template>
  <div class="home">
    <div class="left">
      <!-- <div class="l-top">
        ces
      </div> -->
      <div v-for="(item,i) in menList" :key="i">
        <span class="title">{{item.type}}</span>
        <span class="nav" v-for="(text,k) in item.text" :key="k">{{text}}</span>
      </div>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      menList:[
        {
          type:'Basic',
          text:['layOut布局','container布局容器','color色彩','typography字体','border边框','icon图标','button按钮']
        },
        {
          type:'Form',
          text:['radio单选框','checkBox多选框','input输入框','inputNumber计数器','select选择框','cascader级联选择器','switch开关']
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  height: 100%;
  width: 100%;
  .left {
    width: 220px;
    height: 100%;
    overflow: hidden;
    border:none;
    text-align: left;
    &:hover{
      overflow: auto;
    }
    .l-top{
      margin-top:40px;
      width: 100%;
      height: 60px;
      background: red;
    }
    .title{
      display: block;
      width: 230px;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      color:$placeholder;
      border:none;
    }
    .nav{
      margin: 0;
      padding: 0;
      width: 230px;
      height: 40px;
      line-height: 40px;
      color:$regularText;
      cursor: pointer;
      border:none;
      &:hover{
        color: $primaryOpcity;
      }
    }
  }
  .right {
    margin-left: 40px;
    flex: 1;
  }
}
</style>