<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <Create @new-user-added="addUser" />
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border ">ID</th>
              <th class="px-4 py-2 border ">Avatar</th>
              <th class="px-4 py-2 border ">Name</th>
              <th class="px-4 py-2 border ">Email</th>
              <th class="px-4 py-2 border ">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border px-4 py-2">
                <p>
                  {{ user._id }}
                </p>
              </td>
              <td class="border px-4 py-2">
                <img
                  class="rounded-full "
                  style="width: 50px"
                  :src="user.avatar"
                  alt=""
                />
              </td>
              <td class="border px-4 py-2">
                <p>
                  {{ user.name }}
                </p>
              </td>

              <td class="border px-4 py-2">
                <p>
                  {{ user.email }}
                </p>
              </td>
              <td class="border px-4 py-2">
                <button
                  @click="deleteUser(user._id)"
                  class="px-2 py-1 bg-red-800 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-4">
          <button
            class="px-3 py-2 border rounded hover:shadow"
            :disabled="state.users.page === 1"
            @click="prev"
            :class="state.users.page === 1 ? 'bg-gray-500' : 'bg-green-400'"
          >
            Prev
          </button>
          <button
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-500'
                : 'bg-green-400'
            "
            class="px-3 py-2 border rounded hover:shadow "
            @click="next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import Create from "../components/userCrud/Create";

export default {
  components: {
    Create,
  },
  setup() {
    const state = reactive({
      users: [],
      count: 0,
    });
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });
    async function prev() {
      state.count--;

      if (state.count <= 0) {
        const { data } = await axios.get(`/users`);
        state.users = data;
      } else {
        const { data } = await axios.get(`/users?page=${state.count}`);
        state.users = data;
      }
    }
    async function next() {
      state.count++;
      const { data } = await axios.get(`/users?page=${state.count}`);
      state.users = data;
    }

    async function deleteUser(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user._id !== id);
    }

    async function addUser(data) {
      await state.users.push(data);
    }

    return { state, next, prev, deleteUser, addUser };
  },
};
</script>

<style></style>
