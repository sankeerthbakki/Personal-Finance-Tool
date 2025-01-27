<template>
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-3xl font-bold mb-6">Dashboard</h2>

    <div class="grid grid-cols-3 gap-6 mb-6">
      <div class="bg-green-100 p-4 rounded shadow">
        <h3 class="text-lg font-semibold text-green-700">Total Income</h3>
        <p class="text-2xl font-bold">${{ store.getTotalIncome }}</p>
      </div>
      <div class="bg-red-100 p-4 rounded shadow">
        <h3 class="text-lg font-semibold text-red-700">Total Expenses</h3>
        <p class="text-2xl font-bold">${{ store.getTotalExpense }}</p>
      </div>
      <div class="bg-blue-100 p-4 rounded shadow">
        <h3 class="text-lg font-semibold text-blue-700">Net Savings</h3>
        <p class="text-2xl font-bold">${{ store.getNetSavings }}</p>
      </div>
    </div>
    <PlaidLink />
  </div>
</template>

<script>
import { useFinanceStore } from "../stores/financeStore";
import PlaidLink from "../components/PlaidLink.vue";

export default {
  name: "Dashboard",
  components: {
    PlaidLink,
  },
  setup() {
    const store = useFinanceStore();
    store.calculateTotals(); // Compute totals on mount

    return { store };
  },
};
</script>
