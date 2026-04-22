import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Offers from '../components/Offers/Offers'
import Reviews from '../components/Reviews/Reviews'
import BookingForm from '../components/BookingForm/BookingForm'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

function Home() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Offers />
        <Reviews />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <Cart />
    </div>
  )
}

export default Home
