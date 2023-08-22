<template>
    <div class="border-0 h-18 flex justify-center mt-5 first-sect">
        <div class="flex justify-between h-14 w-2/5 mt-2 top-section">

            <div class="border-0 h-12 w-96 bg-slate-50 top-sec-left">
                <h2 class=" mt-2 text-lg">Mali, Bamako, Amdalaye ACI</h2>
            </div>
            <div class="flex md:ml-5 second">

                <div class="h-12 w-44 flex rounded-3xl bg-slate-50 ">
                    <Calendar v-model="date" style="width: 25rem;" />
                    <Calendar v-model="time" :timeOnly="true" style="width: 18rem;" />
                </div>

                <i class="pi pi-arrow-right text-1xl pt-3 pl-2 pr-2"></i>
                <div class=" h-12 w-44 flex rounded-3xl">
                    <Calendar v-model="date" style="width: 25rem;" />
                    <Calendar v-model="time" :timeOnly="true" style="width: 18rem;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    data() {
        return {
            date: ref(new Date()),
            time: ref(
                new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            ),
        }
    }
})
</script>

<style lang="scss">
.p-button {
    background: #ffff !important;
    border: 0px solid #ced4da;

    color: #183462;
}

.p-inputtext {
    border-radius: 0 !important;

}

@media (max-width: 1803px) {
    .top-section {
        margin-left: -2rem;

        .top-sec-left {
            width: 17rem;
        }
    }

    .top-section div {
        margin-right: 1rem;
        width: 9rem;

        h2 {

            font-size: 0.825rem !important;
        }
    }

    .second {
        margin-left: 1rem;
        width: 166px;

        i {
            margin-left: -1rem;
        }

        div {
            .p-inputtext {
                width: 0.5rem !important;
                font-size: 12px;
            }
        }
    }
}

@media (max-width: 801px) {

    .first-sect {
        margin-left: 2rem;

        .top-sec-left {
            width: 24rem;
            margin-bottom: 1rem;
            margin-left: -3rem;
        }

        div {
            flex-direction: column;

        }

        .second {
            flex-direction: row;
            margin-left: -1rem;

            div {
                flex-direction: row;
            }
        }
    }
}

@media (max-width: 565px) {
    .first-sect {
        margin-left: -3rem;
    }
}
</style>