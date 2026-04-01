'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Beer pong action shot' },
  { src: '/images/gallery-2.jpg', alt: 'Tournament winners celebrating' },
  { src: '/images/gallery-3.jpg', alt: 'Tournament table setup' },
  { src: '/images/gallery-4.jpg', alt: 'Crowd watching the match' },
  { src: '/images/gallery-5.jpg', alt: 'Teams competing' },
]

export function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-primary mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mb-4 text-balance">
            Tournament Moments
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Relive the best moments from our past tournaments. Every shot, every celebration, every unforgettable night.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-12 md:px-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="relative aspect-square border-4 border-primary overflow-hidden bg-card neo-brutal-shadow group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-primary text-primary-foreground border-4 border-primary hover:bg-card hover:text-secondary h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="right-0 bg-primary text-primary-foreground border-4 border-primary hover:bg-card hover:text-secondary h-10 w-10 md:h-12 md:w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
