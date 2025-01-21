<template>
    <aside class="w-60 h-screen bg-gray-800 text-white fixed flex flex-col">
      <ul class="mt-10 space-y-4">
        <li class="px-6 py-2 hover:bg-gray-700">
          <router-link to="/" class="block">Dashboard</router-link>
        </li>
        <li class="px-6 py-2 hover:bg-gray-700">
          <router-link to="/transactions" class="block">Transactions</router-link>
        </li>
        <li class="px-6 py-2 hover:bg-gray-700">
          <router-link to="/reports" class="block">Reports</router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
  </style>
  