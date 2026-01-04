<template>
  <div>
    <h1>Imposter Game</h1>
    <label for="numPlayers">Number of Players (3-10): </label>
    <input
      id="numPlayers"
      type="number"
      min="3"
      max="10"
      value="3"
      step="1"
      v-model.number="numPlayers"
    />
    <div></div>
    <label for="hintsEnabled">Enable Imposter Hints: </label>
    <input id="hintsEnabled" type="checkbox" v-model="hintsEnabled" />
    <h3>Select a Category to Start:</h3>
    <CustomButton
      v-for="(list, category) in words"
      :key="category"
      :buttonVal="category"
      :buttonLabel="category"
      @button-clicked="setCategory"
    />
  </div>
</template>

<script>
import CustomButton from "../utility/CustomButton.vue";
import words from "@/assets/words.json";

export default {
  components: { CustomButton },
  data: () => ({
    words: words,
    numPlayers: 3,
    hintsEnabled: true,
  }),
  methods: {
    setCategory(value) {
      this.$emit("start-game", {
        category: value,
        numPlayers: this.numPlayers,
        imposterHintsEnabled: this.hintsEnabled,
      });
    },
  },
};
</script>

<style></style>
