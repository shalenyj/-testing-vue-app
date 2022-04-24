<template>
  <button :type="type" class="t-button" @click="handleClick">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "TButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="css" scoped>
.t-button {
  background: cadetblue;
  color: white;
  border: 2px solid lightblue;
  border-radius: 4px;
  padding: 5px 10px;
  text-transform: capitalize;
}
</style>
