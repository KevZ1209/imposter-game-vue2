<script>
import SetupState from "./components/game-states/SetupState.vue";
import GameState from "./components/game-states/GameState.vue";
import CustomButton from "./components/utility/CustomButton.vue";

export default {
  components: { SetupState, GameState, CustomButton },
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
      this.hintsEnabled = payload.imposterHintsEnabled;
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
    <!-- Add a bit of spacing here -->
    <div style="height: 200px"></div>
    <CustomButton
      v-if="state !== 'setup'"
      buttonLabel="Home"
      @button-clicked="state = 'setup'"
    />
  </div>
</template>

<style>
/* App styles moved to src/assets/global.css */
</style>
