import { FiSearch } from 'react-icons/fi'

function MenuFilter({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  resultCount,
}) {
  return (
    <div className="menu-toolbar">
      <div className="menu-search">
        <FiSearch />
        <input
          type="search"
          placeholder="Search dishes, ingredients, or categories..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Search menu items"
        />
      </div>

      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'is-active' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="menu-results">{resultCount} dishes available</p>
    </div>
  )
}

export default MenuFilter
