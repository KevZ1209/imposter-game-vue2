<script>
import SetupState from "./components/game-states/SetupState.vue";

export default {
  components: { SetupState },
  data() {
    return {
      state: "setup",
      category: "",
      numPlayers: 3,
    };
  },
  methods: {
    startGame(payload) {
      this.category = payload.category;
      this.numPlayers = payload.numPlayers;
      this.state = "game";
      console.log(
        `Game started with category: ${this.category} and number of players: ${this.numPlayers}`
      );
    },
  },
};
</script>

<template>
  <div id="app">
    <SetupState v-if="state === 'setup'" @start-game="startGame" />
    <div v-else>
      <h2>Game in Progress</h2>
      <p>Category: {{ category }}</p>
      <p>Number of Players: {{ numPlayers }}</p>
      <!-- Game logic and components would go here -->
    </div>
  </div>
</template>

<style>
/* App styles moved to src/assets/global.css */
</style>
