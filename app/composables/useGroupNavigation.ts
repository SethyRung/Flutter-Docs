import type { ContentNavigationItem } from "@nuxt/content";
import { findPageChildren } from "@nuxt/content/utils";

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
        children: item.children?.map((child) => ({
          ...child,
          icon: undefined,
        })),
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
