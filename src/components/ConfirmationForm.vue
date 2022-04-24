<template>
  <TForm name="confirm-form" @submit="handleConfirm" submit-title="confirm">
    <div class="input-wrap">
      <label for="name">Name: </label>
      <input
        id="name"
        v-model="name"
        type="text"
        required
        placeholder="Tell us your name"
      />
    </div>
  </TForm>
</template>

<script>
import TForm from "@/elements/TForm";

export default {
  name: "ConfirmationForm",
  components: {
    TForm,
  },
  data() {
    return {
      name: null,
    };
  },
  methods: {
    handleConfirm() {
      this.$emit('submit', this.name)
    },
  },
};
</script>
