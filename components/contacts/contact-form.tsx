'use client'

import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground border-4 border-secondary neo-brutal-shadow mb-4">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold uppercase tracking-tight text-secondary mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 bg-secondary text-secondary-foreground border-4 border-secondary font-bold uppercase tracking-wide hover:bg-secondary/90"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide text-secondary">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="border-4 border-secondary bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wide text-secondary">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="border-4 border-secondary bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-wide text-secondary">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What is this about?"
          className="border-4 border-secondary bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wide text-secondary">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us more..."
          rows={5}
          className="border-4 border-secondary bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-primary text-primary-foreground border-4 border-secondary font-bold uppercase tracking-wide text-base neo-brutal-shadow hover:neo-brutal-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
