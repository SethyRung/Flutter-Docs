import { createSharedComposable } from "@vueuse/core";

function _useHeaderLinks() {
  const route = useRoute();

  const headerLinks = computed(() => {
    return [
      {
        label: "Get Started",
        icon: "i-lucide-rocket",
        active: route.path.startsWith("/docs/get-started"),
        children: [
          {
            label: "Set up Flutter",
            description: "Choose your development platform to get started",
            icon: "i-lucide-house",
            to: "/docs/get-started/setup",
          },
          {
            label: "Installation",
            description: "Learn how to install and configure Flutter.",
            icon: "i-lucide-cloud-download",
            to: "/docs/get-started/installation",
          },
          {
            label: "Learn Flutter",
            description: "For new Flutter developers",
            icon: "i-lucide-graduation-cap",
            to: "/docs/get-started/learn",
          },
          {
            label: "Release notes",
            description:
              "Announcements and release notes for releases to the stable channel",
            icon: "i-lucide-notebook-pen",
            to: "/docs/get-started/release",
          },
        ],
      },
      {
        label: "User interface",
        icon: "i-lucide-layout-dashboard",
        active: route.path.startsWith("/docs/user-interface"),
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
        active: route.path.startsWith("/docs/beyond-ui"),
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
        active: route.path.startsWith("/docs/tools-editors"),
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
    ];
  });

  return { headerLinks };
}

export const useHeaderLinks = import.meta.client
  ? createSharedComposable(_useHeaderLinks)
  : _useHeaderLinks;

const footerLinks = [
  { label: "X", icon: "i-simple-icons-x", to: "https://x.com/FlutterDev" },
  {
    label: "Discord",
    icon: "i-simple-icons-discord",
    to: "https://discord.com/invite/N7Yshp4",
  },
  {
    label: "Reddit",
    icon: "i-simple-icons-reddit",

    to: "https://www.reddit.com/r/FlutterDev/",
  },
  {
    label: "Stack Overflow",
    icon: "i-simple-icons-stackoverflow",

    to: "https://stackoverflow.com/tags/flutter",
  },
  {
    label: "Github",
    icon: "i-simple-icons-github",
    to: "https://github.com/SethyRung/Flutter-Docs",
  },
];

export const useFooterLinks = () => ({ footerLinks });

const _useNavigation = () => {
  const searchTerm = ref<string>("");

  const { headerLinks } = useHeaderLinks();
  const { footerLinks } = useFooterLinks();

  return {
    searchTerm,
    headerLinks,
    footerLinks,
  };
};

export const useNavigation = import.meta.client
  ? createSharedComposable(_useNavigation)
  : _useNavigation;
