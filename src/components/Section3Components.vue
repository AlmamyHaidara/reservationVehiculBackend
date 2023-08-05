<template>
  <div class="section3 w-full mt-24 h-2/3">
    <div
      class="h-96 w-6/12 flex justify-center mr-auto mb-12 ml-auto bg-gray-900 mt-5 border-0"
    >
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: false,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper border-0 bg-gray-100"
      >
        <swiper-slide class="bg-white flex justify-center border-0">
          <img src="../assets//images/mindHumman.svg" alt="" />
          <div
            class="bg-gray-100 h-full w-full border-0 drop-shadow-3xl flex flex-col justify-center items-center"
          >
            <p class="text-start text-2xl font-black text-blue-900">
              A truly seamless experience
            </p>
            <p
              class="text-center leading-relaxed p-3 w-7"
              style="
                color: #727272;
                font-family: 'Press Start 2P', cursive;
                font-family: 'Simonetta', cursive;
              "
            >
              Search, book, and unlock instantly, all from your phone. Ditch the rental
              counter and the waiting.
            </p>
          </div> </swiper-slide
        ><swiper-slide class="bg-white flex justify-center border-0">
          <img src="../assets//images/statistiqueHumman.svg" alt="" />
          <div
            class="bg-gray-100 h-full w-full border-0 drop-shadow-3xl flex flex-col justify-center items-center"
          >
            <p class="text-start text-2xl font-black text-blue-900">
              The freedom of flexibility
            </p>
            <p
              class="text-center leading-relaxed p-3"
              style="
                color: #727272;
                font-family: 'Press Start 2P', cursive;
                font-family: 'Simonetta', cursive;
              "
            >
              Choisissez le type de véhicule qui convient le mieux à votre voyage et
              réservez-le pour les heures (ou les jours) où vous en aurez réellement
              besoin.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-white flex justify-center border-0">
          <img src="../assets//images/momentHumman.svg" alt="" />
          <div
            class="bg-gray-100 h-full w-full border-0 drop-shadow-3xl flex flex-col justify-center items-center"
          >
            <p class="text-start text-2xl font-black text-blue-900">
              Peace of mind by design
            </p>
            <p
              class="text-center leading-relaxed p-3"
              style="
                color: #727272;
                font-family: 'Press Start 2P', cursive;
                font-family: 'Simonetta', cursive;
              "
            >
              Combine trip liability insurance with 24/7 customer service. You shouldn't
              have to stress if something doesn't go according to plan.
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
export default defineComponent({
  name: "Section2Component",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation, FreeMode],
    };
  },
});
</script>

<style></style>
