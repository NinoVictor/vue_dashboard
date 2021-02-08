<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="pink" dark v-bind="attrs" v-on="on">Realizar cobro</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Ingresar nuevo cobro</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="['Victor', 'Manuel', 'Antonio', 'Ricardo']"
                  label="Alumno*"
                  :rules="[(v) => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Fecha de cobro"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']"
                  label="Curso*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Inscripción', 'Reinscripción', 'Adeudo', 'Beca']"
                  label="Concepto*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Cantidad"
                  value="10.00"
                  prefix="$"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Total"
                  value="10.00"
                  prefix="$"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Recibido"
                  value="10.00"
                  prefix="$"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Cambio"
                  value="10.00"
                  prefix="$"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*Indica campos requeridos</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dar depressed color="pink" text @click="dialog = false">
          Cerrar
        </v-btn>
        <v-btn dark color="pink" @click="validate"> Guardar </v-btn>
      </v-card-actions>
      <confirm-save
        :title="title"
        :message="message"
        @confirm-save="save"
        ref="confirmComponent"
      ></confirm-save>
    </v-card>
  </v-dialog>
</template>

<script>
import ConfirmSave from "./ConfirmSave.vue";
import Axios from "axios";
const baseUrl = "http://192.168.0.102:3000/api/alumnos/";

export default {
  data: () => ({
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    title: "Guardar Cobro",
    message: "Estás seguro de guardar el cobro?",
    showConfirmation: false,
    valid: true,
  }),
  components: {
    "confirm-save": ConfirmSave,
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("Chido");
        this.$refs.confirmComponent.showConfirm();
      }
    },
    async saveStudent() {
      try {
        var student = {
          nombre: "Victor",
          apellido: "Niño",
          materia: "Programación",
          calificacion: 10,
        };
        const { data } = await Axios.post(baseUrl, student);
        console.log(data);
        return true;
      } catch (error) {
        console.log(error.response + "Error en el server");
        return false;
      }
    },
    async save() {
      console.log("Saving ....");
      var realizado = await this.saveStudent();
      if (realizado) {
        this.dialog = false;
        this.$refs.form.reset();
        this.$emit("show-confirm-message");
      }
    },
  },
};
</script>

<style>
</style>