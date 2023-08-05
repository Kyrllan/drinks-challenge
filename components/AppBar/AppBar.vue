<template>
    <v-app-bar height="80" color="gray900" elevation="0">
        <v-container class="d-flex align-center">
            <span @click="router.push('/')" class="title">Drink Challenge</span>
            <v-spacer></v-spacer>
            <v-tooltip>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props" @click="router.push('/favorites')">
                        <v-icon color="amber500" size="36">mdi-star-face</v-icon>
                    </v-btn>
                    <v-badge 
                        v-show="store.favorites.length > 0"
                        color="violet500" 
                        :content="store.favorites.length" 
                        stacked 
                        offset-x="8"
                        offset-y="12"
                        >
                    </v-badge>
                </template>
                <span class="tooltip-text">Favorites</span>
            </v-tooltip>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter, Router } from 'vue-router';
import { useFavoriteStore } from "@/store/favorites"

const store = useFavoriteStore();

const router: Router = useRouter();

</script>


<style scoped lang="scss">
.title {
    font-family: 'Sail';
    font-size: 2.5rem;
    cursor: pointer;
}

.tooltip-text {
    color: rgb(var(--v-theme-white));
}
</style>