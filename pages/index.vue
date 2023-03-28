<template>
  <div class="w-full max-w-6xl mx-auto px-2 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-3 lg:space-x-12 rounded-xl bg-blue-400/20 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-200',
              'ring-slate-200 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-slate-200 shadow text-gray-800'
                : 'text-gray-200 hover:bg-slate-200/[0.12] hover:text-gray-200',
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
          :class="[
            'rounded-xl bg-slate-300 p-3',
            'ring-slate-200 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-200"
            >
              <h3 :class="['text-sm font-medium leading-5', post.class]">
                {{ post.title }}
              </h3>

              <ul
                class="mt-1 flex space-x-1 items-center text-xs font-normal leading-4 text-gray-500"
              >
                <li>{{ post.tech }}</li>
              </ul>

              <NuxtLink
                :to="post.link"
                target="_blank"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
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
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  Individual: [
    {
      id: 1,
      title: "Dewa Programming",
      link: "https://dewaprogramming.vercel.app/",
      tech: "HTML | CSS | Bootstrap 4.6 | JQuery | Vue Js",
    },
    {
      id: 2,
      title: "Wangyland | Minecraft SERVER",
      link: "https://wangyland.vercel.app/",
      tech: "Nuxt 3 | Tailwind CSS",
    },
  ],
  Client: [
    {
      id: 1,
      title: "Learning Centre Indonesia",
      link: "https://learningcentreindonesia.com/web/",
      tech: "Laravel 8 | Bootstrap 4.6 | JQuery",
    },
  ],
  Work: [
    {
      id: 1,
      title: "Claim",
      link: "https://claim.suryaprima.net/",
      tech: "Laravel 8 | Bootstrap 4.6 | JQuery",
    },
  ],
})
</script>