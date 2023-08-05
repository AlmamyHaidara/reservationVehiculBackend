<template>
  <div class="h-72">
    <l-map :zoom="zoom" :center="center" class="border border-gray-500 rounded-md overflow-hidden z-40">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>
      <l-marker :lat-lng="userLocation" v-if="userLocation">
        <l-popup>Votre position</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 13,
      center: ref([12.6542, -7.9989]),
      userLocation: null,
    };
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    getUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.userLocation = [latitude, longitude];
            this.center = [latitude, longitude];
            console.log("latitude, longitude]", this.center);
          },
          (error) => {
            alert("Erreur lors de la géolocalisation");
          }
        );
      } else {
        alert("Géolocalisation indisponible");
      }
    },
  },
};
</script>

<style>
/* styles here */
</style>
