<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1">
      <slot />
    </main>

    <footer class="py-6 text-center text-sm text-muted">
      <p>&copy; {{ new Date().getFullYear() }} Tuinstra.dev</p>
    </footer>
  </div>
</template>
