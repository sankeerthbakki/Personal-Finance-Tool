<template>
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-3xl font-bold mb-6">Reports</h2>
    <!-- Bar Chart -->
    <div class="bg-gray-100 p-6 rounded shadow">
      <h3 class="text-lg font-bold mb-4">Monthly Expenses</h3>
      <!-- <canvas id="reportChart"></canvas> -->
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
// import Chart from "chart.js/auto";

export default {
  name: "Reports",
  setup() {
    // onMounted(() => {
    //   const ctx = document.getElementById("reportChart").getContext("2d");
    //   new Chart(ctx, {
    //     type: "bar",
    //     data: {
    //       labels: ["January", "February", "March", "April"],
    //       datasets: [
    //         {
    //           label: "Expenses",
    //           data: [1000, 1200, 800, 950],
    //           backgroundColor: "#FF6384",
    //         },
    //       ],
    //     },
    //   });
    // });
  },
};
</script>
