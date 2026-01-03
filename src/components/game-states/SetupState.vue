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
  }),
  methods: {
    setCategory(value) {
      this.$emit("start-game", {
        category: value,
        numPlayers: this.numPlayers,
      });
    },
  },
};
</script>

<style></style>
