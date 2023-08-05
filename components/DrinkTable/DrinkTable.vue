<template>
  <div>
    <v-progress-linear v-if="loading" indeterminate color="violet500"></v-progress-linear>
    <v-table class="drink-table">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-right">
            Favorite
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i" class="table-row" @click.stop="$emit('input', item)">
          <td class="d-flex align-center">
            <img class="img" width="36" height="36" :src="item.strDrinkThumb" :alt="item.strDrink">
            <span class="pl-2">
              {{ item.strDrink }}
            </span>
          </td>
          <td class="text-right">
            <v-btn @click.stop="setFavorite(item)" icon size="small" color="transparent" flat>
              <v-icon size="18" :color="isFavorite(item) ? 'amber500': 'gray800'">mdi-star</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteStore } from "@/store/favorites"
import { Drink } from "~/models/Drink";

const props = defineProps({
  items: {
    type: Array as () => Drink[],
    required: true,
    default: () => [],
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const store = useFavoriteStore();

function setFavorite(item: Drink) {
  store.setFavorite(item)
}

function isFavorite(item: Drink) {
  return store.favorites.some((obj: Drink) => obj.idDrink === item.idDrink)
}

</script>

<style scoped lang="scss">
.drink-table {
  background: rgb(var(--v-theme-gray950));
  color: rgb(var(--v-theme-white));
}

.table-row {
  line-height: 1.2rem;

  .img {
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    background-color: rgb(var(--v-theme-violet500), 0.8);
    font-weight: bold;
  }
}
</style>