<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui";

const featureItems = ref<TabsItem[]>([
  {
    label: "Fast",
    data: {
      title: "Fast",
      description:
        "Flutter code compiles to ARM or Intel machine code as well as JavaScript, for fast performance on any device.",
      video: "/videos/features/fast.mp4",
    },
  },
  {
    label: "Productive",
    data: {
      title: "Productive",
      description:
        "Build and iterate quickly with Hot Reload. Update code and see changes almost instantly, without losing state.",
      video: "/videos/features/productive.mp4",
    },
  },
  {
    label: "Flexible",
    data: {
      title: "Flexible",
      description:
        "Control every pixel to create customized, adaptive designs that look and feel great on any screen.",
      video: "/videos/features/flexible.mp4",
    },
  },
]);
</script>
<template>
  <div
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20"
  >
    <div
      class="flex flex-col lg:grid gap-16 sm:gap-y-24 lg:grid-cols-2 lg:items-center"
    >
      <div>
        <div class="mb-8">
          <UButton
            label="Flutter 3.32 is live"
            trailing-icon="i-lucide-arrow-right"
            size="lg"
            variant="subtle"
            class="rounded-full mb-4"
          />
          <h1
            class="text-pretty tracking-tight font-bold text-highlighted text-5xl sm:text-7xl"
          >
            Build for any <span class="text-primary-500">Screen</span>
          </h1>
          <p class="text-lg mt-6">
            Flutter transforms the development process. Build, test, and deploy
            beautiful mobile, web, desktop, and embedded experiences from a
            single codebase.
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <UButton label="Get started" size="xl" />
          <UButton
            label="How Flutter Works"
            trailing-icon="i-lucide-circle-play"
            size="xl"
            variant="subtle"
            color="neutral"
            to="https://youtu.be/0Xn1QhNtPkQ?si=19aKUJyvmN0LepbF"
          />
        </div>
      </div>
      <div class="mx-auto h-[519px]">
        <img
          class="h-full"
          src="https://storage.googleapis.com/cms-storage-bucket/hero-bmw-mobile.90e34daecca082eb9b28.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col items-center sm:mb-0">
      <UTabs
        :items="featureItems"
        :ui="{
          root: 'w-full gap-8',
          list: 'w-full sm:w-80',
          content: 'flex flex-col sm:flex-row gap-8 items-center',
        }"
      >
        <template #content="{ item }">
          <div class="rounded-lg overflow-clip">
            <video loop autoplay muted playsinline>
              <source :src="item.data?.video" type="video/mp4" />
            </video>
          </div>
          <div class="space-y-6">
            <h3 class="font-bold text-primary-500 text-4xl sm:text-5xl">
              {{ item.data?.title }}
            </h3>
            <p class="text-lg">
              {{ item.data?.description }}
            </p>
            <UButton
              label="Try it in DartPad"
              size="lg"
              variant="subtle"
              class="rounded-full"
              to="https://dartpad.dev/?id=e66e420f2f0201c772f73819711bf290"
            />
          </div>
        </template>
      </UTabs>
    </div>
    <div
      class="flex flex-col sm:flex-row sm:justify-between gap-8 sm:items-center"
    >
      <div class="max-w-80 lg:max-w-xl space-y-6">
        <h3 class="font-bold text-primary-500 text-xl">
          Developer Experience<br />
          <span class="text-highlighted text-4xl sm:text-5xl">
            Transform your workflow
          </span>
        </h3>
        <p class="text-lg">
          Take control of your codebase with automated testing, developer
          tooling, and everything else you need to build production-quality
          apps.
        </p>
        <UButton
          label="Flutter of developers"
          size="lg"
          variant="subtle"
          class="rounded-full"
          to="https://flutter.dev/development"
        />
      </div>
      <img src="/images/developer-experience.jpg" alt="" class="max-w-md" />
    </div>
    <div class="flex flex-col lg:grid gap-8 sm:gap-16">
      <div class="space-y-6">
        <h3
          class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center"
        >
          A Global Open Source Community Supported by Google, open to everyone
        </h3>
        <p class="mx-auto max-w-3xl text-lg text-center">
          Collaborate on the open source framework, contribute to the package
          ecosystem on pub.dev, and find help when you need it.
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/4 flex flex-col gap-4">
          <UButton
            color="neutral"
            variant="subtle"
            block
            class="p-4 sm:p-6 justify-start"
          >
            <div class="flex rounded-lg bg-default p-2 border border-default">
              <UIcon
                name="i-simple-icons-discord"
                size="24"
                class="text-[#5865F2]"
              />
            </div>
            <div class="grow text-start">
              <span class="font-semibold text-lg text-highlighted">71.5K</span>
              <p class="text-sm">Members</p>
            </div>
          </UButton>
          <UButton
            color="neutral"
            variant="subtle"
            block
            class="p-4 sm:p-6 justify-start"
          >
            <div class="flex rounded-lg bg-default p-2 border border-default">
              <UIcon
                name="i-simple-icons-github"
                size="24"
                class="text-highlighted"
              />
            </div>
            <div class="grow text-start">
              <span class="font-semibold text-lg text-highlighted">172K</span>
              <p class="text-sm">Github Starts</p>
            </div>
          </UButton>
        </div>
        <UButton color="neutral" variant="subtle" block class="p-4 sm:p-6">
          <div class="flex flex-col items-center justify-around gap-1">
            <span class="text-xl font-semibold">Open source</span>
            <p class="text-muted text-center">
              Flutter works with existing code, is used by developers and
              organizations around the world, and is free and open source.
            </p>
            <UButton
              label="Start contributing"
              trailing-icon="i-simple-icons-github"
              color="neutral"
              variant="subtle"
              to="https://github.com/flutter/flutter"
              class="mt-4 text-default bg-default"
            />
          </div>
        </UButton>
        <div class="md:w-1/4 flex flex-col gap-4">
          <UButton
            color="neutral"
            variant="subtle"
            block
            class="p-4 sm:p-6 justify-start"
          >
            <div class="flex rounded-lg bg-default p-2 border border-default">
              <UIcon
                name="i-simple-icons-reddit"
                size="24"
                class="text-[#FF4500]"
              />
            </div>
            <div class="grow text-start">
              <span class="font-semibold text-lg text-highlighted">160K</span>
              <p class="text-sm">Members</p>
            </div>
          </UButton>
          <UButton
            color="neutral"
            variant="subtle"
            block
            class="p-4 sm:p-6 justify-start"
          >
            <div class="flex rounded-lg bg-default p-2 border border-default">
              <UIcon
                name="i-simple-icons-stackoverflow"
                size="24"
                class="text-[#F58025]"
              />
            </div>
            <div class="grow text-start">
              <span class="font-semibold text-lg text-highlighted">179.7K</span>
              <p class="text-sm">Questions</p>
            </div>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
