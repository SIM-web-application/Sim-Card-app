<template>
    <NuxtClientFallback>
        <div class="grid grid-cols-4 border-t-2">
            <div class="col-span-3 ml-10">
                <div class="py-8 pl-8 steps flex items-center justify-between w-11/12">
                    <div :class="currentStep === 1 ? 'font-bold' : 'font-normal'" class="flex items-center">
                        <span :class="currentStep === 1 ? 'bg-rose-500' : 'hidden'"
                            class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">1</span>
                        <span :class="currentStep ===2 || currentStep === 3? '': 'hidden'">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="size-9 text-[#34C759]">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span :class="currentStep !== 1 ? 'opacity-50' : ''" class="ml-2 font-bold">Chọn gói cước</span>
                    </div>
                    <hr class="flex-grow border-t mx-3">
                    <div :class="currentStep === 2 ? '' : ''" class="flex items-center">
                        <span :class="currentStep === 2 ? 'bg-rose-500' : ''"
                            class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">2</span>
                        <span :class="currentStep === 3 ? '': 'hidden'" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="size-9 text-[#34C759]">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>    
                        <span :class="currentStep !== 2 ? 'opacity-50' : ''" class="ml-2 font-bold">Thông tin giao hàng</span>
                    </div>
                    <hr class="flex-grow border-t mx-3">
                    <div :class="currentStep === 3 ? '' : ''" class="flex items-center">
                        <span :class="currentStep === 3 ? 'bg-rose-500' : ''"
                            class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">3</span>
                        <span :class="currentStep === 3 ? 'font-bold' : ''" class="ml-2">Thanh toán</span>
                    </div>
                </div>


                <div v-if="currentStep === 1" class="">
                    <div class="p-8 flex flex-wrap gap-10 h-fit">
                        <div v-for="p in sims" :key="p._id">
                            <!-- Truyền prop quantity vào SimCard -->
                            <SimCard :sim="p"></SimCard>
                        </div>
                    </div>
                    <div class="flex justify-end mr-16 pb-16 text-white">
                        <button :disabled="!(simChosens > 0)" :class="!(simChosens > 0) ? 'opacity-50' : 'hover:bg-red-700 hover:duration-500'"
                            @click="goToNextStep" class="p-2 bg-[#FF353C] rounded-lg flex ">
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
                <div v-if="currentStep === 2" class="col-span-3 ml-10">
                    <Form />
                </div>
                <div v-if="currentStep === 3" class="col-span-3 ml-10">
                    bạn đã qua bước 3
                </div>
            </div>
            <Cart />
        </div>
    </NuxtClientFallback>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import SimCard from '~/components/SimCard.vue'
import Cart from '~/components/Cart.vue';
import Form from '~/components/Form.vue';
import { useStepStore } from '~/stores/steps';
import { useCartStore } from '~/stores/cart';

// const { getCartItems } = useCartStore();
const  {currentStep, setStep} = useStepStore();
console.log('hiện tại', currentStep)

const goToNextStep = () => {
  if (currentStep.value < 3) {
    setStep(currentStep.value + 1);
  }
};

const simChosens = ref(0); // Khai báo simChosens ở đây
onMounted(() => {
    // const cartItems = computed(() => getCartItems());
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    console.log('storedCart', storedCart);
    console.log('hiện tại', currentStep)
    simChosens.value = storedCart.length
});


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