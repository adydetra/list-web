<template>
  <div class="container mx-auto flex justify-center gap-8 md:gap-14 lg:gap-28 items-center text-white lg:mb-12 py-12">
    <div class="space-x-8 lg:space-x-20">
      <NuxtLink to="https://discord.gg/9z6APrYMAq" alt="" target="_blank"><Icon name="line-md:discord" :class="i" /></NuxtLink>
      <NuxtLink to="https://twitter.com/adydetra" alt="" target="_blank"><Icon name="line-md:twitter-x" :class="i" /></NuxtLink>
    </div>
    <div>
      <img src="/logo.png" alt="logo" class="w-20 lg:w-32 h-full mx-auto rounded-full hover:rounded-3xl" />
    </div>
    <div class="space-x-8 lg:space-x-20">
      <NuxtLink to="https://github.com/devdewa" alt="" target="_blank"><Icon name="line-md:github-loop" :class="i" /></NuxtLink>
      <NuxtLink to="https://mastodon.social/@adityawarman" alt="" target="_blank"><Icon name="line-md:mastodon" :class="i" /></NuxtLink>
    </div>
  </div>
</template>

<style>
.cursor-pointer {
  @apply hover:-mt-1 hover:text-indigo-300 transition-all duration-100 ease-in-out;
}
</style>

<script lang="ts" setup>
const i = "cursor-pointer w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6";
</script>
