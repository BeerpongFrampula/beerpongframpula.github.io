import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Beer Pong Tournament action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Tournament Card */}
          <div className="bg-card border-4 border-secondary neo-brutal-shadow-lg p-6 md:p-10">
            <div className="mb-4">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-secondary">
                Next Tournament
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-secondary mb-4 text-balance">
              Summer Showdown 2026
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-secondary">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span className="font-medium">June 15-16, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Milan, Italy</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Get ready for the biggest Beer Pong tournament of the summer. 64 teams, one champion. Are you ready to compete?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-primary text-primary-foreground border-4 border-secondary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Link href="/subscribe">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-secondary border-4 border-secondary font-bold uppercase tracking-wide text-base hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Link href="/regolamento">
                  View Rules
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-primary" />
    </section>
  )
}
