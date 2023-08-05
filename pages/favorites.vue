<template>
  <v-container class="content">
    <div class="d-flex align-center">
      <v-btn size="small" icon @click.stop="router.back()" color="transparent">
        <v-icon color="violet500" size="28">mdi-chevron-left</v-icon>
      </v-btn>
      <h1 class="title">Favorites</h1>
    </div>
    <div class="fav-grid">
      <FavoriteItem v-for="(item, i) in store.favorites" :key="i" :item="item" @open="getDringById" />
    </div>
    <DrinkModal v-model="detailsDialog" :item="drinkDetails" @close="detailsDialog = false" />
  </v-container>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, Router } from 'vue-router';
import { useFavoriteStore } from "@/store/favorites"
import { DrinkDetails } from '~/models/DrinkDetails';
import { Drink } from '~/models/Drink';

const store = useFavoriteStore();

const router: Router = useRouter();

let drinkDetails = ref<DrinkDetails>({ idDrink: '', strDrink: '', strDrinkThumb: '', strImageAttribution: '', strInstructions: '', strCategory: '' })
let detailsDialog = ref(false)

async function getDringById(item: Drink) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item.idDrink}`);
    const data = await response.json();
    drinkDetails.value = data.drinks[0]
    detailsDialog.value = true
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped lang="scss">
.content {
  margin-top: 80px;
  height: calc(100vh - 80px);

  .title {
    font-size: 2rem;
    font-weight: normal;
  }
}

.fav-grid {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

</style>