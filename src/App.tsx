import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/CursorGlow'

import Home from './pages/Home'
import About from './pages/About'
import WhyChooseUs from './pages/WhyChooseUs'
import WeSupport from './pages/WeSupport'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Technologies from './pages/Technologies'
import TechDetail from './pages/TechDetail'
import Clients from './pages/Clients'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-x-clip">
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/we-support" element={<WeSupport />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/technologies/:slug" element={<TechDetail />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Legal page="disclaimer" />} />
            <Route path="/company-terms" element={<Legal page="company-terms" />} />
            <Route path="/privacy-policy" element={<Legal page="privacy-policy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  )
}
