<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-md space-y-8 text-center">
      <header class="space-y-2">
        <p
          class="text-6xl font-bold text-muted-foreground"
          aria-hidden="true"
        >
          {{ error.statusCode }}
        </p>
        <h1 class="text-2xl font-bold tracking-tight">
          <span class="sr-only">Fout {{ error.statusCode }}: </span>
          {{ error.statusCode === 404 ? 'Pagina niet gevonden' : 'Er ging iets mis' }}
        </h1>
        <p class="text-muted">
          {{ error.statusCode === 404
            ? 'De pagina die je zoekt bestaat niet of is verplaatst.'
            : error.message || 'Er is een onverwachte fout opgetreden.'
          }}
        </p>
      </header>

      <UButton
        size="lg"
        icon="i-lucide-arrow-left"
        @click="handleError"
      >
        Terug naar hub
      </UButton>
    </div>
  </div>
</template>
