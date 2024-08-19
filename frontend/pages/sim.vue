<!-- pages/sim -->
<template>
    <div class="grid grid-cols-4 border-t-2">
        <div class="col-span-3 ml-10">
            <div v-if="currentStep <= 3" class="py-8 pl-8 steps flex items-center justify-between w-11/12">
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
                    <span :class="currentStep === 2 ? 'bg-rose-500' : 'hidden'"
                        class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">2</span>
                    <span :class="currentStep === 3 ? '': 'hidden'">
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
                <div :class="currentStep === 3 ? '' : ''" class="flex items-center">
                    <span :class="currentStep === 3 ? 'bg-rose-500' : ''"
                        class="border border-gray-400 rounded-full h-8 w-8 flex items-center justify-center">3</span>
                    <span :class="currentStep === 3 ? 'font-bold' : ''" class="ml-2">Thanh toán</span>
                </div>
            </div>


            <div  v-if="currentStep === 1" class="">
                <div class="p-8 flex flex-wrap gap-10 h-fit">
                    <div v-for="p in sims" :key="p._id">
                        <!-- Truyền prop quantity vào SimCard -->
                        <SimCard :sim="p"></SimCard>
                    </div>
                </div>
                <div class="flex justify-end mr-16 pb-16 text-white">
                    <button :disabled="!(simChosens > 0)"
                        :class="!(simChosens > 0) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700 hover:duration-500'"
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
            <div  v-if="currentStep === 2 || currentStep === 3" class="col-span-3 ml-10">
                <FormComponent v-model="formData" />
            </div>
            <div  v-if="currentStep === 3" class="col-span-3 ml-10">
                <div class="grid grid-cols-3">
                    <form @submit.prevent="goToNextStep" class="col-span-2">
                        <p class="font-bold py-4">Phương thức thanh toán</p>
                        <div class="flex justify-between font-semibold">
                            <div class="flex border justify-between w-full p-2 mr-2 rounded-md hover:border-rose-500">
                                <label for="bank block">Thẻ ngân hàng nội địa</label>
                                <input type="radio" id="bank" name="fav_language" value="Thẻ ngân hàng nội địa">
                            </div>
                            <div class="border flex justify-between w-full p-2 rounded-md hover:border-rose-500">
                                <label for="cod block">Thanh toán khi nhận hàng (COD)</label>
                                <input type="radio" id="cod" name="fav_language" value="Thanh toán khi nhận hàng (COD)">
                            </div>
                        </div>
                        <p class="text-sm py-4 text-center">Tôi đã đọc và đồng ý với việc chia sẻ những thông tin trên
                            theo
                            <span class="font-bold">Chính sách bảo mật</span> của myLocal.vn
                        </p>
                        <button
                            class="border w-full p-2 rounded-md bg-[#FF353C] text-white">Tiến hành đặt
                            hàng</button>
                    </form>
                </div>
            </div>
            <div v-if="currentStep >= 4" class="col-span-3 ml-10">
                <div class="grid grid-cols-3">
                    <div class="col-span-2">
                        <h1 class="font-bold py-8">Thông tin đơn hàng</h1>
                        <div v-if="currentStep === 5" class="dathangthanhcong flex flex-row p-2">
                            <div class="w-3/12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-20 text-green-500">
                                    <path fill-rule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </div>
                            <div class="">
                                <h1><b>Đặt hàng thành công!</b></h1>
                                <p class="text-[#08B5AA] text-sm">Mã đơn hàng: 9823786698</p>
                                <p>chúng tôi sẽ liên hệ khi đơn hàng sẵn sàng</p>
                            </div>
                        </div>
                        <div class="border flex flex-row p-2">
                            <div class=" w-1/12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </div>
                            <div>
                                <p class="font-bold">Lê Văn Thảo</p>
                                <p>0397207167</p>
                                <p>ronan@gmail.com</p>
                                <p>hdhds, Đại Tân, Đại Lộc, Quảng Nam</p>
                                <p>q</p>
                            </div>
                        </div>
                        <div class="border flex flex-row my-4 p-2">
                            <div class=" w-1/12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 class=" font-bold">Phương thức thanh toán</h1>
                                <p>Thẻ Ngân hàng nội địa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="currentStep <=4 ? 'border-t-2':''" class=" w-2/3">
                    <div v-if="currentStep === 4" class=" text-center text-sm py-4">Bằng việc tiến hành đặt hàng, tôi
                        đồng ý với điều kiện và
                        <b>Điều khoản mua hàng</b>, cũng như đã hiểu và đồng ý
                        chia sẻ thông tin cho mục đích mua hàng theo <b>Chính sách bảo mật</b> tại LVTLocal.vn
                    </div>
                    <button v-if="currentStep === 4" @click="goToNextStep"
                        class="w-full bg-[#FF353C] p-2 rounded-md text-white">Xác nhận đơn hàng</button>
                    <a v-if="currentStep === 5" href="/" @click.prevent="goToMainPage" class="w-full p-2 rounded-md text-[#FF353C] border text-center inline-block">
                        <button ><b>Quay trở về trang chính</b></button>
                    </a>
                </div>
            </div>
        </div>
        <Cart />
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import SimCard from '~/components/SimCard.vue'
import Cart from '~/components/Cart.vue';
import FormComponent from '~/components/FormComponent.vue';
import { useStepStore } from '~/stores/steps';
import { useCartStore } from '~/stores/cart';
import { useFetchSims } from '~/composables/fetchSims';
import { useRouter } from 'vue-router';


const router = useRouter();
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  city: '',
  district: '',
  ward: '',
  address: '',
  note: ''
})

const { getCartItems, clearCart } = useCartStore();
const  {currentStep, setStep} = useStepStore();
console.log ('hiện tại', currentStep)

const goToNextStep = () => {
  if (currentStep.value) {
    setStep(currentStep.value + 1);
  }
};

const goToMainPage = () => {
    router.push('/');
    clearCart(); // Xóa giỏ hàng
    setStep(1)  
};

const cartItems = computed(() => getCartItems());
const simChosens = computed(() => cartItems.value.length);



definePageMeta({
    layout: 'simdata'
})

// Lấy dữ liệu từ backend
const { sims } = await useFetchSims()

console.log("giá trị Sim", sims)
</script>

<style scoped>
    input[type="radio"]:checked {
        accent-color: #ef4444; /* Màu đỏ của Tailwind */       
    }
    input[type="radio"]{
        width: 30px;
    }

</style>