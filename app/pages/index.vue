<script setup lang="ts">
import { profiles } from '~/data/profiles'

// SEO metadata for hub page
useHead({
  title: 'Tuinstra.dev',
  link: [
    { rel: 'canonical', href: 'https://tuinstra.dev/' }
  ]
})

useSeoMeta({
  title: 'Tuinstra.dev',
  description: 'Familie Tuinstra — kies het juiste profiel. Vind Marcel (Full-Stack Developer) of Daan (Lecturer CMGT / Researcher XR).',
  ogTitle: 'Tuinstra.dev',
  ogDescription: 'Familie Tuinstra — kies het juiste profiel',
  ogType: 'website',
  ogUrl: 'https://tuinstra.dev/',
  ogSiteName: 'Tuinstra.dev',
  twitterCard: 'summary',
  twitterTitle: 'Tuinstra.dev',
  twitterDescription: 'Familie Tuinstra — kies het juiste profiel'
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-2xl space-y-8">
      <header class="text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Tuinstra.dev
        </h1>
        <p class="mt-4 text-lg text-muted">
          Wie zoek je?
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2">
        <ProfileCard
          v-for="profile in profiles"
          :key="profile.slug"
          :profile="profile"
        />
      </div>
    </div>
  </div>
</template>
