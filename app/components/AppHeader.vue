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
  <header
    class="border-b border-default bg-default/75 backdrop-blur h-[63.8px] sticky top-0 z-50"
  >
    <div
      class="max-w-[1440px] h-full px-4 md:px-6 xl:px-8 mx-auto flex items-center justify-between"
    >
      <div class="flex-1">
        <ClientOnly>
          <UButton
            :avatar="{
              src: isDark ? '/images/flutter-white.svg' : '/images/flutter.svg',
            }"
            variant="ghost"
            :ui="{
              base: 'hover:bg-transparent',
              leadingAvatar: 'w-full h-6 rounded-none bg-transparent',
            }"
            to="/"
          />
        </ClientOnly>
      </div>
      <div class="hidden lg:flex">
        <UNavigationMenu
          orientation="horizontal"
          variant="link"
          :items="headerLinks"
          :ui="{
            root: '',
            link: 'data-active:before:bg-transparent',
            viewportWrapper: 'max-w-xl left-1/2 -translate-x-1/2',
          }"
        />
      </div>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UButton icon="i-lucide-search" variant="ghost" color="neutral" />
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />
        <UButton
          icon="i-simple-icons-github"
          variant="ghost"
          color="neutral"
          to="https://github.com/SethyRung/Flutter-Docs"
          target="_blank"
        />
        <USlideover
          :overlay="false"
          :ui="{
            content:
              'top-[63.8px] max-h-[calc(100vh-63.8px)] max-w-screen p-4 sm:p-6 overflow-y-auto',
          }"
        >
          <template #default="{ open }">
            <UButton
              :icon="open ? 'i-lucide-x' : 'i-lucide-menu'"
              variant="ghost"
              color="neutral"
              class="lg:hidden"
            />
          </template>
          <template #content>
            <UNavigationMenu
              orientation="vertical"
              variant="link"
              :items="headerLinks"
              :ui="{
                root: '-mx-2.5 -mt-1.5',
              }"
            />
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>
