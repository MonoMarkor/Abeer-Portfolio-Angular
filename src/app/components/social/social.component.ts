import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SocialLink {
  label: string;
  href: string;
  icon: string;
  isExternal: boolean;
}

const ICONS: Record<string, string> = {
  email: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 5h18v14H3V5z" stroke="currentColor" stroke-width="1.6"/><path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="1.6"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.53 4.77 5.83V21h-4v-5.6c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.44-2.15 2.94V21h-4V9z"/></svg>`,
  xing: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 3h-3.3l-4.4 7.8 4.9 8.2h3.4l-4.9-8.2L18.2 3zM6.7 8.2H3.4l3 5.1-4.4 7.7h3.4l4.4-7.7-3.1-5.1z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.1-.5 0a6.6 6.6 0 01-1.9-1.2 7 7 0 01-1.3-1.6c-.1-.2 0-.3.1-.4l.3-.4.2-.3v-.3c0-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 00-.6.3 2.8 2.8 0 00-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.2z"/></svg>`
};

@Component({
  selector: 'app-social',
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})

export class SocialComponent {
  private email = 'ahmad.abeer11@gmail.com';
  private phone = '+49 163 8216667';

  private get whatsappLink(): string {
    const digits = this.phone.replace(/[^\d]/g, '');
    return `https://wa.me/${digits}`;
  }

  links: SocialLink[] = [
    { label: 'Email', href: `mailto:${this.email}`, icon: 'email', isExternal: false },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmadabeerahsan/', icon: 'linkedin', isExternal: true },
    { label: 'Xing', href: 'https://xing.com/profile/yourbrother', icon: 'xing', isExternal: true },
    { label: 'GitHub', href: 'https://github.com/AhmadAbeerAhsan', icon: 'github', isExternal: true },
    { label: 'WhatsApp', href: this.whatsappLink, icon: 'whatsapp', isExternal: true }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(ICONS[icon] || '');
  }
}
