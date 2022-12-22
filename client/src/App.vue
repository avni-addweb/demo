<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-mail</v-icon>

      <v-icon>mdi-twitter</v-icon>

      <v-icon>mdi-facebook</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <span class="white--text text-h5">AS</span>

        </v-avatar>

        <div>Admin Dashboard</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", link: "/" },
      { text: "Add Books", icon: "mdi-note", link: "/add-book" },
      { text: "About", icon: "mdi-help-box", link: "/about" },
      { text: "Shared with me", icon: "mdi-account-multiple", link: "/shared-with-me" },
      { text: "Recent", icon: "mdi-history", link: "/recent" },
    ],
  }),
};
</script>
