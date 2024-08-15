<template>
    <NuxtClientFallback>
        <div class="grid grid-cols-4 border-t-2">
            <div class="col-span-3 ml-10">
                <div class="p-8 flex flex-wrap gap-10 h-fit">
                    <div v-for="p in sims" :key="p._id">
                        <!-- Truyền prop quantity vào SimCard -->
                        <SimCard :sim="p"></SimCard>
                    </div>
                </div>
                <div class="flex justify-end mr-16 pb-16 text-white">
                    <button class="p-2 bg-[#FF353C] rounded-lg flex">
                        <p class="">Tiếp tục</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="size-5 h-full">
                            <path fill-rule="evenodd"
                                d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <Cart />
        </div>
    </NuxtClientFallback>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SimCard from '~/components/SimCard.vue'
import Cart from '~/components/Cart.vue';
definePageMeta({
    layout: 'simdata'
})

const sims = ref([])

// Lấy dữ liệu từ backend
const { data } = await useFetch('http://localhost:5555/api/sims/')
sims.value = data._value.data

console.log("giá trị Sim", sims)
</script>

<style scoped></style>