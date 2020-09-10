<template>
  <div class="home">
    <div class="banner-box d-flex jc-center">
      <img src="../assets/img/banner.png" alt />
    </div>
    <div class="main-box">
      <ul class="idea-intro my-5 jc-around">
        <li>
          <img class="i" src="../assets/img/home_03.png" alt />
        </li>
        <li>
          <img class="i" src="../assets/img/home_05.png" alt />
        </li>
        <li>
          <img class="i" src="../assets/img/home_07.png" alt />
        </li>
      </ul>
      <div class="fs-xl pb-5">请选择您想要的装修风格</div>
      <ul class="room-style jc-between">
        <li class="cp" @click="$router.push('/project')">
          <img class="im" src="../assets/img/home_17.png" alt />
        </li>
        <li class="cp" @click="$router.push('/project')">
          <img class="im" src="../assets/img/home_19.png" alt />
        </li>
        <li>
          <img class="im" src="../assets/img/home_21.png" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.banner-box {
  background-image: url(../assets/img/banner_bg.jpg);
  img {
    max-height: 500px;
    max-width: 1000px;
    width: 100%;
    height: auto;
  }
}
.main-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    padding: 0;
    width: 100%;
    max-width: 1000px;
    display: flex;
    list-style: none;
    justify-content: center;
    flex-wrap: wrap;
    li {
      flex: 33%;
      width: 33%;
      text-align: center;
      .im {
        max-width: 320px;
        width: 95%;
      }
      .i {
        max-width: 190px;
      }
    }
  }
  @media screen and (max-width: 760px) {
    ul {
      width: 80%;
      li {
        flex: 100%;
        width: 80%;
      }
    }
  }
  @media screen and (max-width: 560px) {
    ul {
      width: 100%;
      li {
        flex: 100%;
        // width: 80%;
      }
    }
  }
}
</style>
