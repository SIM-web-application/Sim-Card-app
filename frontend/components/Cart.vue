<template>
    <div class="col-span-1 min-h-screen h-auto bg-gray-100 px-2 pt-1 flex flex-col justify-between">
      <div v-if="cartItems.length === 0" class="p-16">Chưa có sản phẩm</div>
      <div v-else>
        <div v-for="item in cartItems" :key="item._id" class="border-b-2 py-5">
          <h1 class="font-bold py-2">{{ item.plan.name }}</h1>
          <div class="flex justify-between">
            <p>Số lượng: {{ item.quantity }}</p>
            <p class="font-bold">{{ item.quantity * item.simPrice }} đ</p>
          </div>
        </div>
      </div>
      <div v-if="cartItems.length > 0" class="border-t-2 pb-16 pt-2">
        <div class="flex justify-between font-bold">
          <h1>TẠM TÍNH </h1>
          <p class="font-bold text-rose-500">{{ totalAmount }} đ</p>
        </div>
        <p class="text-xs">Đã bao gồm VAT</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCartStore } from '~/stores/cart';
  
  const { getCartItems } = useCartStore();
  
  const cartItems = computed(() => getCartItems());
  
  const totalAmount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.quantity * item.simPrice), 0);
  });
  </script>
  
  <style scoped></style>
  