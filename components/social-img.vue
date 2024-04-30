<script setup lang="ts">
const i = 'cursor-pointer size-4 md:size-5 lg:size-6';
const socialOne = [
  { icon: 'line-md:discord', label: 'Discord', to: 'discord.gg/9z6APrYMAq' },
  { icon: 'line-md:twitter-x', label: 'Twitter', to: 'twitter.com/adydetra' },
];
const socialTwo = [
  { icon: 'line-md:github-loop', label: 'GitHub', to: 'github.com/adydetra' },
  { icon: 'line-md:mastodon', label: 'Mastodon', to: 'elk.zone/mastodon.social/@adityawarman' },
];
</script>

<template>
  <div class="container mx-auto flex justify-center gap-8 md:gap-14 lg:gap-28 items-center text-white lg:mb-12 py-12">
    <div class="space-x-8 lg:space-x-20">
      <NuxtLink v-for="(socials, index) in socialOne" :key="index" :to="`https://${socials.to}`" :aria-label="socials.label" alt="" target="_blank">
        <Icon :name="socials.icon" :class="i" />
      </NuxtLink>
    </div>
    <div>
      <img src="/logo.png" alt="logo" class="w-20 lg:w-32 h-full mx-auto rounded-full hover:rounded-3xl">
    </div>
    <div class="space-x-8 lg:space-x-20">
      <NuxtLink v-for="(socials, index) in socialTwo" :key="index" :to="`https://${socials.to}`" :aria-label="socials.label" alt="" target="_blank">
        <Icon :name="socials.icon" :class="i" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss">
.cursor-pointer {
  @apply hover:-mt-1 hover:text-indigo-300 transition-all duration-100 ease-in-out;
}
</style>
