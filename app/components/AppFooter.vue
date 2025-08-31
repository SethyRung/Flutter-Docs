<script lang="ts" setup>
const { footerLinks } = useNavigation();
</script>

<template>
  <UFooter
    :ui="{
      root: 'border-t border-default',
    }"
  >
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} The Flutter Authors. All
        rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        v-for="{ icon, to } in footerLinks"
        :key="to"
        :icon="icon"
        variant="ghost"
        color="neutral"
        :to="to"
        target="_blank"
      />
    </template>
  </UFooter>
</template>
