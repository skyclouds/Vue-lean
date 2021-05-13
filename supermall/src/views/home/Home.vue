<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">Super Mall</div></nav-bar>
    <!--用于实现吸顶的占坑-->
    <tab-control
      ref="tabControlTemp"
      :titles="showCatalog"
      @tabClick="tabItemClick"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view
        :recommends="recommends"
        @recommendImageLoad="recommendImageLoad"
      />
      <tab-control
        ref="tabControl"
        :titles="showCatalog"
        @tabClick="tabItemClick"
      />
      <books-list :books="showBooks" />
    </scroll>
    <!-- 需要监听一个组件的原生事件时,需要给对应的事件加上.native修饰符才能进行监听 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import TabControl from "components/content/tabControl/TabControl";
import BooksList from "components/content/books/BooksList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getCatalogs, getBooks } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    BooksList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      catalogs: [],
      recommends: [],
      books: [],
      currentCatalogId: 0,
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0,
    };
  },
  computed: {
    showCatalog() {
      if (this.catalogs && this.catalogs.length >= 3) {
        return [
          this.catalogs[0].catalog,
          this.catalogs[1].catalog,
          this.catalogs[2].catalog,
        ];
      } else {
        return [];
      }
    },
    showBooks() {
      if (this.books.length == 0) {
        return [];
      } else {
        let booklist = [];
        for (let book of this.books) {
          if (book.catalogId == this.currentCatalogId) {
            booklist = book.list;
          }
        }
        //如果是单数数据的特殊处理
        if (booklist.length > 0 && booklist.length % 2 != 0) {
          booklist.push({});
        }
        return booklist;
      }
    },
  },
  created() {
    this.getBanners();
    this.getAllBooks();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    //最好返回时做一次刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
  },
  methods: {
    tabItemClick(index) {
      this.currentCatalogId = this.catalogs[index].id;
      this.$refs.tabControlTemp.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      //判断是否显示BackTop
      this.isShowBackTop = -position.y > 1000;
      //决定tabContorl是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    getBanners() {
      this.banners = [
        {
          image:
            "http://img60.ddimg.cn/upload_img/00796/1/750x315_0429-1619760620.jpg",
          link: "http://book.dangdang.com/20210425_a2pb",
        },
        {
          image:
            "http://img60.ddimg.cn/upload_img/00877/202105/750x315_wzh_20210429-1619693526.jpg",
          link: "http://baby.dangdang.com/20210427_jnv0",
        },
        {
          image:
            "http://img61.ddimg.cn/upload_img/00737/1/jfnew750x315_fhc-1619772376.jpg",
          link: "http://book.dangdang.com/20210430_hq4t",
        },
        {
          image:
            "http://img62.ddimg.cn/upload_img/00316/by/750X315-1620465194.jpg",
          link: "http://book.dangdang.com/20210506_zlfu",
        },
        {
          image:
            "http://img61.ddimg.cn/upload_img/00877/202105/750x315-1619507619.jpg",
          link: "http://baby.dangdang.com/2021new5",
        },
        {
          image:
            "http://img60.ddimg.cn/upload_img/00822/2/750x315-1619695024.jpg",
          link: "http://book.dangdang.com/20200807_55pb",
        },
        {
          image:
            "http://img61.ddimg.cn/ddreader/dangebook/5Y50J25new_750x315.jpg",
          link: "http://book.dangdang.com/20210317_x0d2",
        },
      ];
    },
    getAllBooks() {
      getCatalogs().then((res) => {
        if (res.result) {
          this.catalogs = res.result;
          this.currentCatalogId = this.catalogs[0].id;
          this.getRecommendedBooks();
          this.getBooks(this.catalogs[0].id);
          this.getBooks(this.catalogs[1].id);
          this.getBooks(this.catalogs[2].id);
        }
      });
    },
    getRecommendedBooks() {
      getBooks(this.catalogs[3].id, 0, 4).then((res) => {
        this.recommends = res.result.data;
      });
    },
    getBooks(catalogId) {
      let rn = 10;
      let pn = 0;
      let index = -1;
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].catalogId == catalogId) {
          index = i;
          pn = this.books[i].pn + this.books[i].rn;
          if (pn + rn > this.books[i].totalNum) {
            rn = this.books[i].totalNum - pn;
          }
          break;
        }
      }
      getBooks(catalogId, pn, rn).then((res) => {
        if (index == -1) {
          this.books.push({
            catalogId: catalogId,
            pn: parseInt(res.result.pn),
            rn: parseInt(res.result.rn),
            totalNum: parseInt(res.result.totalNum),
            list: res.result.data,
          });
        } else {
          this.books[index].catalogId = catalogId;
          this.books[index].pn = parseInt(res.result.pn);
          this.books[index].rn = parseInt(res.result.rn);
          this.books[index].totalNum = parseInt(res.result.totalNum);
          this.books[index].list.push(...res.result.data);
        }

        this.$refs.scroll.finishPullUp();
      });
    },
    loadMore() {
      let load = true;
      for (let book of this.books) {
        if (book.catalogId == this.currentCatalogId) {
          if (book.pn + book.rn == book.totalNum) {
            load = false;
            break;
          }
        }
      }
      if (load) {
        this.getBooks(this.currentCatalogId);
      } else {
        this.$refs.scroll.finishPullUp();
      }
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    recommendImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  /**vh(视口)->viewport height-**/
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /**在使用浏览器原生滚动时,为了让导航不跟随浏览器滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
