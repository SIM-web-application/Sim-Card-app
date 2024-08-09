<template>

    <div class="fixed top-0 w-full flex items-center site-header-wrapper bg-[#FF2F48] p-[16px] h-[72px] md:h-[77px]">
        <div class="flex items-center container mx-auto justify-between relative ">
            <div class="logo-local">
                <div class="menu-drawer-mb"><img alt="Menu" fetchpriority="high" width="24" height="24" decoding="async"
                        data-nimg="1" class="block lg:hidden lg:d-none cursor-pointer"
                        src="https://mylocal.vn/_next/static/media/fi_menu.0ff4b95b.svg" style="color: transparent;">
                </div><a href="/"><img alt="Local" loading="lazy" width="92" height="39" decoding="async" data-nimg="1"
                        class="w-[74px] h-[33px] md:w-[92px] md:h-[39px] absolute left-0 right-0 bottom-0 top-0 m-auto lg:relative"
                        src="https://mylocal.vn/_next/static/media/local-logo-white.63f3352e.svg"
                        style="color: transparent;"></a>
            </div>
            <div class="flex justify-between items-center">
                <div class="hidden menu-txt-wrapper gap-[28px] d-none lg:flex"><a href="/sim-sieu-data">
                        <div class="menu-header-item cursor-pointer"><span
                                class="text-[#1e1e1e] lg:text-white text-[18px] leading-[25px]">SIM Siêu Data</span>
                        </div>
                    </a><a href="/sim-so-dep">
                        <div class="menu-header-item cursor-pointer"><span
                                class="text-[#1e1e1e] lg:text-white text-[18px] leading-[25px]">SIM Số đẹp</span></div>
                    </a><a href="/tin-tuc-uu-dai">
                        <div class="menu-header-item cursor-pointer"><span
                                class="text-[#1e1e1e] lg:text-white text-[18px] leading-[25px]">Tin tức &amp; Ưu
                                đãi</span></div>
                    </a><a href="/ho-tro?type=download-app">
                        <div class="menu-header-item cursor-pointer"><span
                                class="text-[#1e1e1e] lg:text-white text-[18px] leading-[25px]">Hỗ trợ</span></div>
                    </a>
                </div>
                <div class="menu-action-wrapper flex gap-[13px] md:min-w-[248px] justify-end md:ml-[96px]"><a
                        href="/sim-sieu-data/gio-hang">
                        <div
                            class="relative w-[48px] h-[48px] md:w-[48px] md:h-[48px] bg-[#F1213A] rounded-[60px] flex items-center justify-center">
                            <img alt="Giỏ hàng" loading="lazy" width="20" height="21" decoding="async" data-nimg="1"
                                src="https://mylocal.vn/_next/static/media/shopping-cart.9b1b797b.svg"
                                style="color: transparent;">
                        </div>
                    </a><a href="/tracking-order">
                        <div
                            class="relative w-[48px] h-[48px] xl:w-[126px] md:h-[48px] bg-[#F1213A] rounded-[90px] flex items-center justify-center p-[10px] gap-[10px]">
                            <img alt="Đơn mua" loading="lazy" width="24" height="25" decoding="async" data-nimg="1"
                                src="https://mylocal.vn/_next/static/media/receipt.8ce073e2.svg"
                                style="color: transparent;"><span class="text-[16px] text-white d-none hidden xl:block">Đơn
                                mua</span>
                        </div>
                    </a></div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped></style>