<script>
import SetupState from "./components/game-states/SetupState.vue";
import GameState from "./components/game-states/GameState.vue";

export default {
  components: { SetupState, GameState },
  data() {
    return {
      state: "setup",
      category: "",
      numPlayers: 3,
      hintsEnabled: true,
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
    <GameState
      v-else-if="state === 'game'"
      :category="category"
      :numPlayers="numPlayers"
      :hintsEnabled="hintsEnabled"
    />
  </div>
</template>

<style>
/* App styles moved to src/assets/global.css */
</style>
