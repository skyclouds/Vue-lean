<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#d81e06">
        <img
          slot="item-icon-nor"
          src="~assets/img/tabbar/icon_home_nor.svg"
          alt=""
        />
        <img
          slot="item-icon-sel"
          src="~assets/img/tabbar/icon_home_sel.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d81e06">
        <img
          slot="item-icon-nor"
          src="~assets/img/tabbar/icon_category_nor.svg"
          alt=""
        />
        <img
          slot="item-icon-sel"
          src="~assets/img/tabbar/icon_category_sel.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#d81e06">
        <img
          slot="item-icon-nor"
          src="~assets/img/tabbar/icon_shopcart_nor.svg"
          alt=""
        />
        <img
          slot="item-icon-sel"
          src="~assets/img/tabbar/icon_shopcart_sel.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#d81e06">
        <img
          slot="item-icon-nor"
          src="~assets/img/tabbar/icon_profile_nor.svg"
          alt=""
        />
        <img
          slot="item-icon-sel"
          src="~assets/img/tabbar/icon_profile_sel.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>