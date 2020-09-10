import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomList: [
      {
        _id: "01",
        title: "客厅",
        type: 1,
        category: "1",
        area: "25",
        view: "215",
        favorite: "135",
        price: "2552",
        total: "43223",
        content:
          "简单别致的卫生间设计，纯白色的瓷砖代培透明玻璃，马桶上的黑白画艺术最美，小空间亦能拥有大幸福",
        imgUrl: [
          require("../assets/img/images/project_58.gif"),
          require("../assets/img/images/project_23.gif"),
          require("../assets/img/images/project_24.gif"),
          require("../assets/img/images/project_25.gif")
        ],
        designer: "羊羊羊",
        projectInfo: [
          {
            title: '顶面',
            item: [
              {
                title: '多乐士金装无添加5合1（防水）墙面漆乳胶漆',
                num: '2.77升',
                price: 26,
                total: 220
              }
            ]
          },
          {
            title: '墙面',
            item: [
              {
                title: 'TCL罗格朗美驭系列单开双控插座',
                num: '5个',
                price: 65,
                total: 325
              },
              {
                title: '德瑞18082PVC墙纸',
                num: '8张',
                price: 79,
                total: 657
              },
              {
                title: '都彩多层板门（窗）套',
                num: '5套',
                price: 45,
                total: 345
              }
            ]
          }
        ]
      },
      {
        _id: "02",
        title: "厨房",
        type: 2,
        category: "4",
        area: "10",
        view: "137",
        favorite: "112",
        price: "2552",
        total: "43223",
        content:
          "简单别致的卫生间设计，纯白色的瓷砖代培透明玻璃，马桶上的黑白画艺术最美，小空间亦能拥有大幸福",
        imgUrl: [
          require("../assets/img/images/project_58.gif"),
          require("../assets/img/images/project_23.gif"),
          require("../assets/img/images/project_24.gif"),
          require("../assets/img/images/project_25.gif")
        ],
        designer: "羊羊羊",
        projectInfo: [
          {
            title: '顶面',
            item: [
              {
                title: '多乐士金装无添加5合1（防水）墙面漆乳胶漆',
                num: '2.77升',
                price: 26,
                total: 220
              }
            ]
          },
          {
            title: '墙面',
            item: [
              {
                title: 'TCL罗格朗美驭系列单开双控插座',
                num: '5个',
                price: 65,
                total: 325
              },
              {
                title: '德瑞18082PVC墙纸',
                num: '8张',
                price: 79,
                total: 657
              },
              {
                title: '都彩多层板门（窗）套',
                num: '5套',
                price: 45,
                total: 345
              }
            ]
          }
        ]
      },
      {
        _id: "03",
        title: "主卧",
        type: 1,
        category: "2",
        area: "18",
        view: "137",
        favorite: "112",
        price: "2552",
        total: "43223",
        content:
          "简单别致的卫生间设计，纯白色的瓷砖代培透明玻璃，马桶上的黑白画艺术最美，小空间亦能拥有大幸福",
        imgUrl: [
          require("../assets/img/images/project_58.gif"),
          require("../assets/img/images/project_23.gif"),
          require("../assets/img/images/project_24.gif"),
          require("../assets/img/images/project_25.gif")
        ],
        designer: "羊羊羊",
        projectInfo: [
          {
            title: '顶面',
            item: [
              {
                title: '多乐士金装无添加5合1（防水）墙面漆乳胶漆',
                num: '2.77升',
                price: 26,
                total: 220
              }
            ]
          },
          {
            title: '墙面',
            item: [
              {
                title: 'TCL罗格朗美驭系列单开双控插座',
                num: '5个',
                price: 65,
                total: 325
              },
              {
                title: '德瑞18082PVC墙纸',
                num: '8张',
                price: 79,
                total: 657
              },
              {
                title: '都彩多层板门（窗）套',
                num: '5套',
                price: 45,
                total: 345
              }
            ]
          }
        ]
      },
      {
        _id: "04",
        title: "次卧",
        type: 1,
        category: "3",
        area: "15",
        view: "137",
        favorite: "112",
        price: "2552",
        total: "43223",
        content:
          "简单别致的卫生间设计，纯白色的瓷砖代培透明玻璃，马桶上的黑白画艺术最美，小空间亦能拥有大幸福",
        imgUrl: [
          require("../assets/img/images/project_58.gif"),
          require("../assets/img/images/project_23.gif"),
          require("../assets/img/images/project_24.gif"),
          require("../assets/img/images/project_25.gif")
        ],
        designer: "羊羊羊",
        projectInfo: [
          {
            title: '顶面',
            item: [
              {
                title: '多乐士金装无添加5合1（防水）墙面漆乳胶漆',
                num: '2.77升',
                price: 26,
                total: 220
              }
            ]
          },
          {
            title: '墙面',
            item: [
              {
                title: 'TCL罗格朗美驭系列单开双控插座',
                num: '5个',
                price: 65,
                total: 325
              },
              {
                title: '德瑞18082PVC墙纸',
                num: '8张',
                price: 79,
                total: 657
              },
              {
                title: '都彩多层板门（窗）套',
                num: '5套',
                price: 45,
                total: 345
              }
            ]
          }
        ]
      },
      {
        _id: "05",
        title: "卫生间",
        type: 2,
        category: "5",
        area: "20",
        view: "137",
        favorite: "112",
        price: "2552",
        total: "43223",
        content:
          "简单别致的卫生间设计，纯白色的瓷砖代培透明玻璃，马桶上的黑白画艺术最美，小空间亦能拥有大幸福",
        imgUrl: [
          require("../assets/img/images/project_58.gif"),
          require("../assets/img/images/project_23.gif"),
          require("../assets/img/images/project_24.gif"),
          require("../assets/img/images/project_25.gif")
        ],
        designer: "羊羊羊",
        projectInfo: [
          {
            title: '顶面',
            item: [
              {
                title: '多乐士金装无添加5合1（防水）墙面漆乳胶漆',
                num: '2.77升',
                price: 26,
                total: 220
              }
            ]
          },
          {
            title: '墙面',
            item: [
              {
                title: 'TCL罗格朗美驭系列单开双控插座',
                num: '5个',
                price: 65,
                total: 325
              },
              {
                title: '德瑞18082PVC墙纸',
                num: '8张',
                price: 79,
                total: 657
              },
              {
                title: '都彩多层板门（窗）套',
                num: '5套',
                price: 45,
                total: 345
              }
            ]
          }
        ]
      }
    ],
    myInfo: {
      name: '联想王小二',
      tel: '18911778718',
      address: '北京海淀西二旗',
      myProject: [
        {
          id: '03',
          area: "16"
        }
      ],
      myFavorite: ['02', '03']
    },
    mark: false,
    shopList: [],
    category: [],
    total: 0
  },
  mutations: {
    addShopping(state, item) {
      const obj = { id: item._id, area: item.area }
      state.myInfo.myProject.push(obj)
    },
    delShopping(state, id) {
      state.myInfo.myProject.splice(state.myInfo.myProject.findIndex(item => item._id == id), 1)
    },
    getFavorite(state, id) {
      if (state.myInfo.myFavorite.includes(id)) {
        state.myInfo.myFavorite.splice(state.myInfo.myFavorite.indexOf(id), 1)
        state.roomList.find(item => item._id == id).favorite --
      } else {
        state.myInfo.myFavorite.push(id)
        state.roomList.find(item => item._id == id).favorite ++
      }
    },
    getShopList(state) {
      state.shopList = []
      let num = 0
      state.myInfo.myProject.forEach(function(item) {
        const obj = state.roomList.find(items => items._id == item.id);
        if(!obj) {
          return
        }
        const obj1 = JSON.parse(JSON.stringify(obj))
        obj1.area = item.area;
        obj1.total = obj.price * item.area;
        state.shopList.push(obj1);
        num += obj1.total
      });
      state.total = num
    },
    getCategory(state) {
      const arr = []
      arr[0] = state.shopList.filter(item => item.category==2 || item.category==3).length
      arr[1] = state.shopList.filter(item => item.category==1).length
      arr[2] = state.shopList.filter(item => item.category==4).length
      arr[3] = state.shopList.filter(item => item.category==5).length
      state.category = arr
    }
  },
  actions: {}
});
