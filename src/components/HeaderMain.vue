<template>
  <v-container fluid justify-center>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row no-gutters justify="center" align="center">
            <v-col md="auto">
              <v-img
                class="ma-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                width="50"
              ></v-img>
            </v-col>
            <v-col md="8">
              <v-card-title
                :class="[isMobile ? 'text-sm-body-2' : 'headline']"
                class="d-flex justify-center"
                >Portal de cobros</v-card-title
              >
            </v-col>
            <v-col md="auto">
              <v-card-text :class="[isMobile ? 'text-sm-body-2' : 'text-lg-h6']"
                >Victor Niño</v-card-text
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderMain",
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
