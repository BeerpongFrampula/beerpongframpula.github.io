import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const tournamentStats = [
  { id: 'beers', value: '2048', label: 'Lattine di birra' },
  { id: 'players', value: '512', label: 'Giocatori' },
  { id: 'teams', value: '256', label: 'Squadre' },
  { id: 'groups', value: '64', label: 'Gironi' },
]

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
      <div className="relative z-10 container mx-auto px-2 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Tournament Card */}
          <div className="bg-card border-4 border-secondary neo-brutal-shadow-lg p-6 md:p-10">
            <div className="mb-4">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-secondary">
                XXIII Edizione, Beerpong Frampula
              </span>
            </div>
            
            <h1 className="text-[29px] md:text-4xl lg:text-6xl font-bold uppercase tracking-tight text-secondary mb-4 text-balance">
              Torneo di Beerpong
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-secondary">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span className="font-medium">Sabato, 6 Giugno 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Forlimpopoli (FC)</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-4'>
              {tournamentStats.map((stat) => (
                <div
                key={stat.id}
                className='flex flex-col items-center justify-center text-center bg-primary p-4 border-4 border-secondary neo-brutal-shadow'
                >
                  <div className='text-2xl md:text-3xl font-bold text-secondary'>
                    {stat.value}
                  </div>
                  <div className='text-xs md:text-sm font-medium uppercase text-primary-foreground'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full">
              <Button 
                asChild
                size="lg"
                className="col-span-2 w-full bg-blue-400 text-primary-foreground border-4 border-secondary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:bg-blue-400 hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <a 
                  href="https://tally.so/r/XxJPoj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Iscriviti ora
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="w-full bg-transparent text-secondary border-4 border-secondary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:bg-transparent hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Link href="/regolamento">Regolamento</Link>
              </Button>

              <Button 
                asChild
                variant="outline"
                size="lg"
                className="w-full bg-transparent text-secondary border-4 border-secondary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:bg-transparent hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Link href="/info-torneo">
                  Info Torneo
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary" />
    </section>
  )
}
