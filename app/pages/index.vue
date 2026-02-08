<script setup lang="ts">
import { profiles } from '~/data/profiles'
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
