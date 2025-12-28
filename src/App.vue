<script>
export default {
  data: () => {
    return {
      category: "",
    };
  },
  methods: {
    setCategory(cat) {
      this.category = cat;
    },
  },
  mounted() {
    this.increment();
  },
};
</script>

<template>
  <div id="app">
    <p>{{ category }}</p>
    <button @click="setCategory('tennis')">Tennis</button>
    <button @click="setCategory('clash_royale')">Clash Royale</button>
    <button @click="setCategory('ucla')">UCLA</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: white;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
