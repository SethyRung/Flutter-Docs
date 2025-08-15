<script setup lang="ts">
const route = useRoute();
const { data: docs } = await useAsyncData(route.path, () => {
  return queryCollection("docs").path(route.path).first();
});

if (!docs.value)
  throw createError({
    statusCode: 404,
    fatal: true,
    message: "Page not found!",
  });
</script>

<template>
  <ContentRenderer
    v-if="docs"
    :value="docs"
    class="content w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-20"
  />
</template>
