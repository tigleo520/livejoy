<template>
  <div class="content-box">
    <div>
      <router-link to="/" tag="span" class="cp">首页</router-link> >> <span>会员登录</span>
    </div>
    <div class="bg-grey mt-5">
      <div class="login-box">
        <div class="login-title text-center">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
        <div class="ml-5">
          <form>
            <ul>
            <li>
              <label for="">用 户 名:</label>
              <input type="text">
            </li>
            <li>
              <label for="">密 码:</label>
              <input type="password">
              <span class="text-green fs-sm ml-4 cp">忘记密码？</span>
            </li>
            <li class="text-center">
              <button @click.prevent="login1" class="btn bg-green text-white fs-lg">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
              <span class="fs-sm ml-3">还没有账号？<router-link to="/register" class="text-green cp" tag="span">立即注册</router-link></span>
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
    name: "Login",
    methods: {
      login1() {
        this.$emit('mylogin')
      }
    }
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
        display: inline-block;
        width: 90px;
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
