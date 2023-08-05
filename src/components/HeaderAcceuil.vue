<template>
  <div class="w-full">
    <InputGroupComponent @flash-msg="flashMessage($event)" />
    <Section1Component />
    <Section2Components />
    <Section3Components />
    <FooterComponent />
    <!-- <mapComponent /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroupComponent from "./InputGroupComponent.vue";
import Section1Component from "./Section1Component.vue";
import Section2Components from "@/components/Section2Component.vue";
import Section3Components from "@/components/Section3Components.vue";
import FooterComponent from "./FooterComponent.vue";
// import mapComponent from "@/components/mapComponent.vue";
export default defineComponent({
  name: "HeaderAcceuil",
  components: {
    InputGroupComponent,
    Section1Component,
    Section2Components,
    Section3Components,
    FooterComponent,
    // mapComponent,
  },
  emits: ["flash-msg"],
  data() {
    return {};
  },
  methods: {
    flashMessage(flash: null) {
      this.$emit("flash-msg", flash);
    },
  },
});
</script>

<style lang="scss">
.overlay {
  div {
    h1 {
      font-family: "Press Start 2P", cursive;
    }
  }
}

.p-calendar {
  .p-button {
    background: #2c3e50 !important;
    border: #2c3e50;
  }
}

.l-map {
  @apply h-96 w-96 border border-gray-500 rounded-md overflow-hidden;
}

.section1 {
  div {
    h4 {
      color: #55415d;
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  color: black !important;
}

.p-card-title {
  color: #727272;
  margin-top: -10px;
}

.swiper-pagination-bullet {
  background: #2c3e50 !important;
}
</style>
