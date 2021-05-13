<template>
  <div class="books">
    <books-list-item v-for="(item, index) in books" :books-item="item" :key="index" />
  </div>
</template>

<script>
import BooksListItem from "./BooksListItem";
export default {
  name: "BooksList",
  components: {
    BooksListItem,
  },
  props: {
    books: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>