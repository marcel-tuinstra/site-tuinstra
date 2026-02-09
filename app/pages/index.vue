<script setup lang="ts">
import { profiles } from '~/data/profiles'

useHead({
  title: 'Tuinstra.dev'
})

useSeoMeta({
  title: 'Tuinstra.dev',
  description: 'Familie Tuinstra — kies het juiste profiel'
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4 py-8">
    <div class="w-full max-w-2xl space-y-10">
      <header class="text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Tuinstra.dev
        </h1>
        <p class="text-lg text-muted max-w-md mx-auto">
          Welkom bij de familie Tuinstra. Kies hieronder wie je zoekt om naar het juiste profiel te gaan.
        </p>
      </header>

      <section aria-labelledby="profile-selection">
        <h2
          id="profile-selection"
          class="sr-only"
        >
          Kies een profiel
        </h2>
        <p class="text-center text-xl font-medium mb-6">
          Wie zoek je?
        </p>
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
