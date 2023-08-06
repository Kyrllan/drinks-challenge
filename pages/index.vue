<template>
  <v-container class="content">
    <div class="content-inputs">
      <SearchInput class="content-input" v-model="search" />
      <SelectCat class="content-input" :items="drinkCategories" @input="onSelectedCategorie($event)" />
    </div>
    <div class="content-table">
      <DrinkTable
        v-if="drinks.length > 0"
        :items="searchedDrinks"
        :loading="loading"
        @input="getDringById"
        @setFavorite="setFavorite"
      />
      <div v-else class="select-category-alert">
        <v-icon>mdi-alert-circle-outline</v-icon>
        <span class="pl-2">No category selected</span>
      </div>
    </div>
    <DrinkModal
      v-model="detailsDialog"
      :item="drinkDetails"
      @close="detailsDialog = false"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted} from "vue";
import { baseUrl } from "@/constants/constants";
import { Drink } from "@/models/Drink";
import { DrinkDetails } from "@/models/DrinkDetails";
import { Category } from "@/models/Category";
import { useFavoriteStore } from "@/store/favorites"

const search = ref("");
const drinks = ref<Drink[]>([]);
let drinkDetails = ref<DrinkDetails>({
  idDrink: "",
  strDrink: "",
  strDrinkThumb: "",
  strImageAttribution: "",
  strInstructions: "",
  strCategory: "",
});
let drinkCategories = ref<Category[]>([]);
let loading = ref(false);
let detailsDialog = ref(false);

const store = useFavoriteStore(); //instancia da store onde contem os favoritos armazenados

const snackbar = useSnackbar(); //plugin de snackbar utilizado pra apresentar alertas na aplicação.

// dado computado que retorna somente os drinks pesquisados no campo de busca.
const searchedDrinks = computed(() => {
  if (search.value) {
    return drinks.value.filter((drink: Drink) => {
      return drink.strDrink.toLowerCase().includes(search.value.toLowerCase());
    });
  }
  return drinks.value;
});

// ao selecionar uma categoria no componente SelectCat é disparado o método getDrinksByCategorie
function onSelectedCategorie(categorie: string) {
  getDrinksByCategorie(categorie);
}

// método que busca da api a lista dos drinks pela categoria selecionada.
async function getDrinksByCategorie(categorie: string) {
  if (categorie) {
    try {
      loading.value = true;
      const response = await fetch(`${baseUrl}/filter.php?c=${categorie}`);
      const data = await response.json();
      drinks.value = data.drinks;
    } catch (error: any) {
      snackbar.add({ type: "error", text: error.message });
    } finally {
      loading.value = false;
    }
    return;
  }
  drinks.value = [];
  return;
}

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

// método que gerencia os favoritos
function setFavorite(item: Drink) {
  store.setFavorite(item)
}

// método que busca a lista de categorias da api
async function getCategories() {
  try {
    const response = await fetch(`${baseUrl}/list.php?c=list`);
    const data = await response.json();
    drinkCategories.value = data.drinks;
  } catch (error: any) {
    snackbar.add({ type: "error", text: error.message });
  }
}

// hook que dispara o metodo getCategories() ao montar a tela
onMounted(async () => {
  await getCategories();
});

</script>

<style scoped lang="scss">
.content {
  margin-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  .content-inputs {
    display: flex;

    .content-input {
      padding: 0 0.3rem;
      width: 100%;
    }
  }

  .content-table {
    margin-top: 1rem;
    overflow-y: auto;

    .select-category-alert {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 3rem;
      border-radius: 8px;
      margin: 0.3rem;
      background: rgb(var(--v-theme-gray300), 0.4);
    }
  }
}

@media screen and (max-width: 660px) {
  .content-inputs {
    display: flex;
    flex-direction: column;

    .content-input {
      margin: 0.4rem 0;
      width: 100%;
    }
  }
}
</style>
