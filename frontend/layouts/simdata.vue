<template>
    <div>
        <div class="grid grid-cols-4">
            <div class="col-span-3 ml-10">
                <header class="grid grid-cols-2 grid-flow-col py-2">
                    <div class="col-span-1 flex items-center pl-8">
                        <NuxtLink to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="size-5 hover:text-rose-500">
                                <path fill-rule="evenodd"
                                    d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
                                    clip-rule="evenodd" />
                            </svg></NuxtLink>

                    </div>
                    <div class="col-span-2"><img alt="Local" class="text-rose-500 w-1/6  h-auto " src="/logo-local1.png"
                            style="color: transparent;"></div>
                </header>
            </div>
            <div class="col-span-1 text-black bg-gray-100">
                <div class=" px-2 flex items-center h-full">
                    Giỏ Hàng
                </div>
            </div>

        </div>
        <slot/>
        <!-- <div class="grid grid-cols-4 border-t-2"> -->
            <!-- <div class="col-span-3 ml-10"> -->
                <!-- <slot />                 -->
            <!-- </div>
            <Cart /> -->
        <!-- </div> -->
    </div>
</template>

<script setup>

</script>

<style scoped></style>