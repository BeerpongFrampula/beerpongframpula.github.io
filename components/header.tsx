'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/regolamento', label: 'Regolamento' },
  { href: '/contacts', label: 'Contacts' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-4 border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl md:text-2xl text-secondary uppercase tracking-tight"
          >
            <span className="bg-secondary text-primary px-2 py-1 text-sm md:text-base">BP</span>
            <span className="hidden sm:inline">Frampula</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-bold text-secondary uppercase tracking-wide text-sm hover:bg-secondary hover:text-primary transition-colors border-2 border-transparent hover:border-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-secondary hover:bg-secondary hover:text-primary border-2 border-secondary"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-secondary text-secondary-foreground border-l-4 border-primary w-full sm:max-w-sm"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pt-2">
                  <span className="font-bold text-xl text-primary uppercase">Menu</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-4 font-bold text-lg uppercase tracking-wide bg-primary text-secondary border-4 border-primary hover:bg-secondary hover:text-primary hover:border-primary transition-all neo-brutal-shadow-hover"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
