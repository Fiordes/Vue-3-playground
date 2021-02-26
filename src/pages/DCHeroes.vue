<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center mb-10">DC Heroes</h1>
    <ul class="list">
      <li
        class="list-item flex justify-between w-full"
        v-for="(hero, index) in dcHeroes"
        :key="hero.name"
      >
        {{ hero.name }}
        <button class="" @click="removeHero(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded mr-1 p-1"
        type="text"
        v-model.trim="newHero"
        placeholder="Type your hero"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-t from-red-300 to-red-700 p-1"
      >
        Add hero
      </button>
    </form>

    <small> Total heroes in the list is {{ heroesCount }} </small>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

export default {
  setup() {
    const newHeroRef = ref("");

    const newHero = ref("");

    const dcHeroes = ref([
      { name: "Super Girl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "Super Man" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    function removeHero(index) {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i !== index);
    }
    function addHero() {
      if (newHero.value !== "") {
        dcHeroes.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

    const heroesCount = computed({
      get: () => dcHeroes.value.length,
    });

    return { dcHeroes, newHero, removeHero, addHero, newHeroRef, heroesCount };
  },

  computed: {},
};
</script>

<style></style>
