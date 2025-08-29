<script lang="ts" setup>
const features = ref([
  {
    title: "Fast",
    description:
      "Flutter code compiles to ARM or Intel machine code as well as JavaScript, for fast performance on any device.",
    icon: "i-lucide-fast-forward",
    to: "https://dartpad.dev/?id=e66e420f2f0201c772f73819711bf290",
  },
  {
    title: "Productive",
    description:
      "Build and iterate quickly with Hot Reload. Update code and see changes almost instantly, without losing state.",
    icon: "i-lucide-chart-no-axes-gantt",
    to: "https://dartpad.dev/?id=e66e420f2f0201c772f73819711bf290",
  },
  {
    title: "Flexible",
    description:
      "Control every pixel to create customized, adaptive designs that look and feel great on any screen.",
    icon: "i-lucide-replace-all",
    to: "https://dartpad.dev/?id=e66e420f2f0201c772f73819711bf290",
  },
]);
</script>
<template>
  <div>
    <UPageHero
      description="Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase."
      orientation="horizontal"
      :links="[
        {
          label: 'Get started',
        },
        {
          label: 'How Flutter Works',
          to: 'https://youtu.be/0Xn1QhNtPkQ?si=19aKUJyvmN0LepbF',
          color: 'neutral',
          variant: 'subtle',
          trailingIcon: 'i-lucide-circle-play',
        },
      ]"
      :ui="{
        container: 'py-6 sm:py-12 lg:py-20',
      }"
    >
      <template #headline>
        <UButton
          label="Flutter 3.32 is live"
          trailing-icon="i-lucide-arrow-right"
          size="lg"
          variant="subtle"
          class="rounded-full mb-4"
        />
      </template>
      <template #title>
        <h1>Build for any <span class="text-primary-500">Screen</span></h1>
      </template>
      <div class="mx-auto h-[519px]">
        <img
          class="h-full"
          src="https://storage.googleapis.com/cms-storage-bucket/hero-bmw-mobile.90e34daecca082eb9b28.png"
          alt="App screenshot"
        />
      </div>
    </UPageHero>

    <UPageSection
      title="Flutter"
      description="Flutter is an open source framework for building beautiful, natively compiled, multi-platform applications from a single codebase."
      :features="features"
      :ui="{
        container: 'max-w-5xl py-10 sm:py-18 lg:py-26',
        title: 'text-primary-500',
      }"
    />

    <UPageCTA
      description="Take control of your codebase with automated testing, developer tooling, and everything else you need to build production-quality apps."
      orientation="horizontal"
      :links="[
        {
          label: 'Flutter of developers',
          variant: 'subtle',
          class: 'rounded-full',
        },
      ]"
      class="rounded-none"
    >
      <template #title>
        <span class="text-primary-500 text-xl">Developer Experience</span><br />
        Transform your workflow
      </template>
      <img
        src="/images/developer-experience.jpg"
        alt="Illustration"
        class="max-w-md rounded-lg"
      />
    </UPageCTA>

    <UPageCTA
      title="A Global Open Source Community Supported by Google, open to everyone"
      description="Collaborate on the open source framework, contribute to the package
          ecosystem on pub.dev, and find help when you need it."
      :ui="{
        root: 'rounded-none',
        body: 'flex flex-col md:flex-row gap-4',
      }"
    >
      <template #body>
        <div class="md:w-1/4 flex flex-col gap-4">
          <UPageCard
            icon="i-simple-icons-discord"
            title="71.5K"
            description="Members"
            variant="subtle"
            :ui="{
              wrapper: 'flex-row gap-2',
              leading: 'flex rounded-lg bg-default p-2 border border-default',
              leadingIcon: 'text-[#5865F2]',
            }"
          />
          <UPageCard
            icon="i-simple-icons-github"
            title="172K"
            description="Github Starts"
            variant="subtle"
            :ui="{
              wrapper: 'flex-row gap-2',
              leading: 'flex rounded-lg bg-default p-2 border border-default',
              leadingIcon: 'text-[##181717]',
            }"
          />
        </div>
        <UPageCTA
          title="Open source"
          description=" Flutter works with existing code, is used by developers and
              organizations around the world, and is free and open source."
          variant="subtle"
          :links="[
            {
              label: 'Start contributing',
              trailingIcon: 'i-simple-icons-github',
              color: 'neutral',
              variant: 'subtle',
              to: 'https://github.com/flutter/flutter',
            },
          ]"
          :ui="{
            root: 'flex-1',
            container: 'p-4 lg:p-6',
            title: 'sm:text-xl font-semibold',
            description: 'sm:text-base mt-0',
            links: 'mt-4',
          }"
        />
        <div class="md:w-1/4 flex flex-col gap-4">
          <UPageCard
            icon="i-simple-icons-reddit"
            title="160K"
            description="Members"
            variant="subtle"
            :ui="{
              wrapper: 'flex-row gap-2',
              leading: 'flex rounded-lg bg-default p-2 border border-default',
              leadingIcon: 'text-[#FF4500]',
            }"
          />
          <UPageCard
            icon="i-simple-icons-stackoverflow"
            title="179.7K"
            description="Questions"
            variant="subtle"
            :ui="{
              wrapper: 'flex-row gap-2',
              leading: 'flex rounded-lg bg-default p-2 border border-default',
              leadingIcon: 'text-[#F58025]',
            }"
          />
        </div>
      </template>
    </UPageCTA>
  </div>
</template>
