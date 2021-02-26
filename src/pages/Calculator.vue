<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p class="text-3xl h-20 text-right mt-3 w-40 mb-4 overflow-x-scroll">
        {{ curentNumber }}
      </p>
      <div>
        <small class="h-5" v-if="seletedOperation">
          {{ prevNumber }} {{ seletedOperation }} {{ curentNumber }}</small
        >
      </div>
      <div class=" grid grid-cols-4 gap-1">
        <button
          @click="pressed('num')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          N</button
        ><button
          @click="pressed('/')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          /
        </button>
        <button
          @click="pressed('*')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          *
        </button>
        <button
          @click="pressed('-')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          -
        </button>

        <button
          @click="pressed('1')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 border rounded shadow w-10  row-span-2"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          6
        </button>
        <button
          @click="pressed('7')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 border rounded shadow w-10 h-10 "
        >
          9
        </button>
        <button
          @click="pressed('=')"
          class="p-2 border rounded shadow w-10 row-span-2 "
        >
          =
        </button>
        <button
          @click="pressed('0')"
          class="p-2 border rounded shadow  h-10 col-span-2"
        >
          0
        </button>
        <button
          @click="pressed(',')"
          class="p-2 border rounded shadow w-10 h-10 "
        >
          ,
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "@/utilities/composition/useWindowEvent.js";

export default {
  setup() {
    const calculation = ref("");
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const curentNumber = ref("");
    const prevNumber = ref("");
    const seletedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate(value);
      else if (value === "num") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      curentNumber.value = curentNumber.value + value;
    }
    function applyOperation(value) {
      calculate();
      prevNumber.value = curentNumber.value;
      curentNumber.value = "";
      seletedOperation.value = value;
    }
    function calculate() {
      if (seletedOperation.value === "-") subtract();
      else if (seletedOperation.value === "+") sum();
      else if (seletedOperation.value === "*") multiply();
      else if (seletedOperation.value === "/") divide();
      prevNumber.value = "";
      seletedOperation.value = "";
    }

    function multiply() {
      curentNumber.value = +prevNumber.value * +curentNumber.value;
    }
    function subtract() {
      curentNumber.value = +prevNumber.value - +curentNumber.value;
    }
    function sum() {
      curentNumber.value = +prevNumber.value + +curentNumber.value;
    }
    function divide() {
      curentNumber.value = +prevNumber.value / +curentNumber.value;
    }

    function clear() {
      curentNumber.value = "";
      prevNumber.value = "";
      seletedOperation.value = "";
    }

    function handleKeyDown(e) {
      console.log(e.key);
      pressed(e.key);
    }

    useWindowEvent("keydown", handleKeyDown);

    // onMounted(() => window.addEventListener("keydown", handleKeyDown));
    // onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));

    return { calculation, pressed, curentNumber, seletedOperation, prevNumber };
  },
};
</script>

<style></style>
