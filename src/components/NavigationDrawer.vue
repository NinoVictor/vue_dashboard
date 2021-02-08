<template>
  <nav>
    <v-toolbar flat class="d-flex d-sm-none">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      :permanent="!isMobile"
      :expand-on-hover="!isMobile"
      class="pink"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item.to)"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <template v-slot:append>
        <div class="pa-2">
          <v-list-item link @click="goTo('Login')">
            <v-list-item-icon>
              <v-icon class="white--text">mdi-exit-to-app</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text"
                >Cerrar sesión</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data: () => ({
    items: [
      { title: "Cobro", icon: "mdi-gavel", to: "home" },
      { title: "Cursos", icon: "mdi-school", to: "cursos" },
      { title: "Planteles", icon: "mdi-domain", to: "" },
    ],
    drawer: false,
  }),
  methods: {
    goTo(place) {
      this.$router.push({ name: place }).catch(() => {});
    },
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
