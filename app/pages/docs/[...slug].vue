<script setup lang="ts">
import { kebabCase } from "scule";

definePageMeta({
  layout: "docs",
});

const route = useRoute();

const { data: page } = await useAsyncData(kebabCase(route.path), () => {
  return queryCollection("docs").path(route.path).first();
});

if (!page.value)
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    message: "The page you are looking for does not exist.",
    fatal: true,
  });

const title = page.value?.seo?.title
  ? page.value.seo.title
  : typeof page.value?.navigation === "object" && page.value?.navigation?.title
    ? page.value.navigation.title
    : page.value?.title;

const description = page.value?.seo?.description
  ? page.value.seo.description
  : page.value?.description;

useSeoMeta({
  title,
  description,
});
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" :description="page.description">
      <template #links>
        <UButton
          v-for="link in page.links"
          :key="link.label"
          color="neutral"
          variant="outline"
          :target="link.to?.startsWith('http') ? '_blank' : undefined"
          v-bind="link"
        >
          <template v-if="link.avatar" #leading>
            <UAvatar
              v-bind="link.avatar"
              size="2xs"
              :alt="`${link.label} avatar`"
            />
          </template>
        </UButton>
        <PageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" class="z-2" />
    </template>
  </UPage>
</template>
