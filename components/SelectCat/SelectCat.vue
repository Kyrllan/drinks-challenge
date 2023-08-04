<template>
    <v-select
    clearable
    label="Select Category"
    :items="drinkCategories"
    variant="outlined"
    density="compact"
    color="violet500"
    item-title="strCategory"
    no-data-text="Nenhuma categoria disponível"
    @update:modelValue="$emit('input', $event)"
    hide-details
    >
    </v-select>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

interface Category {
    strCategory: string;
}

let drinkCategories = ref<Category[]>([])

async function getCategories() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    drinkCategories.value = data.drinks
}

onMounted(async () => {
    await getCategories();
})
</script>