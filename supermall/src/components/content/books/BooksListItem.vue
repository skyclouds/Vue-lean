<template>
  <div class="books-item">
  <img :src="booksItem.img" alt="" @load="imageLoad">
  <div class="books-info">
    <p>{{booksItem.title}}</p>
    <span class="reading">{{booksItem.reading}}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: "BooksListItem",
  props: {
    booksItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad(){
      //通过事件总线发送
      this.$bus.$emit("itemImageLoad");
    }
  }
};
</script>

<style scoped>
  .books-item {
    padding-bottom: 45px;
    position: relative;
    width: 48%;
  }
  .books-item img {
    width: 100%;
    border-radius: 5px;
  }
  .books-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .books-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }
  .books-info .reading {
    color: var(--color-high-text);
    margin-bottom: 5px;
  }
</style>
