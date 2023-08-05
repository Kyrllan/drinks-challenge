import { defineStore } from "pinia";
import { Drink } from "~/models/Drink";

export const useFavoriteStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Drink[],
  }),
  actions: {
    setFavorite(item: Drink) {
      const index = this.favorites.findIndex((obj: Drink) => obj.idDrink === item.idDrink);
      if (index <= -1) {
        this.favorites.push(item);
      }
      else {
        this.favorites.splice(index, 1);
      }
    }
  }
})