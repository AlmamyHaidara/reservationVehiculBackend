<template>
  {{ getUserLocation() }}
  <l-map
    ref="map"
    :zoom="zoom"
    :center="center"
    class="border border-gray-500 rounded-md overflow-hidden z-40 h-9"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
    <l-marker :lat-lng="userLocation" v-if="userLocation">
      <l-popup>Votre position</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { defineComponent } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

import "leaflet/dist/leaflet.css";

export default defineComponent({
  name: "ContainerMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 13,
      center: [12.6392, -8.0029],
      userLocation: null,
    };
  },
  methods: {
    getUserLocation: function () {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log([position.coords.latitude, position.coords.longitude]);
          this.userLocation = [position.coords.latitude, position.coords.longitude];
        });
      }
    },
  },
  mounted() {
    // this.getUserLocation();
  },
});
</script>
