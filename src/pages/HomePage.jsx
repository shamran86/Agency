import HeroSection from '../sections/hero/HeroSection'
import FeaturesSection from '../sections/features/FeaturesSection'
import ServicesSection from '../sections/services/ServicesSection'
import TestimonialsSection from '../sections/testimonials/TestimonialsSection'
import ContactSection from '../sections/contact/ContactSection'
import FooterSection from '../sections/footer/FooterSection'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default HomePage
