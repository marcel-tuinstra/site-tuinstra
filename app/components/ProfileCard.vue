<script setup lang="ts">
import type { Profile } from '~/types/profile'

defineProps<{
  profile: Profile
}>()
</script>

<template>
  <NuxtLink
    :to="`/${profile.slug}`"
    class="block group"
    :aria-label="`Bekijk profiel van ${profile.name} Tuinstra — ${profile.descriptor}`"
  >
    <UCard
      variant="outline"
      class="h-full text-center transition-all duration-200
             group-hover:ring-2 group-hover:ring-zinc-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5
             group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2
             group-active:scale-[0.98]"
    >
      <div class="space-y-4 py-2">
        <UAvatar
          :src="profile.avatarUrl"
          :alt="profile.name"
          size="3xl"
          class="mx-auto rounded-lg"
        />
        <div class="space-y-2">
          <h2 class="text-2xl font-bold tracking-tight">
            {{ profile.name }} Tuinstra
          </h2>
          <p class="text-muted">
            {{ profile.descriptor }}
          </p>
        </div>
        <span
          class="inline-flex items-center gap-2 text-primary font-medium
                 group-hover:gap-3 transition-all duration-200"
          aria-hidden="true"
        >
          <span>Bekijk profiel</span>
          <UIcon
            name="i-lucide-arrow-right"
            class="size-5"
          />
        </span>
      </div>
    </UCard>
  </NuxtLink>
</template>
