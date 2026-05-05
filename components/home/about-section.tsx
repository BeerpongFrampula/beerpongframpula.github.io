import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-secondary mb-4">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-secondary mb-6 text-balance">
              More Than Just a Game
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Beer Pong Frampula was born in 2019 from a simple idea: bring together people who love competition, fun, and unforgettable nights. What started as a small gathering among friends has grown into one of the most anticipated tournament series in the region.
              </p>
              <p>
                Our community is built on respect, fair play, and the belief that the best memories are made when great competition meets great company. Whether you&apos;re a seasoned pro or picking up a ping pong ball for the first time, you&apos;ll find your place here.
              </p>
              <p>
                <strong className="text-secondary">Join the Frampula family</strong> and experience the thrill of tournament play, the joy of meeting new people, and the satisfaction of nailing that game-winning shot.
              </p>
            </div>

          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] border-4 border-secondary neo-brutal-shadow-lg overflow-hidden">
              <Image
                src="/images/community.jpg"
                alt="Beer Pong Frampula community celebrating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
