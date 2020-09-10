<template>
  <div>
    <div class="content-box">
      <h1>请选择您想要装修的空间和风格</h1>
      <div class="room-style">
        <ul>
          <li :class="[roomType == 1 ? 'on' : '']" @click="changeType(1)">田园风格</li>
          <li :class="[roomType == 2 ? 'on' : '']" @click="changeType(2)">简约风格</li>
        </ul>
        <div>
          <span
            v-for="num in 8"
            :key="num"
            href
            :class="[roomTab == num ? 'on' : '']"
            @click="changeTab(num)"
          ></span>
        </div>
      </div>
      <!-- <div class="room-list" v-for="item in $store.state.roomList" :key="item._id">
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
                <img src="../assets/img/user_info_face.gif" alt width="40px" height="40px" />
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
      </div>-->
      <ProjectList
        :room-info="roomList"
        @addShop="addShopping"
        @getShow="showInfo"
      />
    </div>
    <div v-if="popwin" class="project-info d-flex">
      <div class="left">
        <img src alt />
      </div>
      <div class="right px-3 text-black" id="photo_room_intro">
        <ul>
          <li class="relative intro_one py-2">
            <span class="fs-xl">{{ roomInfo.title }}</span>
            <!-- <span class="mark_tips">800㎡</span> -->
          </li>
          <li class="pt-2">
            <span class="font14">
              单价：
              <span class="fs-xl">¥{{ roomInfo.price }}</span>
              /㎡
            </span>
            <span class="dp-b text-right">
              <span
                class="text-green fs-xm cp"
                @click="$router.push(`/project_info/${roomInfo._id}`)"
              >查看详细清单</span>
            </span>
          </li>
          <li class="fs-xm p-2 text-right">
            <span>
              <i class="view mx-2"></i>
              {{ roomInfo.view }}
            </span>
            <span>
              <i
                class="favorite mx-2"
                :class="$store.state.myInfo.myFavorite.includes(roomInfo._id) ? 'on' :''"
                @click="getFavorite(roomInfo._id)"
              ></i>
              {{ roomInfo.favorite }}
            </span>
          </li>
          <li>
            <span
              class="dp-b py-2 bg-green text-white fs-18 text-center cp"
              @click="addShopping(roomInfo)"
            >添加到我的美家计划</span>
          </li>
          <li class="fs-xm py-3">设计理念</li>
          <li class="fs-xm">{{ roomInfo.content }}</li>
          <!--li><span class="font14">设计师：羊羊羊</span> <a href="#" class="c_green right">更多作品>></a></li-->
        </ul>
      </div>
      <span class="close cp" @click="popwin = false"></span>
    </div>
    <Shopping ref="shop" />
  </div>
</template>

<script>
import Shopping from "@/components/common/Shopping";
import ProjectList from "@/components/content/ProjectList";
export default {
  name: "Project",
  data() {
    return {
      roomType: 1,
      roomTab: 1,
      roomTabs: [
        "客厅",
        "主卧",
        "次卧",
        "厨房",
        "卫生间",
        "客房",
        "餐厅",
        "阳台"
      ],
      roomList: [],
      popwin: false,
      roomInfo: {}
    };
  },
  components: {
    Shopping,
    ProjectList
  },
  methods: {
    addShopping(item) {
      this.$refs.shop.addShop(item);
    },
    getRoomList(bl = false) {
      this.roomList = this.$store.state.roomList.filter(item => {
        if (bl) {
          return item.type == this.roomType;
        } else {
          return (
            item.type == this.roomType &&
            item.title == this.roomTabs[this.roomTab - 1]
          );
        }
      });
    },
    changeType(type) {
      this.roomType = type;
      this.roomTab = 1;
      this.getRoomList(true);
    },
    changeTab(num) {
      this.roomTab = num;
      this.getRoomList();
    },
    showInfo(item) {
      this.popwin = true;
      this.roomInfo = item;
      this.roomInfo.view++;
    },
    getFavorite(id) {
      this.$store.commit("getFavorite", id);
    }
  },
  created() {
    this.getRoomList(true);
  }
};
</script>

<style lang="scss" scoped>
.content-box {
  h1 {
    font-weight: 500;
  }
  .room-style {
    ul {
      background-color: #f1f1f1;
      border-top: 1px solid #cbcbcb;
      border-bottom: 1px solid #cbcbcb;
      border-left: 2px solid #094;
      height: 32px;
      li {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        padding: 0 60px;
        cursor: pointer;
        &.on {
          background-color: #fff;
          color: #094;
          border-bottom: 1px solid #fff;
        }
      }
    }
    div {
      span {
        display: inline-block;
        height: 80px;
        width: 80px;
        background: url(../assets/img/icons_03.png);
        margin: 10px 10px 0 0;
        &.on,
        &:hover {
          background: url(../assets/img/icons_06.png);
        }
        &:nth-child(2) {
          background-position-x: -90px;
        }
        &:nth-child(3) {
          background-position-x: -180px;
        }
        &:nth-child(4) {
          background-position-x: -270px;
        }
        &:nth-child(5) {
          background-position-x: -360px;
        }
        &:nth-child(6) {
          background-position-x: -450px;
        }
        &:nth-child(7) {
          background-position-x: -540px;
        }
        &:nth-child(8) {
          background-position-x: -630px;
        }
      }
    }
  }
}
.project-info {
  top: 0;
  position: fixed;
  width: 100%;
  min-width: 1000px;
  height: 100%;
  z-index: 9;
  background-color: #fff;
  .left {
    width: 84%;
    height: 100%;
    border: 10px solid #797979;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 16%;
    height: 100%;
    .intro_one {
      border-bottom: 1px solid #bebebe;
    }
  }
  .close {
    position: absolute;
    display: block;
    top: 8px;
    right: 8px;
    width: 17px;
    height: 17px;
    background-image: url(../assets/img/close.png);
    &:hover {
      background-image: url(../assets/img/close_hover.png);
    }
  }
}
</style>
