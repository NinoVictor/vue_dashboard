<template>
  <v-container>
    <CardCharge> </CardCharge>
    <CardCharge> </CardCharge>
  </v-container>
</template>

<script>
import CardCharge from "../components/CardCharge";
import Repository from "../repositories/RepositoryFactory";
const AlumnosRepository = Repository.get("alumnos");

export default {
  components: {
    CardCharge,
  },
  methods: {
    getAlumnos: async function() {
      try {
        const { data } = await AlumnosRepository.get();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
