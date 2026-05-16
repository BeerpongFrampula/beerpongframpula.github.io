import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { GallerySection } from '@/components/home/gallery-section'

const SHOW_ABOUT_SECTION = false
const SHOW_GALLERY_SECTION = true

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {SHOW_ABOUT_SECTION &&<AboutSection />}
      {SHOW_GALLERY_SECTION && <GallerySection />}
    </>
  )
}
