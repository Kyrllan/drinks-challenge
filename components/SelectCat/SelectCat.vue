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
import { ref, onMounted } from "vue";
import { Category } from "@/models/Category";
import { baseUrl } from "@/constants/constants";

let drinkCategories = ref<Category[]>([]);
const snackbar = useSnackbar();

async function getCategories() {
  try {
    const response = await fetch(`${baseUrl}/list.php?c=list`);
    const data = await response.json();
    drinkCategories.value = data.drinks;
  } catch (error: any) {
    snackbar.add({ type: "error", text: error.message });
  }
}

onMounted(async () => {
  await getCategories();
});
</script>
