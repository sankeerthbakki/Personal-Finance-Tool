<template>
    <button :disabled="!ready" @click="open" class="bg-blue-500 text-white px-4 py-2 rounded">
      Connect a bank account
    </button>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { usePlaidLink } from '@jcss/vue-plaid-link';
  
  const linkToken = ref(null);
  
  // Fetch the link token from your backend
  const fetchLinkToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/create_link_token', {
        method: 'POST',
      });
      const data = await response.json();
      linkToken.value = data.link_token;
    } catch (error) {
      console.error('Error fetching link token:', error);
    }
  };
  
  // Initialize Plaid Link configuration
  const config = computed(() => ({
    token: linkToken.value,
    onSuccess: async (public_token, metadata) => {
      console.log('Public Token:', public_token);
      console.log('Account Metadata:', metadata);
      try {
       const response = await fetch('http://localhost:5000/api/exchange_public_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
           },

          body: JSON.stringify({ public_token }),
        }); 
         const data = await response.json();
            console.log(data.access_token);
        } catch (error) {
          console.error('Error processing public token:', error);
        }
    },
    onEvent: (eventName, metadata) => {
      console.log('Event:', eventName, 'Metadata:', metadata);
    },
    onExit: (error, metadata) => {
      if (error) {
        console.error('Plaid Link Error:', error);
      } else {
        console.log('Plaid Link exited:', metadata);
      }
    },
  }));

  // Fetch transactions from your backend
  const getTransactions =  async () => {
    try {
      const response = await fetch('http://localhost:5000/api/transactions', {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  // Initialize Plaid Link
  const { open, ready } = usePlaidLink(config);
  
  // Fetch the link token when the component is mounted
  fetchLinkToken();
  </script>
  