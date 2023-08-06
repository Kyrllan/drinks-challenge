<template>
  <div class="fav-content" @click="$emit('open', item)">
    <div class="d-flex align-center">
      <img class="img" width="80" height="80" :src="item.strDrinkThumb" :alt="item.strDrink">
      <span class="pl-2">
        {{ item.strDrink }}
      </span>
    </div>
    <v-btn class="fav-btn" @click.stop="$emit('remove', item)" icon color="violet500" flat>
      <v-icon size="18" >mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { Drink } from "../../models/Drink";

const props = defineProps({
  item: {
    type: Object as () => Drink,
    required: true,
    default: () => { },
  },
});

</script>

<style scoped lang="scss">
.fav-content {
  position: relative;
  border-radius: 8px;
  background-color: rgb(var(--v-theme-gray800));
  height: 80px;

  &:hover{
    background-color: rgb(var(--v-theme-violet500), 0.5);
    cursor: pointer;

    img {
      -webkit-filter: blur(1px);
      filter: blur(1px);
    }
    
    span {  
      color: rgb(var(--v-theme-white));
    }
  }

  .img{
    border-radius: 8px 0 0 8px;
  }

  span {
    margin-left: 0.2rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: rgb(var(--v-theme-white), 0.7);
  }

  .fav-btn{
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
  }
}

</style>