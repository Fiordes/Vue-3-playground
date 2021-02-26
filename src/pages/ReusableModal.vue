<template>
  <section class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl my-5 font-bold">Re-usable Modal</h1>
      <button @click="isModalOpen = !isModalOpen">Open Modal</button>
      <Modal @close-modal="isModalOpen = !isModalOpen" v-if="isModalOpen">
        <h2 class="text-red-300">Modal REd</h2>
      </Modal>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false);

    return {
      isModalOpen,
    };
  },
};
</script>

<style></style>
