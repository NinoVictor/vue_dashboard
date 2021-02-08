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
          label="Curso"
          prepend-icon="mdi-map-marker"
          class="mr-5"
        ></v-text-field>
        <v-text-field
          dense
          label="Fecha de curso"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
        <v-spacer></v-spacer>
        <modal-create-course
          @show-confirm-message="showConfirmMessage"
        ></modal-create-course>
      </v-container>
      <v-container>
        <v-data-table :headers="headers" :items="students">
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="edit(item)"> mdi-pencil </v-icon>
            <v-icon small> mdi-delete </v-icon>
          </template>
        </v-data-table>
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
import ModalCreateCourse from "../components/ModalCreateCourse";
export default {
  components: {
    "modal-create-course": ModalCreateCourse,
  },
  data: () => ({
    headers: [
      {
        text: "Acciones",
        value: "actions",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Tipo", value: "tipo" },
      { text: "Clave", value: "clave" },
      { text: "Fecha inicio" },
      { text: "Fecha fin", value: "calificacion" },
      { text: "Turno" },
      { text: "Tipo de periodo" },
      { text: "No. de pedidos" },
      { text: "Plantel en el que se imparte" },
    ],
    students: [
      {
        nombre: "Sistemas",
        tipo: "Curso",
        clave: "1224dbs",
      },
    ],
    snackbar: false,
    text: "Cobro registrado con éxito",
    timeout: 4000,
    dialogDelete: false,
  }),
  methods: {
    showConfirmMessage() {
      this.snackbar = true;
    },
    edit(item) {
      console.log(item);
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