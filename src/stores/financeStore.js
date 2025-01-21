import { defineStore } from 'pinia';

export const useFinanceStore = defineStore('finance', {
  state: () => ({
    transactions: [
      { id: 1, description: "Salary", amount: 3000, category: "Income" },
      { id: 2, description: "Rent", amount: 1200, category: "Expense" },
    ],
    categories: ["Income", "Expense", "Groceries", "Transportation", "Other"],
    totalIncome: 0,
    totalExpense: 0,
  }),
  getters: {
    getTotalIncome: (state) =>
      state.transactions
        .filter((t) => t.category === "Income")
        .reduce((acc, t) => acc + t.amount, 0),
    getTotalExpense: (state) =>
      state.transactions
        .filter((t) => t.category === "Expense")
        .reduce((acc, t) => acc + t.amount, 0),
    getNetSavings: (state) => state.getTotalIncome - state.getTotalExpense,
  },
  actions: {
    addTransaction(transaction) {
      this.transactions.push({
        id: Date.now(),
        ...transaction,
      });
    },
    deleteTransaction(id) {
      this.transactions = this.transactions.filter((t) => t.id !== id);
    },
    calculateTotals() {
      this.totalIncome = this.getTotalIncome;
      this.totalExpense = this.getTotalExpense;
    },
  },
});
