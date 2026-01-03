<template>
  <button @click="setCategory" :value="buttonVal">{{ buttonLabel }}</button>
</template>

<script>
export default {
  props: ["buttonVal", "buttonLabel"],
  methods: {
    setCategory(e) {
      this.$emit("button-clicked", e);
},
  },
};
</script>

<style>
button {
  background-color: white;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: inherit;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid #008cba;
}
button:hover {
  background-color: #008cba;
  color: white;
}
</style>
