<template>
  <v-select
    clearable
    label="Select Category"
    :items="items"
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
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>
