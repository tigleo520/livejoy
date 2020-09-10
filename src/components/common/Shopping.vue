<template>
  <div :class="{ shop: true, on: tr }">
    <ul>
      <li class="shopping-icon" @click="tr = !tr">
        <img src="../../assets/img/card_icon_06.gif" width="30px" alt srcset />
        <span v-if="this.$store.state.shopList.length > 0">
          {{ this.$store.state.shopList.length }}
        </span>
      </li>
      <li class="shopping-list">
        <div class="bg-green fs-18 text-white pl-4 py-3">我的已选方案:</div>
        <div class="list">
          <ul>
            <li
              class="d-flex jc-start py-2 pl-3"
              v-for="item in this.$store.state.shopList"
              :key="item._id"
            >
              <i class="pr-3 pt-2">
                <img src="../../assets/img/room_card_08.gif" alt srcset />
              </i>
              <span>
                <div class="text-green">
                  {{ item.title }}（{{ item.area }}㎡）
                </div>
                <div>单价 ￥{{ item.price }} 总价 ￥{{ item.total }}</div>
              </span>
              <i class="item-close" @click="close(item._id)"></i>
            </li>
          </ul>
          <div class="scrollbar"></div>
        </div>
        <div class="mt-3">
          <div class="text-right pr-3">合计：￥{{ $store.state.total }}</div>
          <button
            class="btn bg-green text-white"
            @click="$router.push('/my_project')"
          >
            进入我的方案详情
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Shopping",
  data: () => {
    return {
      tr: false,
    };
  },
  mounted() {
    this.scroolbar();
  },
  methods: {
    scroolbar() {
      const olist = document.querySelector(".list");
      const oul = olist.querySelector("ul");
      const odiv = olist.querySelector(".scrollbar");
      let num = 0;
      if (!oul.querySelector("li")) {
        odiv.style.height = 0;
        return;
      }
      const h1 = oul.querySelector("li").offsetHeight * this.$store.state.shopList.length;
      const h2 = h1 > 156 ? 156 : h1;
      if (h2 - h1 > oul.offsetTop) {
        oul.style.top = h2 - h1 + "px";
        odiv.style.top = ((h1 - h2) * h2) / h1 + "px";
      }
      if (h1 > 156) {
        odiv.style.height = (h2 * h2) / h1 + "px";
      } else {
        odiv.style.height = 0;
      }
      olist.onmousewheel = function(e) {
        e = e || window.event;
        e.preventDefault();
        e.wheelDelta > 0 ? (num -= 10) : (num += 10);
        well();
      };
      olist.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        e.preventDefault();
        e.detail > 0 ? (num += 10) : (num -= 10);
        well();
      });
      function well() {
        num = num < 0 ? 0 : num > h1 - h2 ? h1 - h2 : num;
        oul.style.top = -num + "px";
        odiv.style.top = (num * h2) / h1 + "px";
      }
      odiv.onmousedown = function(e) {
        e = e || window.event;
        e.preventDefault();
        const x1 = event.clientX;
        const y1 = event.clientY;
        odiv.style.backgroundColor = "#bfbfbf";

        document.onmousemove = function() {
          const x2 = event.clientX;
          const y2 = event.clientY;
          let x = Math.abs(x2 - x1);
          let y = y2 - y1;
          let top = num + Math.floor((y * h1) / h2);
          top = top < 0 ? 0 : top > h1 - h2 ? h1 - h2 : top;
          oul.style.top = -top + "px";
          odiv.style.top = (top * h2) / h1 + "px";

          if (x > 100) {
            document.onmousemove = null;
            num = olist.offsetTop - oul.offsetTop;
          }
        };
        document.onmouseup = function() {
          document.onmousemove = null;
          odiv.style.backgroundColor = "";
          num = olist.offsetTop - oul.offsetTop;
        };
      };
    },
    addShop(data) {
      if (
        this.$store.state.myInfo.myProject.findIndex(item => item.id == data._id) != -1
      ) {
        alert("已将该方案加入购物车");
        return;
      }
      this.$store.commit("addShopping", data);
      this.$store.commit("getShopList");
      this.scroolbar();
    },
    close(id) {
      this.$store.commit("delShopping", id);
      this.$store.commit("getShopList");
      this.scroolbar();
    },
    getList() {
      this.$store.commit("getShopList");
    }
  },
  created() {
    this.$store.commit("getShopList");
  }
};
</script>

<style lang="scss" scoped>
.shop {
  position: fixed;
  right: -250px;
  top: 130px;
  transition: right 0.5s;
  &.on {
    right: 0;
  }
  ul {
    li {
      display: inline-block;
      &.shopping-icon {
        position: absolute;
        top: 20px;
        left: -30px;
        span {
          position: relative;
          top: -35px;
          left: -15px;
          display: inline-block;
          width: 15px;
          height: 15px;
          font-size: 12px;
          line-height: 14px;
          color: #fff;
          text-align: center;
          background-color: #e60012;
          border-radius: 50%;
        }
      }
      &.shopping-list {
        width: 250px;
        background-color: #f5f5f5;
        .list {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 100%;
          overflow: hidden;
          max-height: 156px;
          ul {
            position: relative;
            margin-right: -5px;
            transition: top 0.1s;
            width: 100%;
            -webkit-transition: top 0.1s;
            background-color: #f5f5f5;
            li {
              display: inline-flex;
              width: 100%;
              &:hover {
                background-color: #fff;
              }
              span {
                width: 175px;
              }
              .item-close {
                width: 16px;
                height: 16px;
                background: url("../../assets/img/room_card_11.png");
                position: relative;
                top: 12px;
                cursor: pointer;
              }
            }
          }
          .scrollbar {
            position: relative;
            background-color: #d9d9d9;
            width: 5px;
            border-radius: 5px;
          }
          .scrollbar:hover {
            background-color: #bfbfbf;
          }
        }
        button {
          display: block;
          padding: 3px 10px 4px;
          margin: 10px auto 15px;
          border-radius: 5px;
          font-size: 16px;
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
      }
    }
  }
}
</style>
