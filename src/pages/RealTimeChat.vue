<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h2 class="text-center text-2xl">Real Time Chat</h2>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div class="w-full" v-for="chat in state.chats" :key="chat.id">
            <span
              class="flex"
              :class="chat.userId === userId ? 'justify-start' : 'justify-end'"
              >{{ chat.message }}</span
            >
          </div>
        </div>
      </div>
      <div class="h-8 p-2">
        <input
          class="p-1 rounded border shadow-md"
          type="text"
          v-model="state.message"
          @keydown.enter="addNewMessage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { chatsRef } from "../utilities/fire-base";
import { useStore } from "vuex";
export default {
  setup() {
    // const chats = ref({});

    const state = reactive({
      chats: [],
      message: "",
    });
    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(async () => {
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
        //   state.chats = snapshot.val();
      });
    });

    function addNewMessage() {
      const newChat = chatsRef.push();
      newChat.set({
        userId: state.userId,
        message: state.message,
      });
      state.message = "";
    }

    return { state, addNewMessage, userId };
  },
};
</script>

<style></style>
