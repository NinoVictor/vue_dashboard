<template>
  <v-app>
    <v-row no-gutters class="ma-0 pa-0">
      <v-col cols="6" class="pa-0 d-none d-sm-flex">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          height="100%"
        >
        </v-img>
      </v-col>
      <v-col :cols="cols">
        <v-container class="pa-12">
          <v-row class="d-flex justify-center ma-0 pa-0" max-height="150">
            <v-img
              max-width="150"
              max-height="150"
              src="https://es.freelogodesign.org/Content/img/logo-samples/flooop.png"
            />
          </v-row>
          <h2>Portal de cobros</h2>
          <p>Por favor escribe tu usuario y contraseña</p>
          <v-container class="pa-5">
            <v-form ref="form" lazy-validation>
              <v-text-field label="Usuario"></v-text-field>
              <v-text-field
                type="password"
                label="Password"
                append-icon="mdi-eye-off"
              >
              </v-text-field>
            </v-form>
          </v-container>
          <v-row class="d-flex justify-center ma-0">
            <v-btn class="primary" @click="goToHome">Iniciar sesion</v-btn>
          </v-row>
          <v-row class="d-flex justify-center mt-11">
            <strong>Powered by Hightek</strong>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    cols() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return 12;
      } else {
        return 6;
      }
    },
  },
};
</script>

<style>
</style>