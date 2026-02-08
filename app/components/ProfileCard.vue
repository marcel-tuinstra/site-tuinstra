<script setup lang="ts">
import type { Profile } from '~/types/profile'

const props = defineProps<{
  profile: Profile
}>()

/** Get the primary contact (first in array) for the CTA */
const primaryContact = computed(() => props.profile.contacts[0])

/** Generate a display label for a contact type */
function getContactLabel(type: string): string {
  const labels: Record<string, string> = {
    website: 'Bekijk website',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-mail',
    phone: 'Bel'
  }
  return labels[type] ?? 'Contact'
}
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
        v-if="primaryContact"
        :to="primaryContact.url"
        :label="primaryContact.label ?? getContactLabel(primaryContact.type)"
        target="_blank"
        size="lg"
      />
    </div>
  </UCard>
</template>
