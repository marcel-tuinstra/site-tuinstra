<script setup lang="ts">
import type { Profile } from '~/types/profile'

defineProps<{
  profile: Profile
}>()
</script>

<template>
  <UCard
    :to="`/${profile.slug}`"
    class="text-center hover:ring-2 hover:ring-primary transition-all cursor-pointer"
  >
    <div class="space-y-3">
      <h2 class="text-2xl font-bold">
        {{ profile.name }}
      </h2>
      <p class="text-muted">
        {{ profile.descriptor }}
      </p>
      <UButton
        :to="`/${profile.slug}`"
        label="Bekijk profiel"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
      />
    </div>
  </UCard>
</template>
