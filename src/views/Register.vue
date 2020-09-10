<template>
  <div class="content-box">
    <div>
      <router-link to="/" tag="span" class="cp">首页</router-link> >> <span>会员注册</span>
    </div>
    <div class="bg-grey mt-4">
      <div class="login-box">
        <div class="login-title text-center">快速注册</div>
        <div class="ml-5">
          <form>
            <ul>
            <li>
              <label for="">手机号:</label>
              <input type="text">
            </li>
            <li>
              <label for="">验证码:</label>
              <input type="text" style="width:180px">
              <span class="bg-grey1 px-4 py-1 ml-4 mt-3 cp">发送验证码</span>
            </li>
            <li>
              <label for="">密 码:</label>
              <input type="password">
            </li>
            <li>
              <label for="">确认密码:</label>
              <input type="password">
            </li>
            <li class="text-center">
              <button class="btn bg-green text-white fs-lg">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
              <span class="fs-sm ml-3">已有账号？<router-link to="/login" class="text-green cp" tag="span">立即登录</router-link></span>
            </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="scss" scoped>
.login-box {
  width: 760px;
  height: 460px;
  margin: 0 auto;
  .login-title {
    height: 97px;
    line-height: 116px;
    font-size: 30px;
    border-bottom: 1px solid #bebebe;
  }
  ul {
    margin: 54px 0 ;
    li {
      padding-bottom: 30px;
      label {
        padding-right: 30px;
        display: inline-block;
        width: 60px;
        text-align: justify;
        text-align-last: justify;
      }
      input {
        height: 32px;
        width: 310px;
        padding-left: 5px;
      }
    }
  }
}

</style>
