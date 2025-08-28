<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const route = useRoute();
const { data: docs } = await useAsyncData(route.path, () => {
  return queryCollection("docs").path(route.path).first();
});

if (!docs.value)
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    message: "The page you are looking for does not exist.",
    fatal: true,
  });
</script>

<template>
  <ContentRenderer
    v-if="docs"
    :value="docs"
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-20"
  />
</template>
