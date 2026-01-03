<template>
  <div>
    <h2>Game in Progress</h2>
    <p>Category: {{ category }}</p>
    <p>Number of Players: {{ numPlayers }}</p>
    <p v-if="hintsEnabled">Imposter Hints are enabled.</p>
    <p v-else>Imposter Hints are disabled.</p>
    <div class="card">
      <div v-if="curr_player === -1">
        <h3>All players have seen their roles.</h3>
        <p>Click the button below to reveal the imposter when ready.</p>
      </div>
      <div v-else>
        <h3>Player {{ curr_player }}</h3>

        <div v-if="!revealed">
          <button @click="revealPosition">
            See if you're the imposter or not
          </button>
        </div>

        <div v-else>
          <div v-if="curr_player === imposterNumber">
            <h3>You are the Imposter!</h3>
            <p v-if="hintsEnabled">Hint: {{ curr_hint }}</p>
          </div>
          <div v-else>
            <h3>You are not the Imposter.</h3>
            <p>The word is: {{ curr_word }}</p>
          </div>
          <button @click="passToNextPlayer">
            Click and Pass to Next Player
          </button>
        </div>
      </div>
    </div>

    <div class="reveal-imposter">
      <button
        v-if="!imposterRevealed && seenPlayers.length >= numPlayers"
        @click="revealImposter"
      >
        Reveal Imposter
      </button>

      <div v-if="imposterRevealed">
        <h3>Imposter is Player {{ imposterNumber }}</h3>
      </div>
    </div>
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
    revealed: false,
    imposterNumber: null,
    seenPlayers: [],
    imposterRevealed: false,
  }),
  mounted() {
    if (this.numPlayers) {
      this.imposterNumber = Math.floor(Math.random() * this.numPlayers) + 1;
    }
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
    numPlayers(newVal) {
      if (newVal) {
        this.imposterNumber = Math.floor(Math.random() * newVal) + 1;
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
      if (entry && entry.Hints && entry.Hints.length) {
        const hintIndex = Math.floor(Math.random() * entry.Hints.length);
        this.curr_hint = entry.Hints[hintIndex];
      } else {
        this.curr_hint = "";
      }
    },
    revealPosition() {
      this.revealed = true;
      // mark this player as having seen their role
      if (!this.seenPlayers.includes(this.curr_player)) {
        this.seenPlayers.push(this.curr_player);
      }
    },
    passToNextPlayer() {
      this.curr_player = this.curr_player + 1;
      if (this.curr_player > this.numPlayers) {
        this.curr_player = -1;
      }
      this.revealed = false;
    },
    revealImposter() {
      this.imposterRevealed = true;
    },
  },
};
</script>
