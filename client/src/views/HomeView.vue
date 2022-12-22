<template>
  <v-container>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="#0F52BA"
      dark
      dismissible
      v-if="this.$route.params.message"
      >{{ this.$route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <div v-if="books.length === '0'" class="main_contanier">
        <grid-loader
          :loading="loading"
          :color="color"
          :size="size"
          margin="10px"
        ></grid-loader>
      </div>

      <v-col v-else sm="4" class="pa-3" v-for="book in books" :key="book._id">
        <v-card
          class="mx-auto fill-height main_card"
          :to="{ name: 'book', params: { id: book._id } }"
        >
          <v-img :src="`/${book.image}`" height="300px" contain></v-img>
          <v-btn small outlined class="ml-4 mt-3" color="blue lighten-2" text>
            {{ book.category }}
          </v-btn>

          <v-card-title> {{ book.title }} </v-card-title>
          <v-card-text class="py-0">
            <p>{{ book.content.substring(0, 100) + "..." }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
import GridLoader from "vue-spinner/src/GridLoader.vue";
export default {
  name: "Home",
  components: {
    GridLoader,
  },
  data() {
    return {
      books: [],
      color: "#1976d2",
      size: "30px",
    };
  },
  async created() {
    this.books = await API.getAllBook();
    console.log(this.books, "book");
  },
};
</script>

<style scoped>
.main_card:hover {
  cursor: pointer;
  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
.main_contanier{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
