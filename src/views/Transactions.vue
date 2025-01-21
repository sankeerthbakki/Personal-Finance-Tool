<template>
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-3xl font-bold mb-6">Transactions</h2>

    <!-- Add Transaction Form -->
    <form @submit.prevent="handleAddTransaction" class="mb-6">
      <div class="grid grid-cols-4 gap-4 mb-4">
        <input
          v-model="newTransaction.description"
          type="text"
          placeholder="Description"
          class="p-2 border rounded"
          required
        />
        <input
          v-model="newTransaction.amount"
          type="number"
          placeholder="Amount"
          class="p-2 border rounded"
          required
        />
        <select v-model="newTransaction.category" class="p-2 border rounded">
          <option value="" disabled>Select Category</option>
          <option v-for="category in store.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </form>

    <!-- Transactions Table -->
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2 border">Description</th>
          <th class="p-2 border">Amount</th>
          <th class="p-2 border">Category</th>
          <th class="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in store.transactions" :key="transaction.id">
          <td class="p-2 border">{{ transaction.description }}</td>
          <td class="p-2 border">${{ transaction.amount }}</td>
          <td class="p-2 border">{{ transaction.category }}</td>
          <td class="p-2 border">
            <button @click="store.deleteTransaction(transaction.id)" class="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import { useFinanceStore } from "../stores/financeStore";

export default {
  name: "Transactions",
  setup() {
    const store = useFinanceStore();

    const newTransaction = ref({
      description: "",
      amount: 0,
      category: "",
    });

    const handleAddTransaction = () => {
      store.addTransaction(newTransaction.value);
      newTransaction.value = { description: "", amount: 0, category: "" };
    };

    return { store, newTransaction, handleAddTransaction };
  },
};
</script>
