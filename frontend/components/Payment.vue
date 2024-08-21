<template>
    <div>
        <div class="grid grid-cols-3">
            <form class="col-span-3 lg:col-span-2 px-4" @submit.prevent="handleSubmit">
                <p class="font-bold py-4">Phương thức thanh toán</p>
                <div class="lg:flex lg:justify-between font-semibold space-y-5 lg:space-y-0">
                    <div
                        class="flex border justify-between w-full p-2 mr-2 rounded-md hover:border-rose-500"
                    >
                        <label for="bank" class="block">Thẻ ngân hàng nội địa</label>
                        <input
                            type="radio"
                            id="bank"
                            name="paymentMethod"
                            value="Thẻ ngân hàng nội địa"
                            v-model="selectedPaymentMethod"
                        />
                    </div>
                    <div
                        class="flex border justify-between w-full p-2 mr-2 rounded-md hover:border-rose-500"
                    >
                        <label for="cod" class="block">Thanh toán khi nhận hàng (COD)</label>
                        <input
                            type="radio"
                            id="cod"
                            name="paymentMethod"
                            value="Thanh toán khi nhận hàng (COD)"
                            v-model="selectedPaymentMethod"
                        />
                    </div>
                </div>
                <p class="text-sm py-4 text-center">
                    Tôi đã đọc và đồng ý với việc chia sẻ những thông tin trên theo
                    <span class="font-bold">Chính sách bảo mật</span> của myLocal.vn
                </p>
                <button
                    id="paymentButton"
                    type="submit"
                    class="border w-full p-2 rounded-md bg-[#FF353C] text-white lg:mb-2"
                >
                    Tiến hành đặt hàng
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStepStore } from '~/stores/steps';

const { currentStep, setStep } = useStepStore();
const selectedPaymentMethod = ref('');

onMounted(() => {
    selectedPaymentMethod.value = 'Thẻ ngân hàng nội địa'; // Giá trị mặc định ban đầu
});
// Hàm xử lý khi gửi form
const handleSubmit = () => {
    if (selectedPaymentMethod.value) {
        // Cập nhật sessionStorage
        const formData = JSON.parse(sessionStorage.getItem('formData')) || {};
        formData.payment = selectedPaymentMethod.value;
        sessionStorage.setItem('formData', JSON.stringify(formData));
        
        // Chuyển sang bước tiếp theo
        goToNextStep();
    } else {
        alert('Vui lòng chọn phương thức thanh toán.');
    }
};

// Hàm chuyển sang bước tiếp theo
const goToNextStep = () => {
    if (currentStep.value) {
        setStep(currentStep.value + 1);
    }
};
</script>

<style scoped>
input[type="radio"]:checked {
    accent-color: #ef4444; /* Màu đỏ của Tailwind */
}
input[type="radio"] {
    width: 30px;
}
</style>
