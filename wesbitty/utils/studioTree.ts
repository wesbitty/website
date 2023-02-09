import { children } from 'cheerio/lib/api/traversing'
import { Studio } from 'wesjet/jetpack'
import { TreeNode } from 'types/TreeNode'

export const buildStudiosTree = (studios: Studio[], parentPathNames: string[] = []): TreeNode[] => {
  const level = parentPathNames.length

  return studios
    .filter(
      (_) =>
        _.pathSegments.length === level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join('/')
          .startsWith(parentPathNames.join('/')),
    )
    .sort((a, b) => a.pathSegments[level].order - b.pathSegments[level].order)
    .map<TreeNode>((studio) => ({
      nav_title: studio.nav_title ?? null,
      title: studio.title,
      label: studio.label ?? null,
      excerpt: studio.excerpt ?? null,
      collapsible: false,
      collapsed: false,
      urlPath: '/' + studio.pathSegments.map((_: PathSegment) => _.pathName).join('/'),
      children: buildStudiosTree(
        studios,
        studio.pathSegments.map((_: PathSegment) => _.pathName),
      ),
    }))
}
