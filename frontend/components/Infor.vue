<template>
    <div>
        <div class="col-span-3 lg:ml-10 flex flex-col justify-between lg:flex-none h-screen">
            <div class="grid grid-cols-3 ">
                <div class="col-span-3 lg:col-span-2 px-4 lg:mt-16">
                    <h1 class="font-bold py-8">Thông tin đơn hàng</h1>
                    <!-- ẩn đặt hàng này khi ở mobile -->
                    <div v-if="currentStep === 5" class="dathangthanhcong hidden lg:flex flex-row p-2">
                        <div class="w-5/12 lg:w-3/12 flex items-center justify-center">
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
                    <!--  -->
                    <div class="border flex flex-row p-2">
                        <div class="w-2/12 lg:w-1/12 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                        </div>
                        <!-- lấy form từ FormComponent bỏ vào đây -->
                        <div class="w-11/12">
                            <p class="font-bold">{{ form.name }}</p>
                            <p>{{ form.phone }}</p>
                            <p>{{ form.email }}</p>
                            <p>{{ form.address }}, {{ form.ward }}, {{ form.district }}, {{ form.city }}</p>
                            <textarea readonly v-model="form.note"
                                placeholder="Không ghi chú" maxlength="350"
                                class="min-h-[75px] max-h-[105px] w-full pt-2 rounded outline-none resize-none text-slate-800"  />
                        </div>
                    </div>
                    <div class="border flex flex-row my-4 p-2">
                        <div class=" w-2/12 lg:w-1/12 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h1 class=" font-bold">Phương thức thanh toán</h1>
                            <!-- lấy giá trị phương thức thanh toán từ form ở phương thức thanh toán bỏ vào đây -->
                            <p>{{  form.payment }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="currentStep <=4 ? 'border-t-2':''" class=" lg:w-2/3 px-4">
                <div v-if="simChosens > 0 " class=" lg:hidden flex bg-white border-t py-2 justify-between">
                        <div class="text-black bg-white">
                            <h1><b>TẠM TÍNH</b></h1>
                            <p class="text-xs ">Đã bao gồm VAT <span v-if="currentStep >= 3">và phí vận chuyển</span></p>
                        </div>
                        <h1 class="text-rose-500 text-xl">
                            <b>{{ formatCurrency(currentStep < 3 ? totalAmount : totalAmount + 30000) }} đ</b></h1>
                        
                </div>
                <div v-if="currentStep === 4" class="text-center text-xs lg:text-sm py-4">Bằng việc tiến hành đặt hàng,
                    tôi đồng ý với điều kiện và <b>Điều khoản mua hàng</b>, cũng như đã hiểu và đồng ý
                    chia sẻ thông tin cho mục đích mua hàng theo <b>Chính sách bảo mật</b> tại LVTLocal.vn
                </div>
                <!-- đặt hàng thành công mobile-->
                <div v-if="currentStep === 5" class="dathangthanhcong lg:hidden flex flex-row p-2">
                    <div class="w-5/12 lg:w-3/12 flex items-center justify-center">
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
                <button v-if="currentStep === 4" @click="goToNextStep"
                    class="w-full bg-[#FF353C] p-2 py-4 lg:py-2  rounded-md text-white lg:mb-2 my-2">Xác nhận đơn hàng</button>
                <button v-if="currentStep === 5" @click.prevent="goToMainPage"
                    class="w-full p-4 rounded-md text-[#FF353C] lg:border text-center inline-block  my-2">
                    <button><b>Quay trở về trang chính</b></button>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStepStore } from '../stores/steps';
    import {useCartStore} from '../stores/cart';
    import { useRouter } from 'vue-router';


    const { clearCart,getCartItems  } = useCartStore();
    const cartItems = computed(() => getCartItems());
    const simChosens = computed(() => cartItems.value.length);
    const totalAmount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.quantity * item.simPrice), 0);
    })

    const router = useRouter();
    const form = JSON.parse(sessionStorage.getItem('formData') || '{}')
    console.log('dữ liệu trong form',form)
    const {currentStep, setStep} = useStepStore();

    // format tiền tệ
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN').format(value);
    };
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
</script>

<style scoped>

</style>