import { Download, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const rules = [
  {
    id: 'setup',
    title: 'Game Setup',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Each team consists of 2 players</li>
        <li>10 cups are arranged in a triangle formation (4-3-2-1) on each side</li>
        <li>Cups are filled with water for hygiene; drinks are kept separately</li>
        <li>The table must be regulation size: 2.44m x 61cm (8ft x 2ft)</li>
        <li>Standard 40mm ping pong balls are used</li>
      </ul>
    `,
  },
  {
    id: 'gameplay',
    title: 'Basic Gameplay',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Teams take turns throwing two balls per round (one per player)</li>
        <li>When a ball lands in a cup, that cup is removed from play</li>
        <li>Elbows must remain behind the edge of the table when shooting</li>
        <li>Bounce shots are allowed and count as 2 cups (defender can swat bounces)</li>
        <li>If both teammates make their shots, they get the balls back for another turn</li>
      </ul>
    `,
  },
  {
    id: 'reracks',
    title: 'Re-Racks',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Each team gets 2 re-racks per game</li>
        <li>Re-racks can be requested at the start of your turn only</li>
        <li>Available formations: Diamond (4), Triangle (3), Line (any number)</li>
        <li>Cups must be centered on the table during re-rack</li>
        <li>No re-racks allowed during redemption/rebuttal</li>
      </ul>
    `,
  },
  {
    id: 'special-rules',
    title: 'Special Rules',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Heating Up:</strong> If a player makes 2 shots in a row, they announce "Heating Up"</li>
        <li><strong>On Fire:</strong> After 3 consecutive makes, the player is "On Fire" and shoots until they miss</li>
        <li><strong>Island:</strong> Once per game, a player can call "Island" on an isolated cup. If made, 2 cups are removed</li>
        <li><strong>Rollbacks:</strong> If the ball rolls back to the shooter without hitting the floor, they get a behind-the-back shot</li>
        <li><strong>Fingering/Blowing:</strong> NOT allowed in official tournament play</li>
      </ul>
    `,
  },
  {
    id: 'winning',
    title: 'Winning the Game',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>The game ends when one team eliminates all opposing cups</li>
        <li>The losing team gets a chance for redemption (rebuttal round)</li>
        <li>During redemption, the losing team shoots until they miss</li>
        <li>If redemption is successful (all cups made), the game goes to overtime</li>
        <li>Overtime uses 3 cups in a triangle formation</li>
      </ul>
    `,
  },
  {
    id: 'tournament',
    title: 'Tournament Format',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Double elimination bracket system</li>
        <li>Best of 1 game in early rounds; Best of 3 in semifinals and finals</li>
        <li>15-minute time limit per game (sudden death if tied)</li>
        <li>Teams must check in 15 minutes before scheduled match time</li>
        <li>No-shows result in automatic disqualification</li>
      </ul>
    `,
  },
  {
    id: 'conduct',
    title: 'Player Conduct',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Respect all players, referees, and staff at all times</li>
        <li>Unsportsmanlike conduct may result in cup penalties or disqualification</li>
        <li>Excessive intoxication may lead to team removal from tournament</li>
        <li>Referee decisions are final</li>
        <li>Have fun and play fair!</li>
      </ul>
    `,
  },
]

export default function RegolamentoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="bg-primary border-b-4 border-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Official Rules
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-secondary mb-4 text-balance">
            Regolamento
          </h1>
          <p className="text-primary-foreground text-lg max-w-2xl mx-auto mb-8">
            Everything you need to know about our tournament rules. Study up and come prepared to compete!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground border-4 border-secondary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all hover:bg-secondary/90"
          >
            <a href="/rules.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download PDF Version
            </a>
          </Button>
        </div>
      </section>

      {/* Rules Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {rules.map((rule, index) => (
              <AccordionItem
                key={rule.id}
                value={rule.id}
                className="border-4 border-secondary bg-card neo-brutal-shadow data-[state=open]:bg-primary/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 text-left">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm border-2 border-secondary">
                      {index + 1}
                    </span>
                    <span className="font-bold text-lg uppercase tracking-wide text-secondary">
                      {rule.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div 
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: rule.content }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-primary mb-4">
            Ready to Play?
          </h2>
          <p className="text-secondary-foreground mb-6 max-w-xl mx-auto">
            Now that you know the rules, it&apos;s time to prove your skills. Sign up for our next tournament!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground border-4 border-primary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <a href="/">
              View Tournaments
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
