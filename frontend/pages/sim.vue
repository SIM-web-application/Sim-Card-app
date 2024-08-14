<template>
    <div>
        <div class="p-8 flex flex-wrap gap-10 h-fit">
            <div  v-for="p in sims" :key="p._id">
                <SimCard :sim="p"></SimCard>
            </div>
        </div>
        <div class="flex justify-end mr-16 pb-16 text-white">
            <button class="p-2 bg-[#FF353C] rounded-lg flex">
                <p class="">Tiếp tục</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="size-5 h-full">
                    <path fill-rule="evenodd"
                        d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue'

definePageMeta({
    layout: 'simdata'
})

const { data } = await useFetch(`http://localhost:5555/api/sims/`)
const sims = data._value.data
console.log("dữ liệu sim:", sims) 
console.log("dữ liệu tên SIm:", sims[0].plan.name) 

// const sims= ref([])
// sims.value= Simdata.value
// console.log("sims:", sims.value)
// console.log("tên sim", sims[1].data.plan.name)
</script>

<style scoped></style>