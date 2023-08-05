<template>
  <v-container class="content">
    <client-only>
      <Vue3Lottie :animation-data="DrinkJSON" :height="300" :width="300" />
    </client-only>
    <span class="not-found">404</span>
    <h1>Page not found</h1>
    <span class="text">The Page you are looking for doesn't exist or an other error occurred.</span>
    <div class="back" @click.stop="router.push('/')">
      <v-icon color="violet500" size="28">mdi-chevron-left</v-icon>
      <span>Go home</span>
    </div>
  </v-container>
</template>

<script setup>
import DrinkJSON from '/assets/animation.json'
import { useRouter } from 'vue-router';
const router = useRouter();
</script>


<style scoped lang="scss">
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  .not-found {
    font-size: 4rem;
    padding-top: 2rem;
  }

  .text {
    padding-top: 1rem;
    text-align: center;
  }

  .back {
    padding-top: 1rem;
    color: rgb(var(--v-theme-violet500));
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
  }
}
</style> 

