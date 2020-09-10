<template>
  <div class="footer d-flex jc-between">
    <div class="footer-left">
      <div class="py-3">
        <span class="fs-xl">爱尚家</span>
        <i></i>
        <span class="fs-lg">客服电话：400-610-1030</span>
      </div>
      <span class="fs-xm">Copyright©2014 北京蜂乐科技有限公司 版权所有</span>
    </div>
    <div class="footer-right fs-xm">
      <ul class="d-flex jc-end py-4">
        <router-link to="/contact/about" tag="li">关于爱尚家</router-link>|
        <router-link to="/" tag="li">合作商家</router-link>|
        <router-link to="/services" tag="li">施工标准</router-link>|
        <router-link to="/contact/contactus" tag="li">联系我们</router-link>
      </ul>
      <span>京ICP备14048253-1号 京公网安备11010802016432号</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
.footer {
  height: 100px;
  min-width: 1000px;
  margin-top: 106px;
  background: #5a6570;
  color: #fff;
  padding: 0 44px;
  .footer-left {
    div {
      i {
        display: inline-block;
        background-image: url(../../assets/img/tel_03.png);
        background-repeat: no-repeat;
        width: 18px;
        height: 17px;
        margin: 0 5px;
      }
    }
  }
  .footer-right {
    ul {
      list-style: none;
      li {
        padding: 0 5px;
        cursor: pointer;
        &:hover {
          color: #64be8c;
        }
      }
    }
  }
}
</style>
