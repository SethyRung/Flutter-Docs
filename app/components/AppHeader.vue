<script lang="ts" setup>
const { headerLinks } = useNavigation();

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <UHeader mode="slideover" title="Flutter">
    <template #title>
      <ClientOnly>
        <UAvatar
          :src="isDark ? '/images/flutter-white.svg' : '/images/flutter.svg'"
          :ui="{
            root: 'w-full h-6 rounded-none bg-transparent',
          }"
        />
      </ClientOnly>
    </template>

    <UNavigationMenu :items="headerLinks" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Search" :kbds="['meta', 'K']">
        <UContentSearchButton />
      </UTooltip>

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/SethyRung/Flutter-Docs"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
    <template #body>
      <UNavigationMenu
        orientation="vertical"
        variant="link"
        :items="headerLinks"
        :ui="{
          root: '-mx-2.5 -mt-1.5',
        }"
      />
    </template>
  </UHeader>
</template>
