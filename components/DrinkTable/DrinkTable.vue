<template>
    <v-table class="drink-table">
    <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-right">
                    Favorite
                </th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="(item, i) in items" :key="i" class="table-row">
            <td class="d-flex align-center" >
                <img class="img" width="36" height="36" :src="item.strDrinkThumb" :alt="item.strDrink">
                <span class="pl-2">
                    {{ item.strDrink }}
                </span>
            </td>
            <td class="text-right">
                <v-icon size="18" color="gray800">mdi-star</v-icon>
            </td>
         </tr>
    </tbody>
  </v-table>

</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>

<style scoped lang="scss">
.drink-table {
    background: rgb(var(--v-theme-gray950));
    color: rgb(var(--v-theme-white));
}
.table-row{
    .img{
        border-radius: 50%;
    }

    &:hover{
        cursor: pointer;
        background-color: rgb(var(--v-theme-violet500), 0.8);
        font-weight: bold;
    }
}
</style>