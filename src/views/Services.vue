<template>
  <div class="content-box">
    <div class="service">
      <div class="service-menu d-flex jc-between pb-4" :class="menuFixed == true ? 'isfixed' : ''">
        <span class="fs-xl">施工标准</span>
        <ul class="menu-list d-flex jc-end">
          <li
            v-for="item in items"
            :key="item.code"
            :value="item.code"
            :class="{on: num == item.code}"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="service-box">
        <div v-for="item in items" :key="item.code">
          <h2>{{item.name}}</h2>
          <dl>
            <dt class="d-flex jc-strat">
              <span>项目名称</span>
              <span>单位</span>
              <span>用材</span>
              <span>品牌</span>
              <span>替换品牌</span>
            </dt>
            <dd v-for="jz in item.services" :key="jz._id">
              <ul>
                <li class="d-flex jc-strat">
                  <span class="text-light">{{jz.name}}</span>
                  <span>{{jz.unit}}</span>
                  <span>{{jz.material}}</span>
                  <span>{{jz.brand}}</span>
                  <span>{{jz.replace}}</span>
                </li>
                <li>
                  <p>{{jz.description}}</p>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "services",
  data: () => {
    return {
      items: [
        { name: "水电阶段", code: 0 },
        { name: "泥作阶段", code: 1 },
        { name: "木作阶段", code: 2 },
        { name: "漆作阶段", code: 3 },
        { name: "其他", code: 4 }
      ],
      num: 0,
      menuFixed: false,
      services: [
        {
          name: "矿棉板吊顶1",
          unit: "m2",
          material: "矿棉板、龙骨、吊筋",
          brand: "联想",
          replace: "可乐",
          description:
            "饰面板上的灯具、烟感器、喷淋头、风口箅子等设备的位置应合理、美观与饰面板的交接应吻合、严密；金属吊杆、龙骨的接缝应均匀一致，角缝应吻合，表面应平整，无翘曲、锤印；吊顶内填充吸声材料的品种和铺设厚度应符合设计要求，并应有防散措施。"
        },
        {
          name: "矿棉板吊顶2",
          unit: "m2",
          material: "矿棉板、龙骨、吊筋",
          brand: "联想",
          replace: "可乐",
          description:
            "饰面板上的灯具、烟感器、喷淋头、风口箅子等设备的位置应合理、美观与饰面板的交接应吻合、严密；金属吊杆、龙骨的接缝应均匀一致，角缝应吻合，表面应平整，无翘曲、锤印；吊顶内填充吸声材料的品种和铺设厚度应符合设计要求，并应有防散措施。"
        }
      ]
    };
  },
  mounted() {
    const _this = this;
    window.addEventListener("scroll", this.handleScroll);    
    //事件委托
    document.querySelector(".menu-list").addEventListener("click", function(e) {
      const alist = document.querySelector(".service-box").children;
      _this.num = Number(e.target.getAttribute("value"));
      const y = alist[_this.num].offsetTop - 85;
      window.scrollTo(0, y);
    });
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 96) {
        this.menuFixed = true;
        document.querySelector(".service-box").style.paddingTop = "70px";
      } else {
        this.menuFixed = false;
        document.querySelector(".service-box").style.paddingTop = "initial";
      }
    }
  },
  created() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].services = this.services;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>

<style lang="scss" scoped>
.content-box {
  .service {
    .service-menu {
      height: 46px;
      border-bottom: 2px solid #bebebe;
      width: 1000px;
      &.isfixed {
        position: fixed;
        background-color: #fff;
        top: 0;
        z-index: 999;
      }
      ul {
        list-style: none;
        li {
          height: 44px;
          width: 95px;
          background-color: #f9f9f9;
          border: 1px solid #bebebe;
          line-height: 44px;
          text-align: center;
          margin-left: 10px;
        }
        .on {
          background-color: #e7f5ed;
          background-image: url("../assets/img/hover_service.png");
          background-position: 38px 22px;
          background-repeat: no-repeat;
          line-height: 22px;
        }
      }
    }
    .service-box {
      color: #a1a1a1;
      h2 {
        font-weight: normal;
        font-size: 24px;
        margin: 30px 0 0;
      }
      dl {
        margin: 10px 0;
        border-bottom: 1px solid #eee;
        dt {
          padding-bottom: 14px;
          border-bottom: 1px solid #eee;
        }
        dd {
          margin-left: 0;
          padding-top: 8px;
          border-bottom: 1px solid #eee;
          ul {
            list-style: none;
            .text-light {
              color: #40b374;
            }
            p {
              margin-left: 180px;
              background-color: #f2f2f2;
              line-height: 1.5rem;
              font-size: 12px;
              padding: 5px;
            }
          }
        }
        dt span,
        dd li span {
          display: block;
          &:nth-child(1) {
            width: 180px;
          }
          &:nth-child(2) {
            width: 140px;
          }
          &:nth-child(3) {
            width: 220px;
          }
          &:nth-child(4) {
            width: 315px;
          }
          &:nth-child(5) {
            width: 100px;
          }
        }
      }
    }
  }
}
</style>
