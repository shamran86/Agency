import HeroSection from '../sections/hero/HeroSection'
import FeaturesSection from '../sections/features/FeaturesSection'
import ServicesSection from '../sections/services/ServicesSection'
import PortfolioStrip from '../components/ui/PortfolioStrip'
import ContactSection from '../sections/contact/ContactSection'
import FooterSection from '../sections/footer/FooterSection'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <PortfolioStrip />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default HomePage
