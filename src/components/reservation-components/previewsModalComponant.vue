<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0  bg-black backdrop-blur-sm bg-opacity-75 transition-opacity"> </div>

        <div class="fixed inset-0  overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <!-- class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-full lg:w-full   sm:max-w-lg"> -->
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-5xl ">
                    <button class="text-bold text-2xl float-right p-1 pl-3 pr-3 bg-red-500  rounded-bl-lg"
                        @click="hiddenModal()">X</button>
                    <!-- Modal start -->
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-w-5xl ">
                        <vehiclesFeatures :vehicules="selectVehicle" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vehiclesFeatures from "./vehiclesFeatures.vue";
import store from "@/store";
export default defineComponent({
    components: {
        vehiclesFeatures
    }, emits: ['toogle'],
    props: ['selectVehicle'],
    data() {
        return {
            store
        }
    },
    methods: {
        hiddenModal() {
            this.$emit('toogle', false)
        }
    },


})
</script>

<style lang="scss"></style>