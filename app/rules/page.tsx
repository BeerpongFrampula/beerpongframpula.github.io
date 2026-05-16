import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { rules, submissionForm } from '@/config/rules'


export default function RegolamentoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="bg-secondary border-b-4 border-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Official Rules
            </span> */}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-primary mb-4 text-balance">
            Regolamento
          </h1>
          <p className="text-secondary-foreground text-sm font-thin max-w-2xl mx-auto mb-8">
            Tutto ciò che devi sapere sulle regole del torneo
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary text-secondary border-4 border-primary font-bold uppercase tracking-wide text-base neo-brutal-shadow-primary hover:neo-brutal-shadow-white-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all hover:bg-primary/90"
          >
            <a href="/documents/regolamento.pdf" download="Regolamento_Beerpong_Frampula.pdf">
              <Download className="mr-2 h-5 w-5" />
              scarica il regolamento
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
                  <div className="text-muted-foreground leading-relaxed">
                    {rule.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary border-t-4 border-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-primary mb-4">
            Ready to play?
          </h2>
          <p className="text-secondary-foreground font-thin text-sm mb-6 max-w-xl mx-auto">
            Adesso che conosci tutte le regole, è il momento di formare la tua squadra e iscriverti al prossimo torneo!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary text-secondary border-4 border-primary font-bold uppercase tracking-wide text-base neo-brutal-shadow-primary hover:neo-brutal-shadow-white-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all hover:bg-primary/90"
          >
            <a 
              href={submissionForm} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Iscriviti ora
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
