<template>
    <div>
        <div class="grid grid-cols-4 ">
            <form @submit.prevent="goToNextStep" class="col-span-3 ">
                <h1 class="font-semibold pt-8 pb-3">Thông tin cá nhân:</h1>
                <div class="flex flex-col">
                    <label for="name" class="mb-2 font-semibold">Họ và tên:<span class="text-rose-500">*</span></label>
                    <input placeholder="Tên của bạn là gì" id="name" v-model="shippingInfo.name" type="text" class="p-2 border rounded outline-none" />
                    <span v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</span>
                </div>

                <div class="flex flex-col">
                    <label for="phone" class="mb-2 font-semibold">Số điện thoại:<span class="text-rose-500">*</span></label>
                    <input placeholder="+84..." id="phone" v-model="shippingInfo.phone" type="text" class="p-2 border rounded" />
                    <span class="text-red-500 text-xs">{{ errors.phone }}</span>
                </div>

                <div class="flex flex-col">
                    <label for="email" class="mb-2 font-semibold">Địa chỉ email:<span class="text-rose-500">*</span></label>
                    <input placeholder="Địa chỉ email của bạn là..." id="email" v-model="form.email" type="email" class="p-2 border rounded" />
                    <span class="text-red-500 text-xs">{{ errors.email }}</span>
                </div>

                <h1 class="font-semibold pt-8 pb-3">Địa chỉ giao hàng:</h1>
                <div class="flex flex-col">
                    <label for="name" class="mb-2 font-semibold">Tỉnh/ Thành phố:<span class="text-rose-500">*</span></label>
                    <input placeholder="Tên của bạn là gì" id="name" v-model="form.name" type="text" class="p-2 border rounded outline-none" />
                    <span class="text-red-500 text-xs">{{ errors.name }}</span>
                </div>
                <div class="flex flex-col">
                    <label for="name" class="mb-2 font-semibold">Quận/ Huyện:<span class="text-rose-500">*</span></label>
                    <input placeholder="Tên của bạn là gì" id="name" v-model="form.name" type="text" class="p-2 border rounded outline-none" />
                    <span class="text-red-500 text-xs">{{ errors.name }}</span>
                </div>
                <div class="flex flex-col">
                    <label for="name" class="mb-2 font-semibold">Phường/ Xã:<span class="text-rose-500">*</span></label>
                    <input placeholder="Tên của bạn là gì" id="name" v-model="form.name" type="text" class="p-2 border rounded outline-none" />
                    <span class="text-red-500 text-xs">{{ errors.name }}</span>
                </div>
                <div class="flex flex-col">
                    <label for="address" class="mb-2 font-semibold">Địa chỉ:<span class="text-rose-500">*</span></label>
                    <input placeholder="Số nhà, tên đường..." id="address" v-model="form.name" type="text" class="p-2 border rounded outline-none text-sm" />
                    <span class="text-red-500 text-xs">{{ errors.address }}</span>
                </div>
                <div class="flex flex-col">
                    <label for="note" class="mb-2 font-semibold">Ghi chú:</label>
                    <textarea placeholder="Ghi chú cho người giao hàng" id="note" maxlength="505" v-model="form.note" type="text" class="h-[132px] p-2 border rounded outline-none " />
                    <span class="text-red-500 text-xs">{{ errors.note }}</span>
                </div>

                <div class="flex justify-end text-white">
                    <button :disabled="!isShippingInfoComplete" :class="!isShippingInfoComplete ? 'opacity-50':''" class="p-2 bg-[#FF353C] rounded-lg flex">
                        <p class="">Tiếp tục</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="size-5 h-full">
                            <path fill-rule="evenodd"
                                d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <!-- <button type="submit" class="px-4 py-2 bg-[#FF353C] text-white rounded">Tiếp tục</button> -->
            </form>
        </div>
    </div>
</template>

<script setup>
import { useStepStore } from '~/stores/steps';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const {currentStep, setStep} = useStepStore();

const goToNextStep = () =>{
    if(currentStep.value < 3){
        setStep(currentStep.value + 1)
    }
}

const shippingInfo = reactive({
  name: '',
  phone: '',
});

const isShippingInfoComplete = computed(() => {
  return shippingInfo.name && shippingInfo.phone;
});

const schema = yup.object({
  name: yup.string()
    .trim('Tên không được chứa khoảng trắng ở đầu hoặc cuối')
    .matches(/^[a-zA-Z\s]+$/, 'Tên chỉ được chứa chữ cái và khoảng trắng')
    .min(2, 'Tên phải có ít nhất 2 ký tự')
    .max(50, 'Tên không được vượt quá 50 ký tự')
    .required('Tên là bắt buộc'),
  
  email: yup.string()
    .trim('Email không được chứa khoảng trắng ở đầu hoặc cuối')
    .email('Email không hợp lệ')
    .required('Email là bắt buộc'),
  
  phone: yup.string()
    .matches(/^\+84(09|03|07|08|05)[0-9]{8}$/, 'Số điện thoại phải bắt đầu bằng +84 và thuộc các nhà mạng hợp lệ tại Việt Nam')
    .required('Số điện thoại là bắt buộc'),
    address: yup.string()
        .required('Địa chỉ là bắt buộc')
        .max(500, 'Tên không được vượt quá 500 ký tự')
});

const { handleSubmit, errors, values } = useForm({
    validationSchema: schema,
});

const form = values;

const onSubmit = handleSubmit((values) => {
    console.log(values);
});
</script>

<style scoped></style>