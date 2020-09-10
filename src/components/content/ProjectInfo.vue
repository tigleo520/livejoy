<template>
  <div>
    <dl class="project-info-list">
      <dt>
        <span class="px-4 py-3 fs-xl">{{projectInfo.title}}</span>
        <span class="px-5 fs-xl">建材</span>
        <span class="px-2 fs-xl text-black">¥{{projectInfo.price}}/㎡</span>
        <span class="fs-xm">此方案总价¥{{projectInfo.total}}</span>
        <span class="fs-xm">产品为每㎡造价</span>
      </dt>
      <dd v-for="items in projectInfo.projectInfo" :key="items.title">
        <ul v-for="(item, index) in items.item" :key="item.title">
          <li>
            <span v-if="index==0" class="info-title">{{items.title}}</span>
            <span v-else class="info-title"></span>
            <span class="list-title text-lightgreen p-4">{{item.title}}</span>
            <span class="list-num">数量：{{item.num}}</span>
            <span class="list-price">单价：¥{{item.price}}</span>
            <span class="list-total">总价：¥{{item.total}}</span>
          </li>
        </ul>
      </dd> 
    </dl>
  </div>
</template>

<script>
export default {
  name: 'projectinfo',
  props: {
    projectInfo: {}
  }
}
</script>

<style lang="scss" scoped>
.project-info-list {
  border-top: 1px solid #eee;
  span {
    display: inline-block;
  }
  dt {
    position: relative;
    :nth-child(1) {
      width: 100px;
    }
    :nth-child(5) {
      position: absolute;
      top: 30px;
      right: 15px;
    }
  }
  dd {
    border-top: 1px solid #eee;
    .info-title {
      width: 100px;
      text-align: center;
    }
    .list-title {
      width: 400px;
    }
    .list-num {
      width: 150px;
    }
    .list-price {
      width: 150px;
    }
    .list-total {
      width: 150px;
    }
  }
}
</style>