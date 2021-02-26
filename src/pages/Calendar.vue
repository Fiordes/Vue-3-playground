<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Calendar</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num of startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num of daysInMonth()"
        :key="num"
        :class="currentDayClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="mt-2 flex justify-between">
      <button
        class="border rounded bg-gradient-to-t from-red-300 to-red-900 p-2"
        @click="prev"
      >
        prev
      </button>
      <button
        class="border rounded bg-gradient-to-t from-blue-300 to-blue-900 p-2"
        @click="next"
      >
        next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      days: ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"],
      //   currentMonthName: new Date()
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDayClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();

      return calendarFullDate === currentFullDate
        ? "text-red-800, font-bold"
        : "";
    },
  },
};
</script>

<style>
h2 {
  text-transform: capitalize;
}
</style>