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
    <h3>Or use your own words (comma-separated):</h3>
    <p>Hints are not supported for custom words.</p>
    <input
      id="customWords"
      type="text"
      v-model="customWordsInput"
      placeholder="e.g. Apple, Banana, Mango"
      class="custom-words-input"
    />
    <CustomButton
      :buttonVal="'custom'"
      :buttonLabel="'Start with custom words'"
      @button-clicked="startWithCustomWords"
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
    customWordsInput: "",
  }),
  methods: {
    setCategory(value) {
      this.$emit("start-game", {
        category: value,
        numPlayers: this.numPlayers,
        imposterHintsEnabled: this.hintsEnabled,
        customWords: null,
      });
    },
    startWithCustomWords() {
      const list = this.customWordsInput
        .split(",")
        .map((w) => w.trim())
        .filter((w) => w.length > 0);
      if (list.length === 0) {
        return;
      }
      this.$emit("start-game", {
        category: "Custom",
        numPlayers: this.numPlayers,
        imposterHintsEnabled: this.hintsEnabled,
        customWords: list,
      });
    },
  },
};
</script>

<style scoped>
.custom-words-input {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0.5rem auto 1rem;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
