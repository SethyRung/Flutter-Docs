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
        children: [
          {
            label: "Introduction",
            description:
              "Introduction to user interface development in Flutter.",
            icon: "i-lucide-palette",
            to: "/docs/user-interface/",
          },
          {
            label: "Widget catalog",
            description: "A catalog of some of Flutter's rich set of widgets.",
            icon: "i-lucide-grid-2x2",
            to: "/docs/user-interface/widget-catalog",
          },
          {
            label: "Layout",
            description:
              "Learn how Flutter's layout mechanism works and how to build your app's layout.",
            icon: "i-lucide-grid-3x2",
            to: "/docs/user-interface/layout",
          },
          {
            label: "Adaptive & responsive design",
            description:
              "It's important to create an app, whether for mobile or web, that responds to size and orientation changes and maximizes the use of each platform.",
            icon: "i-lucide-monitor-smartphone",
            to: "/docs/user-interface/adaptive-responsive-design",
          },
          {
            label: "Design & theming",
            description:
              "How to share colors and font styles throughout an app using Themes.",
            icon: "i-lucide-palette",
            to: "/docs/user-interface/design-theming",
          },
          {
            label: "Interactivity",
            description:
              "How to implement a stateful widget that responds to taps.",
            icon: "i-lucide-mouse-pointer-click",
            to: "/docs/user-interface/interactivity",
          },
          {
            label: "Assets & media",
            description:
              "How to use images (and other assets) in your Flutter app.",
            icon: "i-lucide-images",
            to: "/docs/user-interface/assets-media",
          },
          {
            label: "Navigation & routing",
            description:
              "Overview of Flutter's navigation and routing features",
            icon: "i-lucide-split",
            to: "/docs/user-interface/navigation-routing",
          },
          {
            label: "Animations & transitions",
            description: "How to perform animations in Flutter.",
            icon: "i-lucide-bring-to-front",
            to: "/docs/user-interface/animations-transitions",
          },
          {
            label: "Accessibility",
            description: "Information on Flutter's accessibility support.",
            icon: "i-lucide-person-standing",
            to: "/docs/user-interface/accessibility",
          },
          {
            label: "Internationalization",
            description: "How to internationalize your Flutter app.",
            icon: "i-lucide-languages",
            to: "/docs/user-interface/internationalization",
          },
        ],
      },
      {
        label: "Beyond UI",
        icon: "i-lucide-file-stack",
        children: [
          {
            label: "Data & backend",
            description:
              "Manage local storage, databases, and RESTful API integrations.",
            icon: "i-lucide-list",
            to: "/docs/beyound-ui/data-backend",
          },
          {
            label: "App architecture",
            description:
              "Explore patterns for scalable state management and code organization.",
            icon: "i-lucide-git-fork",
            to: "/docs/beyound-ui/app-architecture",
          },
          {
            label: "Platform integration",
            description:
              "Access native device features using MethodChannels and FFI.",
            icon: "i-lucide-square-terminal",
            to: "/docs/beyound-ui/platform-integration",
          },
          {
            label: "Packages & plugins",
            description:
              "Extend your app's capabilities with the vast Pub.dev ecosystem.",
            icon: "i-lucide-package",
            to: "/docs/beyound-ui/packages-plugins",
          },
          {
            label: "Testing & debugging",
            description:
              "Tools and strategies for unit, widget, and integration testing.",
            icon: "i-lucide-bug",
            to: "/docs/beyound-ui/testing-debugging", // Updated for consistency
          },
          {
            label: "Performance & optimization",
            description:
              "Analyze and improve app startup time, jank, and resource usage.",
            icon: "i-lucide-circle-gauge",
            to: "/docs/beyound-ui/performance-optimization",
          },
          {
            label: "Deployment",
            description:
              "Build, sign, and release your application to various app stores.",
            icon: "i-lucide-rocket",
            to: "/docs/beyound-ui/deployment",
          },
          {
            label: "Add to an existing app",
            description:
              "Integrate Flutter modules into your existing iOS or Android projects.",
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
