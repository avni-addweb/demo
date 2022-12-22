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
      <v-col v-else sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit This Book </v-card-title>
          <v-divider></v-divider>
          <v-form
            @submit.prevent="updateForm()"
            ref="form"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="book.title"
              label="Title"
              required
              prepend-icon="mdi-note"
            ></v-text-field>
            <v-text-field
              v-model="book.category"
              label="Category"
              required
              prepend-icon="mdi-view-list"
            ></v-text-field>
            <v-textarea
              v-model="book.content"
              label="Content"
              required
              prepend-icon="mdi-note-plus"
            ></v-textarea>
            <v-file-input
              @change="selectFile"
              show-size
              counter
              multiple
              label="Select Image"
            ></v-file-input>
            <v-img :src="`/${book.image}`" height="120px" width="200px"></v-img>

            <v-btn type="submit" class="mt-3 white--text" color="#0F52BA">
              Update Book
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
import GridLoader from "vue-spinner/src/GridLoader.vue";

export default {
  name:'EditBook',
  components: {
    GridLoader,
  },
  data() {
    return {
      book: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: " ",
      color: "#1976d2",
      size: "30px",
    };
  },
  async created() {
    const response = await API.getBookById(this.$route.params.id);
    this.book = response;
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.book.title);
      formData.append("category", this.book.category);
      formData.append("content", this.book.content);
      formData.append("old_image", this.book.image);

      if (this.$refs.form.validate()) {
        const response = await API.updateBook(this.$route.params.id, formData);
        this.$router.push({
          name: "home",
          params: { message: response.message },
        });
      }
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
