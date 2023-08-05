<template>
  <div class="acceuil">
    <HeaderAcceuil @flash-msg="getFlash($event)" />
    <Message severity="error" v-if="msg != null" class="absolute right-5 top-16 z-50">{{
      msg
    }}</Message>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderAcceuil from "@/components/HeaderAcceuil.vue";
export default defineComponent({
  name: "AcceuilView",
  components: {
    HeaderAcceuil,
  },
  data() {
    return {
      msg: null,
    };
  },
  methods: {
    getFlash(msg: null): void {
      this.msg = msg;
    },
  },
  watch: {
    msg: function (msg) {
      if (msg != null) {
        setTimeout(() => {
          this.msg = null;
        }, 3000);
      }
    },
  },
  async mounted() {},
});
</script>

<style lang="scss"></style>
