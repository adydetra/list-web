<template>
  <div class="w-full max-w-6xl mx-auto px-2 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-3 lg:space-x-12 rounded-xl bg-blue-400/20 p-1">
        <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-sky-200',
              'ring-slate-200 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected ? 'bg-slate-100 shadow text-sky-800' : 'text-sky-200 hover:bg-slate-200/[0.12] hover:text-sky-200',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="['rounded-xl bg-slate-300 p-3', 'ring-slate-200 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2']"
        >
          <ul>
            <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 hover:bg-gray-200">
              <div class="flex justify-between items-center">
                <h3 :class="['text-sm font-medium leading-5', post.class]"><Icon :name="post.icon" class="cursor-pointer w-3 h-3 -mt-0.5" /> {{ post.title }}</h3>
                <p class="hidden md:flex text-xs space-x-4 font-light text-gray-400">
                  <Icon :name="post.mobile" class="w-3.5 h-3.5" :class="i" />
                  <Icon :name="post.desktop" class="w-3.5 h-3.5" :class="i" />
                  <Icon :name="post.webpwa" class="w-3.5 h-3.5" :class="i" />
                </p>
              </div>

              <ul class="mt-1 flex space-x-1 items-center text-[10px] md:text-xs font-normal leading-4 text-gray-500">
                <li>{{ post.tech }}</li>
              </ul>

              <ul class="md:hidden mt-4 md:mt-5 opacity-50 flex space-x-1 items-center text-xs font-normal leading-4 text-gray-500">
                <li class="space-x-3">
                  <Icon :name="post.mobile" class="w-3 h-3" :class="i" />
                  <Icon :name="post.desktop" class="w-3 h-3" :class="i" />
                  <Icon :name="post.webpwa" class="w-3 h-3" :class="i" />
                </li>
              </ul>

              <NuxtLink
                :to="post.to"
                alt=""
                aria-label="Content"
                target="_blank"
                :class="['absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2']"
              >
              </NuxtLink>
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

useSeoMeta({
  description: "A list of all my created websites running on (online) hosting. Simple layout, and PWA for easy access. ",
});

const i = "cursor-pointer -mt-0.5";

const categories = ref({
  Individual: [
    {
      id: 1,
      title: "Personal Site",
      to: "https://adydetra.my.id",
      tech: "Nuxt | Tailwind CSS",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-nuxt",
    },
    {
      id: 2,
      title: "Wangyland",
      to: "https://wangyland.vercel.app",
      tech: "Nuxt | Tailwind CSS",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-nuxt",
    },
    {
      id: 3,
      title: "Protem",
      to: "https://pt-teknologi-pustaka-indonesia-buku.vercel.app",
      tech: "Vue 3 | Tailwind CSS",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-vue",
    },
    {
      id: 4,
      title: "Admin Panel",
      to: "https://pt-teknologi-pustaka-indonesia-admin-panel.vercel.app",
      tech: "Vue 3 | Tailwind CSS",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-vue",
    },
    {
      id: 5,
      title: "Insta",
      to: "https://insta.adydetra.my.id",
      tech: "Nuxt | Tailwind CSS",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "simple-icons:pwa",
      icon: "vscode-icons:file-type-nuxt",
    },
    {
      id: 6,
      title: "Games",
      to: "https://games.adydetra.my.id",
      tech: "Nuxt | Tailwind CSS",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "simple-icons:pwa",
      icon: "vscode-icons:file-type-nuxt",
    },
  ],
  Client: [
    {
      id: 1,
      title: "Learning Centre Indonesia",
      to: "https://learningcentreindonesia.com/web",
      tech: "Laravel 8 | Bootstrap 4.6 | jQuery | MySQL",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-blade",
    },
    {
      id: 2,
      title: "Averroes Unipessoal. Lda",
      to: "http://averroes.info",
      tech: "HTML | CSS | Bootstrap 5.2",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-html",
    },
  ],
  Work: [
    {
      id: 1,
      title: "Warranty Claim",
      to: "https://claim.suryaprima.net",
      tech: "Laravel 8 | Bootstrap 4.6 | jQuery | MySQL",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "vscode-icons:file-type-blade",
    },
    {
      id: 2,
      title: "CRM (Perfex CRM)",
      to: "https://crm.suryaprima.net",
      tech: "CodeIgniter 3 | MySQL",
      mobile: "ic:outline-phone-iphone",
      desktop: "ic:outline-desktop-windows",
      webpwa: "streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network",
      icon: "logos:codeigniter-icon",
    },
  ],
});
</script>
