<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      avatar: {
        src: "images/flutter.svg",
        ui: {
          root: "w-full h-6 rounded-none bg-transparent",
        },
      },
      to: "/",
    },
  ],
  [
    {
      label: "Get Started",
      icon: "i-lucide-rocket",
      children: [
        {
          label: "Set up Flutter",
          description: "Choose your development platform to get started",
          icon: "i-lucide-house",
        },
        {
          label: "Installation",
          description: "Learn how to install and configure Flutter.",
          icon: "i-lucide-cloud-download",
        },
        {
          label: "Learn Flutter",
          description: "For new Flutter developers",
          icon: "i-lucide-graduation-cap",
        },
        {
          label: "Release notes",
          description:
            "Announcements and release notes for releases to the stable channel",
          icon: "i-lucide-notebook-pen",
        },
      ],
    },
    {
      label: "User interface",
      icon: "i-lucide-layout-dashboard",
      children: [
        {
          label: "Introduction",
          description: "Overview of UI principles",
          icon: "i-lucide-book",
        },
        {
          label: "Widget catalog",
          description: "Explore available widgets",
          icon: "i-lucide-grid",
        },
        {
          label: "Layout",
          description: "Building responsive layouts",
          icon: "i-lucide-layout",
        },
        {
          label: "Adaptive & responsive design",
          description: "Make apps adapt to different screens",
          icon: "i-lucide-smartphone",
        },
        {
          label: "Design & theming",
          description: "Customize appearance and themes",
          icon: "i-lucide-palette",
        },
        {
          label: "Interactivity",
          description: "Interactive elements and behaviors",
          icon: "i-lucide-move",
        },
        {
          label: "Assets & media",
          description: "Manage images, fonts, videos",
          icon: "i-lucide-image",
        },
        {
          label: "Navigation & routing",
          description: "Manage app navigation",
          icon: "i-lucide-compass",
        },
        {
          label: "Animations & transitions",
          description: "Animate elements smoothly",
          icon: "i-lucide-film",
        },
        {
          label: "Accessibility & internationalization",
          description: "Support all users and languages",
          icon: "i-lucide-globe",
        },
      ],
    },
    {
      label: "Beyond UI",
      icon: "i-lucide-box",
      children: [
        {
          label: "Data & backend",
          description: "Work with data and services",
          icon: "i-lucide-database",
        },
        {
          label: "App architecture",
          description: "Design robust app architecture",
          icon: "i-lucide-building",
        },
        {
          label: "Platform integration",
          description: "Integrate with native platforms",
          icon: "i-lucide-plug",
        },
        {
          label: "Packages & plugins",
          description: "Use community and custom plugins",
          icon: "i-lucide-package",
        },
        {
          label: "Testing & debugging",
          description: "Test and debug your app",
          icon: "i-lucide-bug",
        },
        {
          label: "Performance & optimization",
          icon: "i-lucide-activity",
          description: "Optimize your app",
        },
        {
          label: "Deployment",
          icon: "i-lucide-upload-cloud",
          description: "Deploy your app",
        },
        {
          label: "Add to an existing app",
          icon: "i-lucide-plus-circle",
          description: "Integrate Flutter into existing app",
        },
      ],
    },
    {
      label: "Tools & editors",
      icon: "i-lucide-pen-tool",
      children: [
        {
          label: "Flutter concepts",
          icon: "i-lucide-lightbulb",
          description: "Core Flutter concepts",
        },
        {
          label: "Resources",
          icon: "i-lucide-folder-open",
          description: "External resources and links",
        },
      ],
    },
  ],
  [
    {
      icon: "i-lucide-search",
    },
    {
      icon: "i-lucide-sun",
    },
    {
      icon: "i-simple-icons-github",
      to: "https://github.com/SethyRung/Flutter-Docs",
      target: "_blank",
    },
  ],
]);
</script>

<template>
  <header class="border-b border-default py-1.5">
    <UNavigationMenu
      orientation="horizontal"
      :items="items"
      :ui="{
        root: 'max-w-[1440px] px-4 md:px-6 xl:px-8 mx-auto',
        link: 'data-active:before:bg-transparent',
        viewportWrapper: 'max-w-xl left-1/2 -translate-x-1/2',
      }"
    />
  </header>
</template>
