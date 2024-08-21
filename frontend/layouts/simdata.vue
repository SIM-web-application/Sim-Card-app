<template>
    <div>
        <div class=" grid grid-cols-4">
            <div class="col-span-4 lg:col-span-3 md:ml-10 ">
                <header
                    class="grid grid-cols-2 grid-flow-col py-2 lg:py-2 fixed top-0 bg-white border-b lg:w-3/4 lg:border-b-2 lg:h-16    ">
                    <div class=" col-span-1 flex items-center pl-8">
                        <button @click="handleRoute"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" class="size-5 hover:text-rose-500">
                                <path fill-rule="evenodd"
                                    d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
                                    clip-rule="evenodd" />
                            </svg></button>

                    </div>
                    <!-- logo -->
                    <div class="col-span-2"><img alt="Local" class="text-rose-500 w-2/6 md:w-1/6  h-auto "
                            src="/logo-local1.png" style="color: transparent;"></div>
                    <!-- icon giỏ hàng mobile -->
                     <div>
                        <button @click="stateForm" class="lg:hidden px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path
                                    d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                        </button>
                    </div>
                </header>
            </div>
            <div class="hidden lg:block col-span-1 text-black bg-gray-100 fixed right-0 w-3/12 h-16">
                <div class=" px-2 flex items-center h-full font-bold">
                    Giỏ hàng
                </div>
            </div>

        </div>
        <!-- giỏ hàng mobile -->
        <div v-if="isForm" @click="stateForm" class="fixed bottom-0 bg-[#0005] w-screen h-screen mt-20">
            <div class="fixed bottom-0 w-full h-fit bg-white border-t-2 rounded-t-3xl">
                <p class="p-2 text-2xl"><b>Giỏ hàng</b></p>
                <div v-if="cartNumber === 0" class="p-2 py-4 text-slate-500">Không có sản phẩm</div>
                <div v-for="item in cartItems" :key="item._id" class="border-b-2 py-3 p-2 ">
                    <h1 class="font-bold py-2">SIM Local . Gói {{ item.plan.name }}</h1>
                    <div class="flex justify-between text-xl">
                        <p>Số lượng: {{ item.quantity }}</p>
                        <p class="font-bold">{{ item.quantity * item.simPrice }} đ</p>
                    </div>
                </div>
                <div v-if="cartNumber > 0 && currentStep >= 3" class="flex bg-white border-t p-2 justify-between">
                        <div class="text-black bg-white">
                            <h1><b>{{ currentStep >= 4 ? 'TỔNG TIỀN': 'TẠM TÍNH' }}</b></h1>
                            <p class="text-sm">Đã bao gồm VAT</p>
                        </div>
                        <h1 class="text-rose-500 text-xl"><b>{{ totalAmount }} đ</b></h1>
                        
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStepStore } from '~/stores/steps';
    import { useCartStore } from '~/stores/cart';
    import { useRouter } from 'vue-router';
    import { navigateTo } from 'nuxt/app';
    
    const { getCartItems, clearCart} = useCartStore();
    const cartItems = computed(() => getCartItems());
    const cartNumber = computed(() => cartItems.value.length);
    const totalAmount = computed(() => {
      return cartItems.value.reduce((sum, item) => sum + (item.quantity * item.simPrice), 0);
    });


    const {currentStep , setStep, setIsForm ,isForm} = useStepStore();
    const router = useRouter()
    // trạng thái giỏ hàng mb
    const stateForm = () => {
        setIsForm(!isForm.value);
    };
    const handleRoute = () =>{
        if(currentStep.value === 1){
            navigateTo('/')
        }else if(currentStep.value === 5){
            router.push('/');
            clearCart(); // Xóa giỏ hàng
            setStep(1)  
        }
        else{
            if(currentStep.value > 1 && currentStep.value !== 4){
                setStep(currentStep.value - 1)
            }else{
                setStep(2)
            }
        }
    }
</script>

<style scoped></style>