import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import Team from "@/components/Team"
import Projects from "@/components/Projects"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Team />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
