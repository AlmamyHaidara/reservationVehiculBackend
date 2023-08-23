<template>
  <div class="">
    <topBarComponentVue />
    <div class="flex">
      <sidBarComponent class="float-left ml-5" />
      <centerComponent class="float-right" :vehicules="vehicules" />
    </div>
    <!-- <h1>ResevationViews</h1> -->
  </div>
</template>

<script lang="ts">
import topBarComponentVue from "@/components/reservation-components/topBarComponent.vue";
import sidBarComponent from "@/components/reservation-components/sidBarComponent.vue";
import centerComponent from "@/components/reservation-components/centerComponent.vue";
import { defineComponent, ref } from "vue";
import Sidebar from "primevue/sidebar";

export default defineComponent({
  components: {
    topBarComponentVue,
    sidBarComponent,
    centerComponent
  },
  data() {
    return {
      vehicules: ref()
    }
  },
  async created() {
    const serializedVehicles = this.$route.query.data
    serializedVehicles ? this.vehicules = await JSON.parse(serializedVehicles.toString()).vehicules : console.log('Aucun tableau de véhicules trouvé.');
    console.table(this.vehicules[0])
  }
})
</script>

<style></style>