<template>
    <div class="bg-white mx-auto">
        <!-- <h2 class="sr-only ">Products</h2> -->
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
            <div class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-4 mx-2">
                <a href="#" class="group" v-for="vehicule in vehicules" :key="vehicule.id" @click="preveiwsCar(vehicule)">
                    <div
                        class="aspect-h-1 aspect-w-1 w-64 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img :src="vehicule.images[0].paths"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            class="h-full w-72 object-cover object-center group-hover:opacity-75">
                    </div>
                    <h3 class="mt-4 text-sm  text-center text-gray-700 capitalize "><strong>{{ vehicule.marque }}</strong>
                        <br />{{
                            vehicule.model }}
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">{{ Math.round(vehicule.prix) }} FCFA</p>
                    <!-- {{ vehicule.images[0].paths }} -->
                </a>
                <previewsModalComponantVue v-show="toogleModal" @toogle="toogleFunc" :selectVehicle="selectVehicle" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import previewsModalComponantVue from "./previewsModalComponant.vue";

export default defineComponent({
    props: ['vehicules'],
    components: {
        previewsModalComponantVue,
    },
    data() {
        return {
            toogleModal: false,
            selectVehicle: ref([])
        }
    },
    methods: {
        preveiwsCar(vehicle: any) {
            console.log('ok', vehicle);
            this.toogleModal = !this.toogleModal
            this.selectVehicle = vehicle;
        },
        toogleFunc(toogle: any) {
            console.log(toogle);
            this.toogleModal = toogle

        }
    }
})
</script>

<style lang="scss"></style>