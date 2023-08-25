<template>
  <div class="">
    <topBarComponentVue />
    <div class="flex">
      <sidBarComponent class="float-left ml-5" />
      <centerComponent class="float-right" :vehicules="vehicules" />
    </div>
  </div>
</template>

<script lang="ts">
import topBarComponentVue from "@/components/reservation-components/topBarComponent.vue";
import sidBarComponent from "@/components/reservation-components/sidBarComponent.vue";
import centerComponent from "@/components/reservation-components/centerComponent.vue";
import { defineComponent, ref } from "vue";
import store from '@/store/index'
import router from "@/router";

export default defineComponent({
  components: {
    topBarComponentVue,
    sidBarComponent,
    centerComponent
  },
  data() {
    return {
      vehicules: ref(),
      store
    }
  },
  async created() {
    const serializedVehicles = this.$route.query.data
    serializedVehicles ? this.vehicules = await JSON.parse(serializedVehicles.toString()).vehicules : console.log('Aucun tableau de véhicules trouvé.');
    this.store.commit('vehicules', this.vehicules);
    router.push('/vehicules/reservation')
  }
})
</script>

<style></style>