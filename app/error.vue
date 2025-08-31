<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <UApp>
    <AppHeader />

    <UError
      :error="error"
      class="min-h-[calc(100vh-var(--ui-header-height)-64px)]"
    />

    <AppFooter />
  </UApp>
</template>
