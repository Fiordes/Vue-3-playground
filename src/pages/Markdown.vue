<template>
  <div class="flex flex-wrap w-full">
    <h1 class="text-4xl text-center w-full my-10">MarkDown App</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          name=""
          id=""
          cols="30"
          rows="10"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from "@/utilities/composition/useDebounce.js";

export default {
  setup() {},
  data() {
    return {
      text: "",
      debounce: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value;
      };

      this.debounce(task, 500);
    },
  },
  mounted() {
    const debounce = useDebounce();
    this.debounce = debounce;
  },
};
</script>

<style></style>
