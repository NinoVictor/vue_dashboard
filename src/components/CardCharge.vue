<template>
  <v-container fluid>
    <v-card>
      <v-card-title> <strong>14 de enero de 2021</strong> </v-card-title>
      <v-container
        :class="[
          !isMobile ? 'd-inline-flex justify-start md-5' : 'd-flex flex-column',
        ]"
      >
        <v-text-field
          dense
          label="Alumno"
          prepend-icon="mdi-magnify"
        ></v-text-field>
        <v-text-field
          dense
          label="Fecha"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
        <v-text-field
          dense
          label="Curso"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
        <v-spacer></v-spacer>
        <ModalCreateCharge
          @show-confirm-message="showConfirmMessage"
        ></ModalCreateCharge>
      </v-container>
      <v-container>
        <v-data-table :headers="headers" :items="students"></v-data-table>
      </v-container>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<script>
import ModalCreateCharge from "../components/ModalCreateCharge";
import Axios from "axios";
const baseUrl = "http://192.168.0.102:3000/api/alumnos/";

export default {
  name: "CardCharge",
  components: {
    ModalCreateCharge,
  },
  data: () => ({
    headers: [
      {
        text: "Folio de cobro",
        value: "id",
      },
      { text: "Alumno", value: "nombre" },
      { text: "Semana" },
      { text: "Curso", value: "materia" },
      { text: "Concepto" },
      { text: "Cantidad", value: "calificacion" },
      { text: "Total" },
    ],
    students: [],
    snackbar: false,
    text: "Cobro registrado con éxito",
    timeout: 4000,
  }),
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      try {
        const { data } = await Axios.get(baseUrl);
        this.students = data;
      } catch (error) {
        console.log(error.response);
      }
    },
    showConfirmMessage() {
      this.snackbar = true;
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

<style>
</style>