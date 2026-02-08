<script setup lang="ts">
import type { ContactMethod } from '~/types/profile'
import { useContactMeta } from '~/composables/useContactMeta'

const props = defineProps<{
  contact: ContactMethod
}>()

const { getMeta } = useContactMeta()

const meta = computed(() => getMeta(props.contact.type))
const label = computed(() => props.contact.label ?? meta.value.label)
const icon = computed(() => meta.value.icon)

/** Determine if contact opens externally */
const isExternal = computed(() => {
  return props.contact.type !== 'email' && props.contact.type !== 'phone'
})
</script>

<template>
  <UButton
    :to="contact.url"
    :icon="icon"
    :label="label"
    :target="isExternal ? '_blank' : undefined"
    variant="outline"
    color="neutral"
    size="xl"
    block
    class="justify-start"
  />
</template>
