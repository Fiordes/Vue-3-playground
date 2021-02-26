<template>
  <button class="border px-2 py-1 rounded-md my-4" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false">
      <template #title>
        Add New User
      </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="my-2">
            <label>Name</label>
            <input
              class="border px-2 py-2 rounded w-full "
              placeholder="User Name"
              type="text"
              name=""
              v-model.lazy="state.form.name"
            />
          </div>
          <div class="my-2">
            <label>Email</label>

            <input
              class="border px-2 py-2 rounded w-full"
              placeholder="User email"
              type="email"
              name=""
              v-model.lazy="state.form.email"
            />
          </div>
          <div class="my-2">
            <label>Avatar</label>

            <input
              class="border px-2 py-2 rounded w-full "
              placeholder="User avatar"
              type="text"
              name=""
              v-model.lazy="state.form.avatar"
            />
          </div>
          <button
            class="w-full rounded border bg-gray-200 px-2 py-2 color-white mt-4 hover:bg-blue-500"
            type="submit"
          >
            Add User
          </button>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "../Modal";
import { reactive, ref } from "vue";
import axios from "../../plugins/axios";

export default {
  components: {
    Modal,
  },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const { data } = await axios.post("/users", state.form);
      emit("new-user-added", data);
      //   state.users.push(data);

      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { isModalOpen, submit, state };
  },
};
</script>

<style></style>
