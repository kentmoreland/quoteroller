<template>
  <main class="quotes-page">
    <div class="quotes-page-wrapper">
      <hgroup class="quote-title">
        <h1> Quotes </h1>
      </hgroup>
      <div class="quote-wrapper">
        <section class="quote-block">
          <figure class="quote-body">
            {{ currentQuote.quote }}
          </figure>
          <figure class="quote-author">
            ~ {{ currentQuote.author }}
          </figure>
        </section>
        <section class="quote-control-block">
          <v-btn @click="getPreviousQuote">Previous Quote</v-btn>
          <v-btn @click="getNextQuote">Next Quote</v-btn>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
import quoteData from '../data/quotes.js';
import controls from '@/modules/quoteChanger.js';

export default {
  data () {
    return {
      quotes: null,
      currentQuoteIndex: 0
    }
  },
  methods: {
    getQuotes () {
      return quoteData;
    },
    setQuote (index) {
      return this.quotes[index];
    },
    getNextQuote () {
      this.currentQuoteIndex = controls
        .getNext(this.currentQuoteIndex, this.quotes);
    },
    getPreviousQuote () {
      this.currentQuoteIndex = controls
        .getPrevious(this.currentQuoteIndex, this.quotes);
    }
  },
  created () {
    this.quotes = this.getQuotes();
  },
  computed: {
    currentQuote () {
      return this.setQuote(this.currentQuoteIndex);
    }
  }
};
</script>
<style lang=scss>
  .quotes-page {
    height: 600px;
  }

  .quotes-page-wrapper {
    background-color: whiteSmoke;
    min-height: 350px;
    margin: auto;
    margin-top: 100px;
    max-width: 600px;
    padding: 16px;
  }

  .quote-title {
    color: grey;
  }

  .quote-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 350px;
    justify-content: center;
    margin-top: 16px;
  }

  .quote-block {
    height: 350px;
    margin-bottom: 32px;
  }

  .quote-body {
    font-size: 24px;
    min-height: 100px;
  }

  .quote-author {
    font-style: italic;
    padding-right: 32px;
    text-align: right;
  }
</style>
