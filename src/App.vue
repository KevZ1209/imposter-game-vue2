<script>
import CustomButton from './components/CustomButton.vue'

export default {
  components: { CustomButton },
  data: () => ({
    category: "",
  }),
  methods: {
    setCategory(e) {
      this.category = e.target.value;
    }
  },
};
</script>

<template>
  <div id="app">
    <p>{{ category }}</p>
    <h1>Select a Category:</h1>
    <CustomButton buttonVal="tennis" buttonLabel="Tennis" @button-clicked="setCategory"/>
  </div>
</template>

<style>
/* App styles moved to src/assets/global.css */
</style>
