<template>
  <v-dialog persistent :width="mobile ? '100%' : 'auto'" :fullscreen="mobile">
    <v-card class="card-details">
      <v-btn class="close-btn" @click.stop="$emit('close')" icon color="violet500">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="card-content">
        <div class="card-img">
          <img class="drink-img" :src="item.strDrinkThumb" :alt="item.strImageAttribution">
          <!--           <v-btn class="fav-btn" @click.stop="$emit('close')">
            <v-icon size="50">mdi-star</v-icon>
          </v-btn> -->
        </div>

        <h2>{{ item.strDrink }}</h2>
        <span>{{ item.strCategory }}</span>

        <p>{{ item.strInstructions }}</p>
      </div>
      <v-card-text class="pa-0 ma-0 d-flex flex-column align-center">
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: [],
  },
});

const { mobile } = useDisplay()

</script>

<style scoped lang="scss">
.card-details {
  border-radius: 20px !important;
  position: relative;
  padding: 0;
  margin: 0;

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }

  .card-img {
    position: relative;
    z-index: 1;

    .drink-img {
      width: 400px;
      height: 400px;
    }

    /* 

    .fav-btn {
      position: relative;
      bottom: 0;
      z-index: 9999999;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      color: red;
    } */
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }



  span {
    max-width: 400px;
    font-size: 0.8rem;
    font-weight: 500;
    font-style: normal;
  }

  h2 {
    max-width: 360px;
    padding-top: 1rem;
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: bold;
    text-align: center;
  }

  p {
    padding: 1rem 0 2rem;
    max-width: 360px;
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
    line-height: 1.1rem;
  }

}

@media screen and (max-width: 660px) {
  .card-details {
    border-radius: 0 !important;

    .card-img {
      position: relative;
      z-index: 1;

      .drink-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}</style>