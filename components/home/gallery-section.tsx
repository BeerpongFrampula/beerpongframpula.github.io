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
  { src: '/images/1.png', alt: 'Locandina' },
  { src: '/images/2.png', alt: 'Programma serata' },
  { src: '/images/3.png', alt: 'Costi iscrizione' },
  { src: '/images/4.png', alt: 'Aperitivo' },
  { src: '/images/5.png', alt: 'Musica' },
]

export function GallerySection() {
  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-lg font-bold uppercase tracking-wider border-2 border-secondary mb-1">
            Info torneo
          </span>
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
                  <div className="relative aspect-[3/4] border-8 border-secondary overflow-hidden bg-card group">
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
            <CarouselPrevious className="-left-12 md:-left-15 bg-secondary text-secondary-foreground border-4 border-secondary hover:bg-primary h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="-right-12 md:-right-15 bg-secondary text-secondary-foreground border-4 border-secondary hover:bg-primary h-10 w-10 md:h-12 md:w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
