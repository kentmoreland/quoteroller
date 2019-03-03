import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import Quotes from '@/views/Quotes.vue';

Vue.use(Vuetify);

const wrapper = shallowMount(Quotes);
const vm = wrapper.vm;

describe('quotes data', () => {
  it('should be an array', () => {
    expect(Array.isArray(vm.quotes)).toBe(true);
  });
});

describe('getNextQuote', () => {
  it('should set currentQuoteIndex to next index if it is valid', () => {
    vm.getNextQuote();
    expect(vm.currentQuoteIndex).toBe(1);
  });

  it('should set currentQuoteIndex to 0 index if it is invalid', () => {
    vm.currentQuoteIndex = vm.quotes.length - 1;
    vm.getNextQuote();
    expect(vm.currentQuoteIndex).toBe(0);
  });
});

describe('getPreviousQuote', () => {
  it('should set currentQuoteIndex to previous index if it is valid', () => {
    vm.currentQuoteIndex = 2;
    vm.getPreviousQuote();
    expect(vm.currentQuoteIndex).toBe(1);
  });

  it('should set currentQuoteIndex to last item index if invalid', () => {
    vm.currentQuoteIndex = 0;
    vm.getPreviousQuote();
    expect(vm.currentQuoteIndex).toBe(vm.quotes.length - 1);
  });
});
