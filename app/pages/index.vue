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
  description: 'Tuinstra.dev — Marcel (Full-Stack Developer) of Daan (Lecturer CMGT / Researcher XR)',
  ogTitle: 'Tuinstra.dev',
  ogDescription: 'Tuinstra.dev — Marcel (Full-Stack Developer) of Daan (Lecturer CMGT / Researcher XR)',
  ogType: 'website',
  ogUrl: 'https://tuinstra.dev/',
  ogSiteName: 'Tuinstra.dev',
  twitterCard: 'summary',
  twitterTitle: 'Tuinstra.dev',
  twitterDescription: 'Tuinstra.dev — Marcel (Full-Stack Developer) of Daan (Lecturer CMGT / Researcher XR)'
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4 py-8">
    <div class="w-full max-w-3xl space-y-10">
      <header class="text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-widest uppercase sm:text-5xl">
          Tuinstra.dev
        </h1>
        <p class="text-lg text-muted">
          Wie zoek je?
        </p>
      </header>

      <section aria-labelledby="profile-selection">
        <h2
          id="profile-selection"
          class="sr-only"
        >
          Kies een profiel
        </h2>
        <div class="grid gap-6 sm:grid-cols-2">
          <ProfileCard
            v-for="profile in profiles"
            :key="profile.slug"
            :profile="profile"
          />
        </div>
      </section>
    </div>
  </div>
</template>
