<template>
  <div class="">
    <topBarComponentVue />
    <sidBarComponent class="float-left ml-5" />
    <!-- <h1>ResevationViews</h1> -->
  </div>
</template>

<script lang="ts">
import topBarComponentVue from "@/components/reservation-components/topBarComponent.vue";
import sidBarComponent from "@/components/reservation-components/sidBarComponent.vue";
import { defineComponent } from "vue";
import Sidebar from "primevue/sidebar";

export default defineComponent({
  components: {
    topBarComponentVue,
    sidBarComponent
  }

})
</script>

<style></style>