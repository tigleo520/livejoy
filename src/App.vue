<template>
  <div>
    <Header />
    <Footer />
    <div v-if="$store.state.mark" class="mk">1111</div>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
.mk {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #797979;
  opacity: 0.5;
  z-index: 1;
}
.view {
  display: inline-block;
  width: 23px;
  height: 15px;
  vertical-align: text-top;
  background-image: url("./assets/img/sprites.png");
  background-repeat: no-repeat;
  background-position: -40px -35px;
  &.on {
    background-position: -70px -35px;
  }
}
.favorite {
  display: inline-block;
  width: 16px;
  height: 15px;
  vertical-align: text-top;
  background-image: url("./assets/img/sprites.png");
  background-repeat: no-repeat;
  background-position: 0px -35px;
  cursor: pointer;
  &.on {
    background-position: -20px -35px;
  }
}
</style>
