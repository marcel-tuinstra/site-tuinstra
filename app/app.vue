<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'nl'
  }
})

const title = 'Tuinstra.dev'
const description = 'Familie Tuinstra — Marcel & Daan. Developers, designers, makers.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp>
    <!-- Skip to main content link for keyboard users -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
    >
      Ga naar hoofdinhoud
    </a>
    <NuxtLayout>
      <main id="main-content">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </UApp>
</template>
