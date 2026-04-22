import { AnimatePresence } from 'framer-motion'
import MenuCard from './MenuCard'

function MenuList({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h3>No dishes matched your search.</h3>
        <p>Try a different keyword or switch to another category.</p>
      </div>
    )
  }

  return (
    <div className="menu-grid">
      <AnimatePresence>
        {items.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default MenuList
