import { createSharedComposable } from "@vueuse/core";

function _useHeaderLinks() {
  const route = useRoute();

  const headerLinks = computed(() => {
    return [
      {
        label: "Get Started",
        icon: "i-lucide-rocket",
        active: route.path.startsWith("/docs/get-started"),
        to: "/docs/get-started",
        children: [
          {
            label: "Set up Flutter",
            description: "Get started developing your first app with Flutter!",
            icon: "i-lucide-wrench",
            to: "/docs/get-started/setup-flutter",
          },
          {
            label: "Install Flutter",
            description: "Learn how to install the Flutter SDK.",
            icon: "i-lucide-arrow-down-to-line",
            to: "/docs/get-started/install-flutter",
          },
          {
            label: "Learn Flutter",
            description: "Resources to help you learn Flutter.",
            icon: "i-lucide-graduation-cap",
            to: "/docs/get-started/learn-flutter",
          },
          {
            label: "Stay up to date",
            description: "Release notes for Flutter for prior releases.",
            icon: "i-lucide-clock-fading",
            to: "/docs/get-started/stay-up-to-date",
          },
          {
            label: "App solutions",
            description: "How to use Firebase and Firestore with Flutter.",
            icon: "i-lucide-grid-2x2",
            to: "/docs/get-started/app-solutions",
          },
          {
            label: "AI solutions",
            description: "Learn how to use AI to build Flutter apps.",
            icon: "i-lucide-bot",
            to: "/docs/get-started/ai-solutions",
          },
        ],
      },
      {
        label: "User interface",
        icon: "i-lucide-blocks",
        to: "/docs/user-interface",
        children: [
          {
            label: "Introduction",
            description: "",
            icon: "i-lucide-palette",
            to: "/docs/user-interface/",
          },
          {
            label: "Widget catalog",
            description: "",
            icon: "i-lucide-grid-2x2",
            to: "/docs/user-interface/widget-catalog",
          },
          {
            label: "Layout",
            description: "",
            icon: "i-lucide-grid-3x2",
            to: "/docs/user-interface/layout",
          },
          {
            label: "Adaptive & responsive design",
            description: "",
            icon: "i-lucide-monitor-smartphone",
            to: "/docs/user-interface/adaptive-responsive-design",
          },
          {
            label: "Design & theming",
            description: "",
            icon: "i-lucide-palette",
            to: "/docs/user-interface/design-theming",
          },
          {
            label: "Interactivity",
            description: "",
            icon: "i-lucide-mouse-pointer-click",
            to: "/docs/user-interface/interactivity",
          },
          {
            label: "Assets & media",
            description: "",
            icon: "i-lucide-images",
            to: "/docs/user-interface/assets-media",
          },
          {
            label: "Navigation & routing",
            description: "",
            icon: "i-lucide-split",
            to: "/docs/user-interface/navigation-routing",
          },
          {
            label: "Animations & transitions",
            description: "",
            icon: "i-lucide-bring-to-front",
            to: "/docs/user-interface/animations-transitions",
          },
          {
            label: "Accessibility",
            description: "",
            icon: "i-lucide-person-standing",
            to: "/docs/user-interface/accessibility",
          },
          {
            label: "Internationalization",
            description: "",
            icon: "i-lucide-languages",
            to: "/docs/user-interface/internationalization",
          },
        ],
      },
      {
        label: "Beyond UI",
        icon: "i-lucide-file-stack",
        to: "/docs/beyound-ui",
        children: [
          {
            label: "Data & backend",
            description: "",
            icon: "i-lucide-list",
            to: "/docs/beyound-ui/data-backend",
          },
          {
            label: "App architecture",
            description: "",
            icon: "i-lucide-git-fork",
            to: "/docs/beyound-ui/app-architecture",
          },
          {
            label: "Platform integration",
            description: "",
            icon: "i-lucide-square-terminal",
            to: "/docs/beyound-ui/platform-integration",
          },
          {
            label: "Packages & plugins",
            description: "",
            icon: "i-lucide-package",
            to: "/docs/beyound-ui/packages-plugins",
          },
          {
            label: "Testing & debugging",
            description: "",
            icon: "i-lucide-bug",
            to: "/docs/beyound-ui/",
          },
          {
            label: "Performance & optimization",
            description: "",
            icon: "i-lucide-circle-gauge",
            to: "/docs/beyound-ui/performance-optimization",
          },
          {
            label: "Deployment",
            description: "",
            icon: "i-lucide-rocket",
            to: "/docs/beyound-ui/deployment",
          },
          {
            label: "Add to an existing app",
            description: "",
            icon: "i-lucide-circle-plus",
            to: "/docs/beyound-ui/add-to-existing-app",
          },
        ],
      },
      {
        label: "Tools & editors",
        icon: "i-lucide-pocket-knife",
        to: "/docs/tools-editors",
      },
      {
        label: "Flutter concepts",
        icon: "i-lucide-lightbulb",
        to: "/docs/flutter-concepts",
      },
      {
        label: "Resources",
        icon: "i-lucide-server",
        to: "/docs/resources",
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
