<template>
  <section id="stories" v-if="items.length">
    <div v-for="item in items" :key="item.id">
      <p>
        Story name <em>{{ item.title }}</em>
      </p>
      <p>
        <span>{{ item.body }} </span>
      </p>
    </div>
  </section>
  <p v-else id="empty-list">Sorry no stories for tonight</p>
</template>

<script>
export const URL = "https://jsonplaceholder.typicode.com";
export const MIN_ID = 5;
export const MAX_ID = 9;

export default {
  name: "FakeList",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    fetchList() {
      return fetch(`${URL}/posts`).then((response) => response.json());
    },
    async getItems() {
      const items = await this.fetchList();
      this.setItems(items);
    },
    filterHandler(item) {
      return item.id <= MAX_ID && item.id >= MIN_ID;
    },
    getFilteredItems(allItems) {
      return allItems.filter(this.filterHandler);
    },
    setItems(items) {
      this.items = this.getFilteredItems(items);
    },
  },
};
</script>

<style lang="css" scoped>
section {
  width: 60%;
}
section div {
  margin-bottom: 15px;
}
</style>
