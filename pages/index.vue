<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <SearchInput v-model="search"/>
            </v-col>
            <v-col cols="6">
                <SelectCat v-model="categories" />
            </v-col>
        </v-row>
        <h1>{{search}}</h1>
        <h1>{{categories}}</h1>
    </v-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const search = ref('')
const categories = ref([])



</script>

<style scoped lang="scss">

</style>