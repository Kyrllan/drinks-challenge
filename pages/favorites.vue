<template>
  <v-container class="content">
    <div class="d-flex align-center">
      <v-btn size="small" icon @click.stop="router.back()" color="transparent">
        <v-icon color="violet500" size="28">mdi-chevron-left</v-icon>
      </v-btn>
      <span class="title">Favorites</span>
    </div>
    <div class="fav-grid">
      <FavoriteItem
        v-for="(item, i) in store.favorites"
        :key="i"
        :item="item"
        @open="getDringById"
        @remove="removeFavorite"
      />
    </div>
    <DrinkModal
      v-model="detailsDialog"
      :item="drinkDetails"
      @close="detailsDialog = false"
    />
  </v-container>
</template>


<script setup lang="ts">
import { ref } from "vue";
import { useRouter, Router } from "vue-router";
import { useFavoriteStore } from "@/store/favorites";
import { DrinkDetails } from "~/models/DrinkDetails";
import { Drink } from "~/models/Drink";
import { baseUrl } from "@/constants/constants";

const store = useFavoriteStore(); //instancia da store onde contem os favoritos armazenados

const router: Router = useRouter(); //instancia do router 

const snackbar = useSnackbar(); //Plugin de snackbar utilizado pra apresentar alertas na aplicação.

let drinkDetails = ref<DrinkDetails>({
  idDrink: "",
  strDrink: "",
  strDrinkThumb: "",
  strImageAttribution: "",
  strInstructions: "",
  strCategory: "",
});
let detailsDialog = ref(false);

// método que busca da api os detalhes do drink selecionado e apesenta no modal
async function getDringById(item: Drink) {
  try {
    const response = await fetch(`${baseUrl}/lookup.php?i=${item.idDrink}`);
    const data = await response.json();
    drinkDetails.value = data.drinks[0];
    detailsDialog.value = true;
  } catch (error: any) {
    snackbar.add({ type: "error", text: error.message });
  }
}

// método que remove o favorito da store
function removeFavorite(item: Drink) {
  store.setFavorite(item)
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 80px;
  height: calc(100vh - 80px);

  .title {
    font-size: 1.35rem;
    font-weight: normal;
  }
}

.fav-grid {
  padding-top: 1rem;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>