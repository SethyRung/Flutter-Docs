<script lang="ts" setup>
const { footerLinks } = useNavigation();
</script>

<template>
  <footer class="border-t border-default bg-default/75">
    <div
      class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
    >
      <div
        class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
      >
        <UButton
          v-for="{ icon, to } in footerLinks"
          :key="to"
          :icon="icon"
          variant="ghost"
          color="neutral"
          :to="to"
          target="_blank"
        />
      </div>
      <div
        class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"
      ></div>
      <div class="lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <p class="text-center lg:text-start text-muted text-sm">
          Copyright © 2014 The Flutter Authors. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
