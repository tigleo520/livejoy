<template>
  <div>
    <div class="room-list" v-for="item in roomInfo" :key="item._id">
      <div class="mt-5 d-flex jc-between flex-wrap">
        <img
          class="cp"
          @click="showInfo(item)"
          :src="item.imgUrl[0]"
          width="400"
          height="300"
          alt
          srcset
        />
        <ul class="room-img-list">
          <li>
            <img :src="item.imgUrl[1]" width="120" height="90" alt />
          </li>
          <li>
            <img :src="item.imgUrl[2]" width="120" height="90" alt />
          </li>
          <li>
            <img :src="item.imgUrl[3]" width="120" height="90" alt />
          </li>
        </ul>
        <ul class="room-intro text-black">
          <li class="pt-2 pb-3">
            <span class="fs-xl text-primary">{{ item.title }}</span>
            <div class="d-flex jc-between mt-2 fs-xm mark">
              <span class="text-white mark_tips">{{ item.area }} ㎡</span>
              <div>
                <i class="view mx-2"></i>
                <span class="pr-4">{{ item.view }}</span>
                <i
                  class="favorite mx-2"
                  :class="$store.state.myInfo.myFavorite.includes(item._id) ? 'on' :''"
                  @click="getFavorite(item._id)"
                ></i>
                <span class="pr-2">{{ item.favorite }}</span>
              </div>
            </div>
          </li>
          <li class="py-3 d-flex jc-between">
            <span class="fs-xl">
              ￥{{ item.price }}
              <i>/㎡</i>
            </span>
            <span class="d-flex flex-column text-right">
              <span>总价：￥{{ item.total }}</span>
              <span
                class="text-green cp fs-xm"
                @click="$router.push(`/project_info/${item._id}`)"
                >查看详细清单>>
              </span>
            </span>
          </li>
          <li>
            <p class="text-primary fs-xm my-4">{{ item.content }}</p>
            <div class="d-flex jc-between pt-3">
              <img src="../../assets/img/user_info_face.gif" alt width="40px" height="40px" />
              <div class="d-flex flex-column">
                <span>设计师：{{ item.designer }}</span>
                <span class="text-green cp fs-xm">更多设计>></span>
              </div>
              <button
                class="btn bg-green text-white fs-lg ml-5"
                @click="addShopping(item)"
                >添加到我的美家计划
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  props: ["roomInfo"],
  methods: {
    addShopping(item) {
      this.$emit("addShop",item);
    },
    showInfo(item) {
      this.$emit("getShow",item)
    },
    getFavorite(id) {
      this.$store.commit("getFavorite", id);
    }
  }
}
</script>

<style lang="scss" scoped>
.room-list {
  ul {
    width: 120px;
    &:nth-child(2) {
      li {
        height: 90px;
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .room-img-list {
    // display: none;
  }
  .room-intro {
    width: 422px;
    height: 298px;
    margin-left: 18px;
    border-top: 1px solid #cbcbcb;
    border-bottom: 1px solid #cbcbcb;
    li {
      border-bottom: 1px dashed #cbcbcb;
      &:last-child {
        border: 0;
      }
      .mark {
        background-color: #f1f1f1;
        line-height: 20px;
        .mark_tips {
          border-radius: 5px;
          background-color: #797979;
          padding: 0 15px;
        }
      }
    }
  }
}
</style>