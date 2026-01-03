<template>
  <div>
    <h2>Game in Progress</h2>
    <p>Category: {{ category }}</p>
    <p>Number of Players: {{ numPlayers }}</p>
    <p v-if="hintsEnabled">Imposter Hints are enabled.</p>
    <p v-else>Imposter Hints are disabled.</p>
  </div>
</template>

<script>
// import the words.json file
import words from "@/assets/words.json";

export default {
  props: ["category", "numPlayers", "hintsEnabled"],
  data: () => ({
    words: words,
    curr_word: "",
    curr_hint: "",
    curr_player: 1,
  }),
  mounted() {
    if (
      this.category &&
      this.words &&
      this.words[this.category] &&
      this.words[this.category].Entries
    ) {
      this.setWord();
    }
  },
  watch: {
    category(newVal) {
      if (
        newVal &&
        this.words &&
        this.words[newVal] &&
        this.words[newVal].Entries
      ) {
        this.setWord();
      }
    },
  },
  methods: {
    setWord() {
      const list =
        this.words &&
        this.words[this.category] &&
        this.words[this.category].Entries;
      if (!list || !list.length) {
        this.curr_word = "";
        return;
      }
      const rand_index = Math.floor(Math.random() * list.length);
      const entry = list[rand_index];
      this.curr_word = entry && entry.Word ? entry.Word : "";
    },
  },
};
</script>
