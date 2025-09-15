<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  queryCollectionNavigation("docs"),
);

provide("navigation", navigation);
</script>

<template>
  <UApp>
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
    <ClientOnly>
      <LazyUContentSearch shortcut="meta_k" :fuse="{ resultLimit: 42 }" />
    </ClientOnly>
    <!-- v-model:search-term="searchTerm"
    :files="files"
    :navigation="navigation" -->
  </UApp>
</template>
