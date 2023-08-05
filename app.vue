<template>
  <v-app class="app" theme="defaultTheme">
    <AppBar />
    <NuxtPage />
    <NuxtSnackbar />
  </v-app>
</template>


<style scoped lang="scss">
.app {
  background: rgb(var(--v-theme-gray950));
  color: rgb(var(--v-theme-white));
}
</style>