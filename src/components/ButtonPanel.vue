<template>
    <button @click="navigate">
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonPanel',
    props: {
      label: {
        type: String,
        default: 'Go'
      },
      to: {
        type: String,
        required: true
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      navigate() {
        this.$router.push(`/rooms${this.to}`);
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    color: black;
    border-radius: 5px;
  }
  </style>
  