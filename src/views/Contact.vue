<template>
  <div class="content-box">
    <div>
      <router-link to="/" tag="span" class="cp">首页</router-link> >> <span>服务标准</span>
    </div>
    <div class="d-flex jc-between mt-4">
      <ul>
        <router-link to="about" tag="li" :class="{ on: $route.name === 'about' }">关于我们</router-link>
        <router-link to="protocol" tag="li" :class="{ on: $route.name === 'protocol' }">法律条款</router-link>
        <router-link to="contactus" tag="li" :class="{ on: $route.name === 'contactus' }">联系我们</router-link>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style lang="scss" scoped>
.content-box {
  ul {
    list-style: none;
    width: 120px;
    li {
      position: relative;
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      border-left: transparent 2px solid;
      border-top: 1px solid #bebebe;
      background-color: #f9f9f9;
      &:hover,
      &.on {
        border-left-color: #094;
        background-color: #fff;
        &:after {
          content: "";
          position: absolute;
          right: 8px;
          top: 15.5px;
          height: 0;
          border: 5px solid;
          border-color: transparent transparent transparent #094;
        }
      }
    }
  }
}
</style>
