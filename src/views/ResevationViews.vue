<template>
  <div class="">
    <topBarComponentVue />
    <div class="flex">
      <sidBarComponent class="float-left ml-5" />
      <centerComponent class="float-right  " />
    </div>
    <!-- <h1>ResevationViews</h1> -->
  </div>
</template>

<script lang="ts">
import topBarComponentVue from "@/components/reservation-components/topBarComponent.vue";
import sidBarComponent from "@/components/reservation-components/sidBarComponent.vue";
import centerComponent from "@/components/reservation-components/centerComponent.vue";
import { defineComponent } from "vue";
import Sidebar from "primevue/sidebar";

export default defineComponent({
  components: {
    topBarComponentVue,
    sidBarComponent,
    centerComponent
  }

})
</script>

<style></style>