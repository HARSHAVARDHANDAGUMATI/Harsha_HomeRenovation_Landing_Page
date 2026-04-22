import Fuse from 'fuse.js'

const searchConfig = {
  includeScore: true,
  shouldSort: true,
  threshold: 0.35,
  keys: ['name', 'description', 'category', 'tag'],
}

export function filterMenu(items, { category = 'All', search = '' } = {}) {
  const normalizedSearch = search.trim()
  const categoryFiltered =
    category === 'All'
      ? items
      : items.filter((item) => item.category === category)

  if (!normalizedSearch) {
    return categoryFiltered
  }

  const fuse = new Fuse(categoryFiltered, searchConfig)
  return fuse.search(normalizedSearch).map((result) => result.item)
}

export default filterMenu
