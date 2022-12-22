<template>
  <v-container>
    <v-row no-gutters>
      <div v-if="Object.keys(book).length === '0'" class="main_contanier">
        <grid-loader
          :loading="loading"
          :color="color"
          :size="size"
          margin="10px"
        ></grid-loader>
      </div>
      <v-col v-else sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <v-img :src="`/${book.image}`" height="600px" contain></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn small outlined color="primary" text>
                  {{ book.category }}
                </v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn
                  color="success"
                  text
                  :to="{ name: 'edit-book', params: { id: book._id } }"
                  >Edit</v-btn
                >
                <v-btn color="red" text @click="removeBook(book._id)"
                  >Delete</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-subtitle style="font-weight: bold"
            >{{ book.title }}
          </v-card-subtitle>
          <v-card-text class="grey--text">
            <p>{{ book.content }}</p>
            <p>{{ book.created }}</p>
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
  name:'Book',
  components: {
    GridLoader,
  },
  data() {
    return {
      book: {},
      color: "#1976d2",
      size: "30px",
    };
  },
  async created() {
    const response = await API.getBookById(this.$route.params.id);
    this.book = response;
    console.log(this.book, "book");
  },
  methods: {
    async removeBook(id) {
      const response = await API.deleteBook(id);
      this.$router.push({
        name: "home",
        params: { message: response.message },
      });
    },
  },
};
</script>

<style scoped>
.main_contanier {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
