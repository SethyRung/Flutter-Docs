import type { ContentNavigationItem } from "@nuxt/content";
import { findPageChildren } from "@nuxt/content/utils";

/**
 * Recursively processes navigation item children, handling deep nesting
 * by removing icons and normalizing titles across all levels.
 */
function processChildrenRecursive(
  children: ContentNavigationItem[],
  parentPath: string,
): ContentNavigationItem[] {
  return children.map((child) => {
    const processedChild: ContentNavigationItem = {
      ...child,
      title:
        child.path === parentPath
          ? ((child.shortTitle ?? "Overview") as string)
          : ((child.shortTitle ?? child.title) as string),
      icon: undefined,
    };

    // Recursively process nested children if they exist
    if (child.children?.length) {
      processedChild.children = processChildrenRecursive(
        child.children,
        child.path,
      );
    }

    return processedChild;
  });
}

function groupChildrenByCategory(
  items: ContentNavigationItem[],
  slug: string,
): ContentNavigationItem[] {
  if (!items.length) {
    return [];
  }

  const groups: ContentNavigationItem[] = [];

  const categorized: Record<string, ContentNavigationItem[]> = {};
  const uncategorized: ContentNavigationItem[] = [];

  // Remove icons while grouping
  for (const item of items) {
    if (item.category) {
      categorized[item.category as string] =
        categorized[item.category as string] || [];
      categorized[item.category as string]?.push(item);
    } else {
      uncategorized.push(item);
    }
  }

  if (uncategorized.length) {
    const withChildren = uncategorized
      .filter((item) => item.children?.length)
      ?.map((item) => ({
        ...item,
        title: (item.shortTitle ?? item.title) as string,
        children: processChildrenRecursive(item.children ?? [], item.path),
      }));

    const withoutChildren = uncategorized.filter(
      (item) => !item.children?.length,
    );

    if (withoutChildren.length) {
      groups.push({
        title: "Overview",
        path: `/docs/${slug}`,
        children: withoutChildren?.map((item) => ({
          ...item,
          icon: undefined,
        })),
      });
    }

    groups.push(...withChildren);
  }

  return groups;
}

export const useGroupNavigation = (
  navigation: Ref<ContentNavigationItem[] | undefined>,
) => {
  const groupedNavigation = computed(() => {
    const route = useRoute();

    const slug = route.params.slug?.[0] as string;
    const children = findPageChildren(navigation?.value, `/docs/${slug}`, {
      indexAsChild: true,
    });

    return groupChildrenByCategory(children, slug);
  });

  return {
    groupedNavigation,
  };
};
