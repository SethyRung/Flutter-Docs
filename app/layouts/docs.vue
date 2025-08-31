<script lang="ts" setup></script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation
              variant="link"
              highlight
              :ui="{ linkTrailingBadge: 'font-semibold uppercase' }"
            />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
