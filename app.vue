<template>
  <v-app class="app" theme="defaultTheme">
    <AppBar />
    <NuxtPage />
  </v-app>
</template>


<style scoped lang="scss">
.app {
  background: rgb(var(--v-theme-gray900));
  color: rgb(var(--v-theme-white));
  margin: 80px 0 0 0;
}
</style>