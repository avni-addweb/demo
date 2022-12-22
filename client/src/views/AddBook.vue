<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Book </v-card-title>
          <v-divider></v-divider>
          <v-form
            @submit.prevent="submitForm()"
            ref="form"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="book.title"
              label="Title"
              required
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              v-model="book.category"
              label="Category"
              required
              prepend-icon="mdi-view-list"
              :rules="rules"
            ></v-text-field>
            <v-textarea
              v-model="book.content"
              label="Content"
              required
              prepend-icon="mdi-note-plus"
              :rules="rules"
            ></v-textarea>
            <v-file-input
              @change="selectFile"
              :rules="rules"
              show-size
              counter
              multiple
              label="Select Image"
            ></v-file-input>
            <v-btn type="submit" class="mt-3 white--text" color="#0F52BA"> Add Book </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  name:'AddBook',
  data() {
    return {
      rules: [(value) => !!value || "This is field is required"],
      book: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: " ",
    };
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.book.title);
      formData.append("category", this.book.category);
      formData.append("content", this.book.content);
      if(this.$refs.form.validate()){
        const response=await API.addBook(formData);
        this.$router.push({name:"home",params:{message:response.message}})
      }
    },
  },
};
</script>
