<template>
    <v-container class="content">
        <v-row>
            <v-col cols="12" sm="12" md="6">
                <SearchInput v-model="search"/>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <SelectCat @input="onSelectedCategorie($event)" />
            </v-col>
        </v-row>
        <v-row class="drink-table-row">
            <v-col cols="12">
                <DrinkTable v-if="drinks.length > 0" :items="drinks" />
            </v-col>
         </v-row>
    </v-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Drink {
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String,
}

const search = ref('')
const drinks = ref<Drink[]>([])
let loading = ref(false)

function onSelectedCategorie(categorie: String) {
    getDrinksByCategorie(categorie)
}

async function getDrinksByCategorie(categorie: String) {
    if (categorie) {
        try {
            loading.value = true
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`);
            const data = await response.json();
            drinks.value = data.drinks
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false
        }
        return
    }
    drinks.value = []
    return
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}
.drink-table-row {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
