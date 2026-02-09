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
    <div class="space-y-4">
      <UAvatar
        :src="profile.avatarUrl"
        :alt="profile.name"
        size="3xl"
        class="mx-auto rounded-lg"
      />
      <div class="space-y-1">
        <h2 class="text-2xl font-bold">
          {{ profile.name }}
        </h2>
        <p class="text-muted">
          {{ profile.descriptor }}
        </p>
      </div>
      <UButton
        :to="`/${profile.slug}`"
        label="Bekijk profiel"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
      />
    </div>
  </UCard>
</template>
