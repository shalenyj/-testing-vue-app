<template>
  <div id="app">
    <ConfirmationForm name="confirm-form" @submit="handleSubmit" />
    <p v-if="name" id="greeting">Hi {{ name }}, we found this for you</p>

    <FakeList v-if="isFilled" />
  </div>
</template>

<script>
import ConfirmationForm from "@/components/ConfirmationForm";
import FakeList from "./components/FakeList.vue";

export default {
  name: "App",
  components: {
    ConfirmationForm,
    FakeList,
  },
  data() {
    return {
      isFilled: false,
      name: null,
    };
  },
  methods: {
    handleSubmit(name) {
      this.name = name;
      this.isFilled = true;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
