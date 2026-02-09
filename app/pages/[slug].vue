<script setup lang="ts">
import { profiles } from '~/data/profiles'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const profileData = computed(() => profiles.find(p => p.slug === slug.value))

// Handle 404 for unknown profiles
if (!profileData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Profiel niet gevonden'
  })
}

// Non-null assertion after 404 check - profile is guaranteed to exist
const profile = profileData.value

// SEO metadata for profile page
const pageTitle = `${profile.name} Tuinstra — ${profile.descriptor}`
const pageDescription = `${profile.name} Tuinstra — ${profile.descriptor}. Neem contact op via de beschikbare kanalen.`
const pageUrl = `https://tuinstra.dev/${profile.slug}`

useHead({
  title: pageTitle,
  link: [
    { rel: 'canonical', href: pageUrl }
  ]
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'profile',
  ogUrl: pageUrl,
  ogSiteName: 'Tuinstra.dev',
  twitterCard: 'summary',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4 py-8">
    <div class="w-full max-w-md space-y-8">
      <!-- Back navigation -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1 text-sm text-muted hover:text-default transition-colors"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-4"
        />
        Terug naar overzicht
      </NuxtLink>

      <!-- Profile card -->
      <UCard>
        <div class="space-y-6">
          <!-- Header -->
          <header class="text-center space-y-4">
            <UAvatar
              :src="profile.avatarUrl"
              :alt="profile.name"
              size="3xl"
              class="mx-auto rounded-lg"
            />
            <div class="space-y-1">
              <h1 class="text-3xl font-bold tracking-tight">
                {{ profile.name }} Tuinstra
              </h1>
              <p class="text-lg text-muted">
                {{ profile.descriptor }}
              </p>
              <p
                v-if="profile.bio"
                class="text-sm text-muted"
              >
                {{ profile.bio }}
              </p>
            </div>
          </header>

          <!-- Contact methods -->
          <nav
            class="space-y-3"
            aria-label="Contactmethoden"
          >
            <ContactButton
              v-for="contact in profile.contacts"
              :key="contact.type"
              :contact="contact"
            />
          </nav>
        </div>
      </UCard>
    </div>
  </div>
</template>
