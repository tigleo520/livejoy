<template>
  <div class="content-box">
    <div>
      <router-link to="/" tag="span" class="cp">首页</router-link>>>
      <span>个人中心</span>
    </div>
    <div class="user-info">
      <ul class="d-flex jc-start pt-5">
        <li class="on">个人信息</li>
        <li>修改密码</li>
      </ul>
      <div class="user-info-main">
        <form action="">
          <span>登录账号：18911778718 手机号不可修改</span>
          <input type="text">
          <input type="radio" name="" id="">
          <input type="select">
          <input type="text" name="" id="">
          <input type="text" name="" id="">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user_info"
};
</script>

<style lang="scss" scoped>
.user-info {
  ul {
    li {
      font-size: 16px;
      padding: 7px 18px;
      background-color: #eee;
      cursor: pointer;
      &:first-child {
        border-right: 1px solid #c9c9c9;
      }
      &.on {
        background-color: #e7f5ed;
      }
    }
  }
  .user-info-main {
    width: 100%;
    height: 300px;
    background-color: #f9f9f9;
  }
}
</style>
