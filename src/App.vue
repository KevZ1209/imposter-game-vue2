<script>
  import SetupState from "./components/game-states/SetupState.vue";

  export default {
    components: { SetupState },
    data () {
      return {
        state: 'setup',
        category: '',
        numPlayers: 3
      };
    },
  };
</script>

<template>
  <div id="app">
    <SetupState />
  </div>
</template>

<style>
/* App styles moved to src/assets/global.css */
</style>
