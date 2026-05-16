import Link from 'next/link'
import { SiInstagram, SiFacebook, SiTelegram } from 'react-icons/si'

const socialLinks = [
  { 
    href: 'https://www.instagram.com/beerpongframpula/', 
    icon: SiInstagram, 
    label: 'Instagram' 
  },
  { 
    href: 'https://t.me/beerpongframpula', 
    icon: SiTelegram, 
    label: 'Telegram' 
  },
  { 
    href: 'https://www.facebook.com/beerpongframpula/?locale=it_IT', 
    icon: SiFacebook, 
    label: 'Facebook' 
  },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-bold text-xl uppercase tracking-tight"
            >  
              <span className="text-primary">Beerpong Frampula</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Il torneo di Beerpong più grande d'Italia.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg uppercase text-primary">Seguici su</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground border-2 border-primary hover:bg-secondary hover:text-primary transition-all neo-brutal-shadow-hover"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          {/* <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg uppercase text-primary">Legal</h3>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div> */}
        </div>

        <div className="mt-12 pt-6 border-t border-primary/30">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Frampula Events A.P.S. - P.IVA: 04710690407
          </p>
        </div>
      </div>
    </footer>
  )
}
