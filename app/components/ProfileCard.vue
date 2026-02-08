<script setup lang="ts">
import type { Profile } from '~/types/profile'

defineProps<{
  profile: Profile
}>()
</script>

<template>
  <UCard class="text-center">
    <div class="space-y-3">
      <h2 class="text-2xl font-bold">
        {{ profile.name }}
      </h2>
      <p class="text-muted">
        {{ profile.descriptor }}
      </p>
      <UButton
        :to="profile.ctaLink"
        :label="profile.ctaLabel"
        target="_blank"
        size="lg"
      />
    </div>
  </UCard>
</template>
