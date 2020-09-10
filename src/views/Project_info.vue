<template>
  <div class="content-box">
    <div>
      <router-link to="/" tag="span" class="cp">首页</router-link> >> <router-link to="/project" tag="span" class="cp">方案</router-link> >> <span>{{roomInfo.title}}</span>
    </div>
    <div class="project-info mt-4">
      <div class="project-info-intro pb-3">
        <ul class="d-flex jc-between ai-end">
          <li>
            <img src="../assets/img/project_info.gif" alt="" srcset="">
            <span class="fs-xl text-black ml-2 mb-3">{{roomInfo.title}}</span>
            <button class="btn bg-green text-white fs-lg ml-5" @click="addShopping(roomInfo)">
              <span class="project-add">+</span>
              <span class="pl-5">加入我的美家计划</span>
            </button>
            </li>
          <li>
            <div class="text-center fs-lg">装修总价 ¥{{roomInfo.total}}</div>
            <span class="fs-xm">（产品每平米造价，包含图中建材及工艺）</span>
          </li>
        </ul>
      </div>
      <ProjectInfo :project-info="roomInfo" />
    </div>
    <Shopping ref="shop" />
  </div>
</template>

<script>
import ProjectInfo from "@/components/content/ProjectInfo"
import Shopping from "@/components/common/Shopping"
export default {
  name: "project_info",
  props: {
    id: {}
  },
  data() {
    return {
      roomInfo: {}
    }
  },
  components: {
    ProjectInfo,
    Shopping
  },
  methods: {
    addShopping(item) {
      this.$refs.shop.addShop(item)
    },
    getInfo() {
      this.roomInfo = this.$store.state.roomList.find(item => item._id == this.id)
    }
  },
  created() {
    this.getInfo()
  }
}
</script>script

<style lang="scss" scoped>
.content-box {
  .project-info {
    width: 100%;
    .project-info-intro{
      width: 100%;
      border-bottom: 2px solid #808080;
      img {
        vertical-align: bottom;
      }
      .btn {
        padding-left: 14px;
        padding-right: 14px;
        .project-add {
          position: absolute;
          font-size: 50px;
          line-height: 23px;
        }
      }
    }
  }
}
</style>
