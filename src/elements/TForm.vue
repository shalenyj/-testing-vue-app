<template>
  <form name="name" @submit.prevent="handleSubmit">
    <slot />
    <section class="buttons">
      <TButton type="submit" :title="submitTitle" />
    </section>
  </form>
</template>

<script>
import TButton from "./TButton";

export default {
  name: "TForm",
  components: {
    TButton,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    submitTitle: {
      type: String,
      default: "submit",
    },
    showReset: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
form {
  width: 40vw;
  height: 30vh;
}
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.input-wrap {
  padding-top: 10px;
}
label {
  display: block;
  font-family: sans-serif;
  font-size: 12px;
}
input {
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  border: 1px solid lightblue;
  border-radius: 2px;
  box-sizing: border-box;
}
</style>
