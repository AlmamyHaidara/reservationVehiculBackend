<template>
    <div class="">
        <div class="border-1 rounded-md shadow-sm h-11/12 w-80 inline-block">
            <h1 class="text-base font-bold text-gray-500 text-left mt-2 mb-2 pl-3">MODE DE LOCATION</h1>
            <div class=" card border-1 rounded-md h-11/12 w-72 ml-3  mb-2 flex  border-2  border-gray-500 hover:border-blue-900  hover:ease-in-out  duration-300 cursor-pointer"
                :class="{ 'bg-blue-900 active': clicked }" @click="handleClick">

                <div class="icon-box rounded-full bg-blue-900 w-6 h-12 mt-4 ml-2 mb-2 ">
                    <!-- <i class="pi pi-inbox text-white font-bold mt-2 pt-1 text-xl"></i> -->

                    <i class="text-white font-bold   mt-2 pt-1 text-xl">
                        <svg viewBox="-12 -12 50 50" xmlns="http://www.w3.org/2000/svg"
                            class="fill-current stroke-current h-full w-full">
                            <path
                                d="M9.754 4.509c-.468 0-.468 0-.682.214l-.643.643c-.215.214-.322.321-.322.428 0 .107.107.214.322.429l.856.856.857-.857.857.857.877-.876.856.857.838-.838.857.857.426-.002c.43 1.287 1.93 1.93 4.5 1.93 1.286 0 2.357-.643 2.357-3.213 0-2.57-1.071-3.213-2.358-3.215-2.57-.003-4.069.644-4.497 1.93H9.754ZM20.78 5.74a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0ZM2 20.91h2.763V10H2v10.91Zm18.895-4.96h-6.407a6 6 0 0 1-1.875-.3l-1.287-.424.348-.932c1.226.44 2.518.665 3.82.665h1c.685 0 1.243-.526 1.243-1.17 0-.486-.326-.923-.81-1.101L9.283 10H6.421v8.945l4.955 1.856a8 8 0 0 0 6.283-.288L23 17.933c-.01-1.09-.937-1.983-2.105-1.983Z">
                            </path>
                        </svg>
                    </i>


                </div>
                <div class="block">
                    <p class="text-base font-bold text-blue-900  mt-2 ml-0 mb-1 mr-6 ">Sur rendez-vous</p>
                    <p class="text-blue-900 text-left ml-2 text-xs line-clamp-3 mb-1">Lorem ipsum dolor, sit amet
                        consectetur
                        adipisicing
                        elit. Ab, est sunt dolorem cupiditate ad suscipit explicabo non excepturi,
                        elit.
                    </p>
                </div>
            </div>
            <div class=" card border-1 rounded-md h-11/12 w-72 ml-3  mb-2 flex border-2  border-gray-500 hover:border-blue-900 hover:ease-in-out  duration-300 cursor-pointer"
                :class="{ 'bg-blue-900 text-white active': clicked1 }" @click="handleClick1">

                <div class="icon-box rounded-full bg-blue-900 w-6 h-12 mt-4 ml-2 mb-2 ">
                    <i class="pi pi-map-marker text-white font-bold mt-2 pt-1 text-xl"></i>
                </div>
                <div class="block">
                    <p class="text-base font-bold text-blue-900  mt-2 ml-0 mb-1 mr-6 ">Au parking</p>
                    <p class="text-blue-900 text-left ml-2 text-xs line-clamp-3 mb-1">Lorem ipsum dolor, sit amet
                        consectetur
                        adipisicing
                        elit. Ab, est sunt dolorem cupiditate ad suscipit explicabo non excepturi,
                        elit.
                    </p>
                </div>
            </div>

            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-3 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-11/12">
                <p class="text-base font-bold text-gray-500 text-left">
                    Prix total
                </p>
                <div class="card flex justify-content-center">
                    <div class="w-72">
                        <InputNumber class="w-full border-0 " v-model="price" inputId="horizontal-buttons" showButtons
                            buttonLayout="horizontal" :step="20000" decrementButtonClass="p-button-danger"
                            incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus" mode="currency" currency="XAF" />
                    </div>
                </div>
            </div>

            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-5 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-11/12">
                <p class="text-base font-bold text-gray-500 text-left">
                    TYPE DE VÉHICULE
                </p>
                <div class="grid grid-rows-4 grid-flow-col gap-4 ml-3 mt-2">

                    <div class="rounded-2xl h-10 w-28 border-2 border-gray-500  flex mt-0 hover:border-b-8 hover:border-blue-900 cursor-pointer hover:shadow-sky-900 "
                        v-for="(type, index) in car_type" :key="index" @click="isVehicule(type)"
                        :class="car_type_select == type ? 'bg-blue-900' : ''">
                        <i v-html="svg[index]" class=" font-bold text-xl text-left mt-0 ml-3"
                            :class="car_type_select == type ? 'text-slate-50' : 'text-blue-900'"></i>

                        <p class="font-bold text-base  mt-2 ml-1 " style="margin-left: -0.2rem !important;"
                            :class="car_type_select == type ? 'text-slate-50' : 'text-blue-900'">{{ type }}
                        </p>
                    </div>


                </div>
            </div>

            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-5 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-11/12">
                <p class="text-base font-bold text-gray-500 text-left">
                    NOMBRE DE PLACES
                </p>
                <div class="nbr ml-3 mt-2">
                    <p class="text-base font-bold text-left">Nombre de places min.</p>
                    <InputNumber v-model="nbrPlace" inputId="horizontal-buttons" showButtons buttonLayout="horizontal"
                        decrementButtonClass="p-button-primary" incrementButtonClass="p-button-primary"
                        incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="decimal" :min="0"
                        class="h-10 float-left mt-2 text-center " />

                </div>
            </div>

            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-20 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-11/12">
                <p class="text-base font-bold text-gray-500 text-left">
                    Boite de Vitesse
                </p>
                <div class="flex flex-column gap-3 ml-3">
                    <div v-for="category in categories" :key="category.key" class="flex align-items-center">
                        <RadioButton v-model="selectedCategory" :inputId="category.key" name="pizza"
                            :value="category.name" />
                        <label :for="category.key" class="ml-2">{{ category.name }}</label>
                    </div>
                </div>

            </div>

            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-20 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-11/12">
                <p class="text-base font-bold text-gray-500 text-left">
                    MOTEUR
                </p>
                <div class="flex flex-column gap-3 mt-2 ml-3">
                    <div v-for="category of scheck" :key="category.key" class="flex align-items-center">
                        <Checkbox v-model="selectedCategories" :inputId="category.key" name="category"
                            :value="category.name" />
                        <label :for="category.key" class="ml-2">{{ category.name }}</label>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-20 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-11/12">
                <p class="text-base font-bold text-gray-500 text-left">
                    MARQUE
                </p>
                <div class="grid grid-rows-4 grid-flow-col gap-4 ml-3 mt-2">

                    <div class="rounded-2xl h-10 w-24 border-2 border-gray-500  flex mt-0 hover:border-b-8 hover:border-blue-900 cursor-pointer hover:shadow-sky-900 "
                        v-for="(marque, index) in marques" :key="index" @click="isMarque(marque)"
                        :class="marque_select == marque ? 'bg-blue-900' : ''">

                        <p class="font-bold text-base  mt-2 ml-3 "
                            :class="marque_select == marque ? 'text-slate-50' : 'text-blue-900'">{{ marque }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100  w-72 ml-3  mb-3 mt-20 h-1"></div>
            <div class="price w-72 ml-3 mt-3 mb-2 h-16"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clicked: false,
            clicked1: false,
            price: 50000,
            car_type: ['Utilitaire', 'Citadine', 'Berline', 'Familiale', 'Coupé', 'Minibus', '4x4'],
            car_type_select: "",
            marques: ['Utilitaire', 'Citadine', 'Berline', 'Familiale', 'Coupé', 'Minibus', '4x4'],
            marque_select: "",

            lac_model: "",
            nbrPlace: 2,
            selectedCategory: 'Tous',
            categories: [
                { name: 'Tous', key: 'T' },
                { name: 'Boite manuel', key: 'M' },
                { name: 'Boite automatique', key: 'A' },
            ],
            scheck: [
                { name: "Escence", key: "E" },
                { name: "Gasoil", key: "G" },
                { name: "Hybride", key: "H" },
                { name: "Électrique", key: "É" },
            ],
            selectedCategories: ['Escence'],


            svg: [
                `  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                <path
                                    d="M3 6c-1.11 0-2 .89-2 2v8h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-4c0-1.11-.89-2-2-2l-3-4H3Zm12 1.5h2.5l1.96 2.5H15V7.5Zm-9 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z">
                                </path>
                            </svg>
               `, ` <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                <path
                                    d="M16 6H6l-5 6v3h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-3c0-1.11-.89-2-2-2h-2l-3-4ZM6.5 7.5h4V10h-6l2-2.5Zm5.5 0h3.5l1.96 2.5H12V7.5Zm-6 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z">
                                </path>
                            </svg>`, `
                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5 8.5h7l7 3.5h2a2 2 0 0 1 2 2v2h-2.18c-.42 1.2-1.55 2-2.82 2-1.27 0-2.4-.8-2.83-2H7.82C7.4 17.2 6.27 18 5 18c-1.27 0-2.4-.8-2.83-2H1v-4.445a1 1 0 0 1 .47-.849L5 8.5Zm.5 1.5-2.948 2H15.5l-4-2h-6Zm.56 3.94a1.5 1.5 0 1 0-2.12 2.12 1.5 1.5 0 0 0 2.12-2.12Zm13 0a1.5 1.5 0 1 0-2.12 2.12 1.5 1.5 0 0 0 2.12-2.12Z">
                                </path>
                            </svg>`, `
                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                
                                <path
                                    d="M1 8a2 2 0 0 1 2-2h11l4 4h3c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-6 0H8a3 3 0 0 1-6 0H1V8Zm1.5-.5V10h6V7.5h-6Zm7.5 0V10h5.8l-2.55-2.5H10Zm-5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z">
                                </path>
                            </svg>`, `
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3 11s1.5-3 6-3c2.316 0 4.103.795 5.836 1.566C16.471 10.293 18.06 11 20 11h-1.5c4.847 0 4.646 2.245 4.53 3.537-.016.174-.03.331-.03.463v1.5h-1.402a3.001 3.001 0 0 1-5.196 0H7.598a3 3 0 0 1-5.196 0H1V11h2Zm2 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8.833 11H15.5c-.847 0-1.624-.278-2.509-.595-1.154-.413-2.491-.891-4.408-.905l.25 1.5Zm-1 0H5s.046-1.223 2.59-1.46L7.833 11Z">
                                </path>
                            </svg>
                            `, `
                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                

                                 <path
                                    d="M3 7c-1.11 0-2 .89-2 2v8h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-4c0-1.11-.89-2-2-2l-3-4H3Zm0 1.5h4V11H3V8.5Zm6 0h4V11H9V8.5Zm6 0h2.5l1.96 2.5H15V8.5Zm-9 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z">
                                </path>
                            </svg>`
                , `
                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                class="fill-current stroke-current h-full w-full " style="margin-left: -0.5rem;">
                                
                                 <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15 6H4c-1.11 0-2 .89-2 2H1v6h1v1h2a3 3 0 0 0 6 0h5a3 3 0 0 0 6 0h2v-3c0-1.11-.89-2-2-2h-3l-3-4ZM3.5 10V7.5h6V10h-6Zm7.5 0V7.5h3.25l1.89 2.5H11Zm-5.06 3.94a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12Zm11 0a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12Z">
                                </path>
                            </svg>`,

            ]
        };
    },
    methods: {

        handleClick() {
            if (!this.clicked) {
                this.clicked = true
                this.clicked1 = false
                this.lac_model = 'rendez-vous'
            } else {
                this.clicked = false
                this.clicked1 = false
                this.lac_model = ''

            }

        }, handleClick1() {
            if (!this.clicked1) {
                this.clicked = false
                this.clicked1 = true
                this.lac_model = 'parking'

            } else {
                this.clicked = true
                this.clicked1 = false
                this.lac_model = ''

            }
        }, isVehicule(type) {
            if (this.car_type_select != type) {
                this.car_type.forEach(types => {

                    if (type === types) {
                        this.car_type_select = type
                        console.log(this.car_type_select, type == types);
                    } else {
                        this.car_type_select = type

                    }
                });
            } else {
                this.car_type_select = ''
            }

        }, isMarque(type) {
            if (this.marque_select != type) {
                this.marques.forEach(types => {

                    if (type === types) {
                        this.marque_select = type
                        console.log(this.marque_select, type == types);
                    } else {
                        this.marque_select = type

                    }
                });
            } else {
                this.marque_select = ''
            }

        }
    }
}
</script>

<style lang="scss">
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover,
.p-radiobutton:not(.p-radiobutton-disabled) .p-radiobutton-box:hover {
    border-color: #183462 !important;
}

.active {
    .icon-box {
        background: #fff !important;

        i {
            color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;
        }
    }

    div {
        p {
            color: white !important;
        }

    }


}

.nbr {
    .p-inputtext {
        width: 4rem !important;
        text-align: center;
    }


}

.p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: #183462 !important;
    background: #183462 !important;

}

.p-checkbox .p-checkbox-box.p-highlight {
    border-color: #183462 !important;
    background: #183462 !important;
}

.p-button {
    background: #183462 !important;
    border: 0px solid #ced4da;
    color: #fff;
}

.p-inputnumber-button-down,
.p-inputnumber-button-up {
    border: 0 !important;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {

    width: 5rem !important;
}

.p-slider .p-slider-range {
    --tw-text-opacity: 1;
    background: rgb(30 58 138 / var(--tw-text-opacity));
}

.p-slider:hover .p-slider-handle:hover {
    --tw-text-opacity: 1;
    background: rgb(30 58 138 / var(--tw-text-opacity));
    border: rgb(30 58 138 / var(--tw-text-opacity));
}
</style>