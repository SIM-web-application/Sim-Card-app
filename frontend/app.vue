import { NuxtLayout } from './.nuxt/components';
<template>
  <div>
    <NuxtLayout >
      <header class="my-3">        
        <nav class="flex justify-between p-2">
          <div>
            <p><span>icon</span>Viettel</p>
          </div>        
          <ul>
            <li class="flex gap-3">
              <NuxtLink class="btn bg-slate-200" to="/">Home</NuxtLink>
              <NuxtLink class="btn bg-slate-200" to="/event">Event</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <NuxtPage />
      <footer class="bg-slate-500 h-20 text-black">FOOTER</footer>
    </NuxtLayout>
  </div>
</template>
