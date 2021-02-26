<template>
  <div class="flex w-full justify-center text-center">
    <h1 @click="ok" class="text-4xl text-center">Heellloooo dude</h1>
  </div>
</template>

<script>
// import { onMounted } from "vue";
export default {
  data() {
    return {
      state: this.$store.state,
    };
  },
  methods: {
    ok() {
      console.log(this.state);
    },
  },
};
</script>

<style></style>
