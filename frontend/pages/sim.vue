<!-- pages/sim -->
<template>
    <div class="grid grid-cols-4 border-t-2 mt-10 lg:mt-0">
        <div class="col-span-4 lg:col-span-3 lg:ml-10">
            <div v-if="currentStep <= 3"
                class="py-4 lg:py-8 lg:pl-8 pr- steps flex items-center justify-between w-full lg:w-2/3 flex-nowrap space-x-4
                     bg-white lg:fixed top-16">
                <div :class="currentStep === 1 ? 'font-bold' : 'font-normal'"
                    class="flex items-center flex-col lg:flex-row text-center">
                    <span :class="currentStep === 1 ? 'bg-[#FF353C]' : 'hidden'"
                        class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">1</span>
                    <span :class="currentStep === 2 || currentStep === 3 ? '' : 'hidden'">
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
                <div :class="currentStep === 2 ? '' : ''" class="flex items-center flex-col lg:flex-row text-center  ">
                    <span v-if="currentStep <= 2" :class="currentStep === 2 ? 'bg-[#FF353C]' : ''"
                        class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">2</span>
                    <span :class="currentStep === 3 ? '' : 'hidden'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="size-9 text-[#34C759]">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span :class="currentStep !== 2 ? 'opacity-50' : ''" class="ml-2 font-bold">Thông tin giao
                        hàng</span>
                </div>
                <hr class="flex-grow border-t mx-3">
                <div :class="currentStep === 3 ? '' : ''"
                    class="flex items-center flex-col lg:flex-row text-center justify-center ">
                    <span :class="currentStep === 3 ? 'bg-[#FF353C]' : ''"
                        class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">3</span>
                    <span :class="currentStep === 3 ? 'font-bold' : 'font-bold opacity-50'" class="ml-2">Thanh toán</span>
                </div>
            </div>

            <div v-if="currentStep === 1" class="">
                <div class="p-8 flex flex-wrap justify-center lg:justify-start gap-10 h-fit mb-20">
                    <div v-for="p in sims" :key="p._id">
                        <!-- Truyền prop quantity vào SimCard -->
                        <SimCard :sim="p"></SimCard>
                    </div>
                </div>
                <!-- button mobile -->
                <div v-if="!isForm" class="fixed bottom-0 left-0 w-full lg:hidden bg-white text-white flex flex-col justify-center">
                    <div v-if="simChosens > 0" class="flex bg-white border-t p-2 justify-between">
                        <div class="text-black bg-white">
                            <h1><b>TẠM TÍNH</b></h1>
                            <p class="text-sm">Đã bao gồm VAT</p>
                        </div>
                        <h1 class="text-rose-500 text-xl"><b>{{ formatCurrency(totalAmount) }} đ</b></h1>                        
                    </div>
                    <button :disabled="!(simChosens > 0)"
                        :class="!(simChosens > 0) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700 hover:duration-500'"
                        @click="goToNextStep"
                        class="w-90 p-4 m-2 bg-[#FF353C] rounded-lg flex items-center justify-center">
                        <p class="mr-2">Tiếp tục</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="size-5 h-full">
                            <path fill-rule="evenodd"
                                d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <!-- btn computer -->
                <div class="hidden lg:flex justify-end mr-16 pr-6 pb-16 text-white ">
                    <button :disabled="!(simChosens > 0)"
                        :class="!(simChosens > 0) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700 hover:duration-500'"
                        @click="goToNextStep" class="p-2 bg-[#FF353C] rounded-lg flex">
                        <p class="mr-2">Tiếp tục</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="size-5 h-full">
                            <path fill-rule="evenodd"
                                d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div v-if="currentStep === 2 || currentStep === 3" class="w-full md:col-span-3 lg:ml-10">
                <FormComponent />
            </div>
            <div v-if="currentStep === 3" class="col-span-3 lg:ml-10">
                <Payment/>
            </div>
            <div v-if="currentStep >= 4" >
                <Infor/>
            </div>            
        </div>
        <div class="fixed right-0 top-[62px] w-3/12 lg:border-t-2"> 
            <Cart />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import SimCard from '~/components/SimCard.vue'
import Cart from '~/components/Cart.vue';
import FormComponent from '~/components/FormComponent.vue';
import Payment from '~/components/Payment.vue';
import { useStepStore } from '~/stores/steps';
import { useCartStore } from '~/stores/cart';
import { useFetchSims } from '~/composables/fetchSims';

const { getCartItems } = useCartStore();
const  {currentStep, setStep, isForm} = useStepStore();
console.log ('hiện tại', currentStep)

const goToNextStep = () => {
  if (currentStep.value) {
    setStep(currentStep.value + 1);
  }
};
const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN').format(value);
};
const cartItems = computed(() => getCartItems());
const simChosens = computed(() => cartItems.value.length);
const totalAmount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.quantity * item.simPrice), 0);
})

definePageMeta({
    layout: 'simdata'
})

// Lấy dữ liệu từ backend
const { sims } = await useFetchSims()

console.log("giá trị Sim", sims)
</script>

<style scoped>
</style>