<template>
  <div class="container mx-auto flex justify-center gap-8 md:gap-14 lg:gap-28 items-center text-white lg:mb-12 py-12">
    <div class="space-x-8 lg:space-x-20">
      <NuxtLink to="https://discord.gg/WzpazrK9NT" target="_blank"><Icon name="prime:discord" class="cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"/></NuxtLink>
      <NuxtLink to="https://twitter.com/adityawarman_P" target="_blank"><Icon name="prime:twitter" class="cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"/></NuxtLink>
    </div>
    <div>
      <img src="/logo.png" alt="logo" class="w-20 lg:w-32 mx-auto rounded-full hover:rounded-3xl">
    </div>
    <div class="space-x-8 lg:space-x-20">
      <NuxtLink to="https://github.com/devdewa" target="_blank"><Icon name="prime:github" class="cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"/></NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/adityawarman-dewa-putra/" target="_blank"><Icon name="prime:linkedin" class="cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"/></NuxtLink>
    </div>
  </div>
</template>

<style>

.cursor-pointer {
  @apply hover:-mt-1 hover:text-indigo-300 transition-all duration-100 ease-in-out;
}

</style>