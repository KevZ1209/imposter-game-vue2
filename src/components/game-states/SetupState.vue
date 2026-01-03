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
      buttonVal="tennis"
      buttonLabel="Tennis"
      @button-clicked="setCategory"
    />
    <CustomButton
      buttonVal="soccer"
      buttonLabel="Soccer"
      @button-clicked="setCategory"
    />
    <CustomButton
      buttonVal="basketball"
      buttonLabel="Basketball"
      @button-clicked="setCategory"
    />
    <CustomButton
      buttonVal="baseball"
      buttonLabel="Baseball"
      @button-clicked="setCategory"
    />
  </div>
</template>

<script>
import CustomButton from "../utility/CustomButton.vue";

export default {
  components: { CustomButton },
  data: () => ({
    category: "",
    numPlayers: 3,
  }),
  methods: {
    setCategory(e) {
      this.category = e.target.value;
    },
  },
};
</script>

<style></style>
