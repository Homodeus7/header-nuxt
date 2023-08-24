import { defineStore } from "pinia";

export const useApp = defineStore("app", {
  state: () => {
    return {
      title: "App Title",
      text: "Lorem ipsum",
      categories: ["Каталог", "О компании", "Журнал"],
    };
  },
  actions: {},
});
