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
    id: '1',
    title: 'Regole Base',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Ciascuna squadra è formata da 2 giocatori</li>
        <li>Sul tavolo sono disposti 10 bicchieri su ciascun lato, disposti in modo da 
        formare un triangolo (4-3-2-1)</li>
        <li>Lo scopo del gioco è tirare la pallina dentro i bicchieri della squadra 
        avversaria. I bicchieri sono riempiti con acqua</li>
        <li>All’inizio di ogni partita un componente per squadra si sfida nel “Pari o 
        Dispari”, chi vince sceglie la parte del tavolo in cui giocare e se iniziare a 
        tirare</li>
        <li>L’unione dei bicchieri è automatica a 6, 3 e 1 bicchiere, disponendoli sempre 
        a partire del fondo del tavolo in modo triangolare</li>
        <li>Ogni giocatore ha a disposizione 3 ticket, e può ritirare le birre in 
        qualsiasi momento</li>
      </ul>
    `,
  },
  {
    id: '2',
    title: 'Lancio della pallina',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>La squadra che inizia per prima ha a disposizione un solo tiro, mentre nei 
        turni successivi ogni squadra ha a disposizione due tiri (uno per giocatore!)</li>
        <li>Se in un turno entrambi i componenti della squadra fanno centro nei bicchieri 
        avversari, hanno a disposizione un terzo tiro (il quale può essere tirato da uno 
        qualsiasi dei due giocatori)</li>
        <li>Il tiro è considerato valido se la la pallina è lanciata in modo diretto o se
        compie al massimo un rimbalzo sul tavolo</li>
        <li>Nel lanciare la pallina, il punto di rilascio della stessa non può superare la
        linea immaginaria verticale che si crea a partire dal bicchiere in cima al
        triangolo</li>
        <li>Non si ha un tempo limitato nel lancio della pallina, ma non sono consentite 
        perdite di tempo volontarie</li>
      </ul>
    `,
  },
  {
    id: '3',
    title: 'Distrazioni e sanzioni',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>é consentito fare mosse per distrarre l’avversario solo dietro il tavolo, non 
        si può sorpassare la linea verticale del bordo del tavolo</li>
        <li>NON si può soffiare o intercettare la pallina, a meno che non abbia già 
        effettuato due o più rimbalzi sul tavolo. Se un giocatore infrange questa regola deve 
        togliere dal tavolo un proprio bicchiere scelto dagli avversari</li>
        <li>Se pallina cade accidentlamente in uno dei propri bicchieri NON bisogna 
        rimuoverlo dal gioco</li>
        <li>Se un giocatore fa accidentalmente cadere uno (o più) dei propri bicchieri 
        bisogna toglierli dal gioco</li>
      </ul>
    `,
  },
  {
    id: '4',
    title: 'Partita',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>La partita nelle fasi a gironi può durare al massimo 7 minuti</li>
        <li>Se una squadra riesce a centrare tutti i bicchieri della squadra avversaria 
        prima dello scadere dei 7 minuti, la squadra avversaria ha la possibilità di 
        continuare a tirare alternandosi fino a quando non fallisce un tiro. Se anche loro 
        riescono a portare il numero dei bicchieri avversari a 0, la partita continua allo
        spareggio</li>
        <li>Nello spareggio si posizionano 3 bicchieri per parte disposti a triangolo (2-1) 
        e si continua la partita. Inizia chi aveva finito per primo i bicchieri avversari 
        con due tiri a disposizione. Se dovesse verificarsi di nuovo la situazione 
        precedente (vedi punto 2.) si posizionano di nuovo i 3 bicchieri</li>
        <li>Non è consentito fermare il tempo durante il corso della partita, se non nel 
        momento in cui entrambe le squadre hanno centrato i 10 bicchieri, e occorre 
        riposizionare i 3 bicchieri da entrambe le parti per proseguire con lo spareggio.
        Una volta che ciascuna delle due squadre ha riposizionato i propri 3 bicchieri, 
        prima di iniziare lo spareggio, occorre far ripartire il tempo da dove lo si era 
        fermato</li>
        <li>Lo spareggio delle fasi a gironi termina nel momento in cui scadono i 7 
        minuti di partenza</li>
    `,
  },
  {
    id: '5',
    title: 'punteggio gironi',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Le prime due squadre di ogni girone passano alle fasi finali.</li>
        <li>Nella fase a gironi le vittorie valgono 3 punti, i pareggi 1 punto e le 
        sconfitte 0 punti</li>
        <li>Al termine di ogni partita verrà segnato il punteggio, che terrà conto dei 
        bicchieri messi da ciascuna squadra. Nello spareggio valgono anche tutti quelli 
        messi oltre ai 10 bicchieri iniziali</li>
        <li>Al termine della fase a gironi, in caso di parità di punti tra una o più 
        squadre si darà importanza, in ordine, a:
          <ul>
            <li>Scontro diretto</li>
            <li>Bicchieri messi</li>
            <li>Differenza bicchieri = bicchieri messi - bicchieri subiti</li>
            <li>Spareggio</li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: '6',
    title: 'Fasi finali',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>La partita regolamentare dura 7 minuti. Il tempo della partita non viene mai fermato</li>
        <li>Se allo scadere del tempo la partita risulta in parità si procede allo 
        spareggio</li>
        <li>Nello spareggio si posizionano 3 bicchieri per parte disposti a traingolo (2-1) 
        e si continua la partita</li>
        <li>Nello spareggio delle fasi finali non c’è limite di tempo</li>
        <li>Se una squadra riesce a terminare tutti i bicchieri della squadra avversaria 
        prima della fine del tempo, la squadra avversaria ha la possibilità di continuare 
        a tirare alternativamente fino a quando non fallisce un tiro. Se anche loro 
        riescono a portare il numero dei bicchieri avversari a 0, si ritorna alla 
        situazione dei 3 bicchieri per parte</li>
      </ul>
    `,
  },
]

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
            className="bg-primary text-primary-foreground border-4 border-primary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <a href="/">
              Iscriviti ora
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
