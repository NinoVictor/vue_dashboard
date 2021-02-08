<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text> {{ message }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dar depressed color="pink" text @click="dialog = false">
          Cancalar
        </v-btn>
        <v-btn dark color="pink" @click="confirm"> Confirmar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CofirmSave",
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    showConfirm() {
      this.dialog = true;
    },
    confirm() {
      this.$emit("confirm-save");
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>