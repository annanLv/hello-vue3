import { defineStore } from 'pinia';

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'Hello, 大菠萝🍍'
    };
  },
  getters: {},
  actions: {}
});
