<template>
  <div class="content-box">
    <div>
      <router-link to="/" tag="span" class="cp">首页</router-link> >> <span>个人中心</span> 
    </div>
    <div class="my-project-info mt-4">
      <div class="my-project-info-intro">
        <ul class="d-flex jc-between ai-end">
          <li>
              <img src="../assets/img/user_info_face.gif" alt="" srcset="">
              <ul class="dp-ib pl-4">
                <li>
                  <span class="text-black">{{$store.state.myInfo.name}}</span>
                  <span class="fs-xm">({{$store.state.myInfo.tel}})</span>
                </li>
                <li>地址：{{$store.state.myInfo.address}}</li>
                <li class="py-2 pl-3 fs-xm">编辑个人资料</li>
              </ul>
            </li>
          <li class="fs-18 pr-3">2016年10月15日</li>
        </ul>
      </div>
      <div>
        <ul class="my-project-nav d-flex jc-between pt-5">
          <li v-if="num==1" class="fs-24">我的方案<a class="fs-xm text-green pl-2 cp" @click="dialog(2)">修改方案</a></li>
          <li v-else class="fs-24">我的收藏</li>
          <li class="fs-18">
            <span :class="num==1?'on':''" @click="num = 1">我的方案</span>
            <span :class="num==2?'on':''" @click="num = 2">我的收藏</span>
          </li>
        </ul>
        <ul v-if="num==1" class="my-project-sum d-flex jc-between pt-5 pb-3">
          <li class="fs-xl text-black px-5">
            <span>{{$store.state.category[0]}}室</span>
            <span>{{$store.state.category[1]}}厅</span>
            <span>{{$store.state.category[2]}}厨</span>
            <span>{{$store.state.category[3]}}卫</span> 
            <div class="fs-xm text-primary text-center">（建筑面积）</div>
          </li>
          <li class="flex-1 pt-3  pl-5"><button class="btn bg-green text-white fs-lg" @click="dialog(1)">立即预约上门量房</button></li>
          <li>
            <div class="fs-18 text-center">装修总价¥{{$store.state.total}}</div>
            <div class="fs-xm pt-3 text-center">(产品每平米造价，包含图中建材及工艺)</div>
          </li>
        </ul>
        <ul class="my-project-list d-flex jc-start flex-wrap pt-5">
          <li class="d-flex jc-start mb-5" v-for="(item, index) in num==1?$store.state.shopList:myFavoriteList" :key="item._id">
            <img src="../upload/project_my_33.gif" alt="" srcset="">
            <ul class="pl-3 text-black fs-18">
              <li>
                <span class="fs-xl">{{item.title}}</span>
                <span class="area mx-1 px-3 py-1 fs-xm text-primary">{{item.area}}㎡</span>
                <a v-if="num==1" class="fs-xm text-green cp" @click="dialog(3,index)">修改面积</a>
              </li>
              <li class="fs-lg">单价：<span class="fs-xl">¥{{item.price}}</span>/㎡</li>
              <li>总价：¥{{item.total}}</li>
              <a class="pt-2 fs-xm text-green cp" @click="$router.push(`/project_info/${item._id}`)">查看详细清单</a>
            </ul>
          </li>
        </ul>
        <div v-if="num == 1">
          <ProjectInfo v-for="item in $store.state.shopList" :project-info="item" :key="item._id"/>
        </div>
      </div>
    </div>
    <div v-if="!dialogNum==0" class="dialog">
      <div v-if="dialogNum==1">
        <div class="title">请在此处填写您的信息，设计师会在24小时内与您预约上门量房时间！</div>
        <ul>
          <li>姓名：<input type="text"></li>
          <li>电话：<input type="tel" name="" id=""></li>
          <li class="mt-2 text-center"><button class="btn bg-green" @click="appointment">确认预约</button></li>
        </ul>
      </div>
      <div v-if="dialogNum==3">
        <div class="title fs-lg text-center">修改我的方案</div>
        <ul>
          <li>面积：<input ref="area" type="text" :value="$store.state.shopList[index].area"></li>
          <li class="my-3 text-center"><button class="btn bg-green" @click="areaEdit">确认修改</button></li>
        </ul>
      </div>
      <span class="close" @click="closeDialog">X</span>
    </div>
  </div>
</template>

<script>
import ProjectInfo from "@/components/content/ProjectInfo"
export default {
  name: 'my_project',
  data() {
    return {
      myFavoriteList: [],
      num: 1,
      dialogNum: 0,
      index: 0
    }
  },
  components: {
    ProjectInfo,
  },
  methods: {
    getFavorite() {
      const self = this
      this.$store.state.myInfo.myFavorite.forEach(item => {
        const obj = this.$store.state.roomList.find(list => list._id == item)
        self.myFavoriteList.push(obj)
      })
    },
    dialog(n,index) {
      this.$store.state.mark = true;
      this.dialogNum = n;
      this.index = index
    },
    closeDialog() {
      this.$store.state.mark = false;
      this.dialogNum = 0;
    },
    appointment() {

      this.closeDialog();
    },
    areaEdit() {
      const id = this.$store.state.shopList[this.index]._id
      this.$store.state.myInfo.myProject.find(item => item.id == id).area = this.$refs.area.value;
      this.closeDialog();
      this.$store.commit("getShopList");
    }
  },
  mounted() {
    this.num = this.$route.query.n ? this.$route.query.n : 1
    this.$store.commit("getShopList");
    this.$store.commit("getCategory");
    this.getFavorite();
  }
}
</script>

<style lang="scss" scoped>
.content-box {
  .my-project-info {
    width: 100%;
    .my-project-info-intro{
      width: 100%;
      border-bottom: 2px solid #808080;
      img {
        vertical-align: bottom;
        width: 120px;
      }
    }
    .my-project-nav {
      border-bottom: 1px solid #eee;
      span {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        background-color: #eee;
        cursor: pointer;
        &:nth-child(1) {
          border-right: 1px solid #c9c9c9;
        }
        &.on {
          background-color: #e7f5ed;
        }
      }
    }
    .my-project-sum {
      border-bottom: 1px solid #eee;
    }
    .my-project-list {
      li {
        width: 500px;
        img {
          width: 180px;
        }
        .area {
          display: inline-block;
          background-color: #eee;
          border-radius: 5px;
        }
      }
    }
  }
  .dialog {
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -300px;
    width: 600px;
    background-color: #fff;
    z-index: 9;
    .title {
      height: 60px;
      line-height: 60px;
      padding-left: 38px;
      background-color: #e7f5ed;
    }
    ul {
      margin-top: 40px;
      margin-left: 150px;
      li {
        padding: 10px;
        input {
          width: 220px;
          height: 32px;
        }
      }
    }
    button {
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
      font-weight: 700;
      background: -webkit-linear-gradient(
        #00ab5e,
        #009742,
        #00ab5e
      ); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(
        #00ab5e,
        #009742,
        #00ab5e
      ); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(
        #00ab5e,
        #009742,
        #00ab5e
      ); /* Firefox 3.6 - 15 */
      background: linear-gradient(#00ab5e, #009742, #00ab5e);
    }
    .close {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
