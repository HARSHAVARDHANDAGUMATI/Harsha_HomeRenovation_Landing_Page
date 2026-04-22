import { useDeferredValue, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { menuCategories, menuItems } from '../../data/menuData'
import { filterMenu } from '../../utils/filterMenu'
import MenuFilter from './MenuFilter'
import MenuList from './MenuList'

const MotionDiv = motion.div

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const deferredSearch = useDeferredValue(searchTerm)

  const filteredItems = useMemo(
    () =>
      filterMenu(menuItems, {
        category: activeCategory,
        search: deferredSearch,
      }),
    [activeCategory, deferredSearch],
  )

  return (
    <section className="section" id="menu">
      <div className="container">
        <MotionDiv
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">Curated menu</p>
          <h2>Search, filter, and add favorites to your cart in a few taps.</h2>
          <p>
            Built for a modern restaurant experience with instant category
            browsing, fast text search, and total price calculation in the cart.
          </p>
        </MotionDiv>

        <MenuFilter
          categories={menuCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultCount={filteredItems.length}
        />

        <MenuList items={filteredItems} />
      </div>
    </section>
  )
}

export default Menu
