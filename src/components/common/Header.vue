<template>
  <div>
    <div class="common-header">
      <div class="left">
        <div id="logo">
          <a href="/">
            <img src="../../assets/img/logo.png" alt="logo" />
          </a>
        </div>
        <div class="header-nav">
          <ul>
            <router-link to="/home" tag="li">首页</router-link>
            <router-link to="/project" tag="li">方案</router-link>
            <router-link to="/services" tag="li">服务标准</router-link>
            <router-link to="/contact" tag="li">联系我们</router-link>
          </ul>
        </div>
      </div>
      <div id="login">
        <ul v-if="!loginVal" class="wrap-login">
          <router-link to="/login" tag="li">登录</router-link>
          <router-link to="/register" tag="li">注册</router-link>
        </ul>
        <div v-if="loginVal" class="wrap-profile">
          <a>
            <img src="../../assets/img/user_info_face.gif" />
            <span>羊羊羊</span>
            <i></i>
          </a>
          <ul class="profile">
            <router-link to="/user_info" tag="li">
              <i></i>个人资料
            </router-link>
            <router-link to="/my_project" tag="li">
              <i></i>我的方案
            </router-link>
            <router-link :to="{ path :'/my_project',query: { n: 2}}" tag="li">
              <i></i>我的收藏
            </router-link>
            <li @click="logout">
              <i></i>退出登录
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view @mylogin="login" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loginVal: false
    };
  },
  methods: {
    login() {
      this.loginVal = true;
      this.$router.back(-1);
    },
    logout() {
      this.loginVal = false;
    }
  }
};
</script>

<style scoped lang="scss">
.common-header {
  display: flex;
  min-width: 1000px;
  height: 56px;
  padding: 0 44px;
  background-color: #f9f9f9;
  justify-content: space-between;
  .left {
    display: flex;
    justify-content: flex-start;
    #logo {
      margin-right: 150px;
      img {
        padding-top: 9px;
      }
    }
    .header-nav li {
      height: 56px;
      padding: 0 30px;
      font-size: 16px;
      display: inline-block;
      line-height: 56px;
      text-align: center;
      &:hover,
      &.router-link-active {
        background-color: #64be8c;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  #login {
    .wrap-login {
      li {
        padding: 0 8px;
        font-size: 14px;
        display: inline-block;
        line-height: 56px;
        text-align: center;
        &:hover {
          color: #64be8c;
          cursor: pointer;
        }
      }
    }
    .wrap-profile {
      width: 170px;
      height: 56px;
      overflow: hidden;
      cursor: pointer;
      transition: height 0.2s;
      &:hover {
        height: 244px;
        a {
          color: #64be8c;
          i {
            background-position: -80px -17px;
          }
        }
      }
      a {
        display: inline-block;
        height: 56px;
        width: 170px;
        img {
          display: inline-block;
          border-radius: 50%;
          width: 56px;
        }
        span {
          display: inline-block;
          line-height: 56px;
          padding-left: 17px;
          position: relative;
          top: -21px;
        }
        i {
          display: inline-block;
          position: relative;
          top: -20px;
          left: 30px;
          width: 13px;
          height: 13px;
          background-image: url("../../assets/img/sprites.png");
          background-repeat: no-repeat;
          background-position: -80px -2px;
        }
      }
      .profile {
        position: relative;
        border: 1px solid #f9f9f9;
        margin-top: -4px;
        padding-top: 25px;
        background-color: #f9f9f9;
        li {
          display: block;
          height: 40px;
          line-height: 40px;
          background-color: #fff;
          padding-left: 50px;
          i {
            display: inline-block;
            position: relative;
            top: 2px;
            left: -20px;
            width: 14px;
            height: 14px;
            background-image: url("../../assets/img/sprites.png");
            background-repeat: no-repeat;
          }
          &:nth-child(2) i {
            background-position-x: -20px;
          }
          &:nth-child(3) i {
            background-position-x: -40px;
          }
          &:nth-child(4) i {
            background-position-x: -60px;
          }
          &:hover {
            background-color: #64be8c;
            color: #fff;
            cursor: pointer;
            i {
              background-position-y: -16px;
            }
          }
        }
      }
    }
  }
}
</style>
