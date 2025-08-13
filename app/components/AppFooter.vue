<script lang="ts" setup>
const socialLinks = [
  { icon: "i-simple-icons-x", url: "https://x.com/FlutterDev" },
  { icon: "i-simple-icons-discord", url: "https://discord.com/invite/N7Yshp4" },
  {
    icon: "i-simple-icons-reddit",
    url: "https://www.reddit.com/r/FlutterDev/",
  },
  {
    icon: "i-simple-icons-stackoverflow",
    url: "https://stackoverflow.com/tags/flutter",
  },
  {
    icon: "i-simple-icons-github",
    url: "https://github.com/SethyRung/Flutter-Docs",
  },
];
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
          v-for="{ icon, url } in socialLinks"
          :key="url"
          :icon="icon"
          variant="ghost"
          color="neutral"
          :to="url"
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
