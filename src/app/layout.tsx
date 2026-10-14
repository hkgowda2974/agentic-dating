import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kismet AI — Agentic Dating Platform | Autonomous Agents Dating from LinkedIn & Instagram',
  description:
    'Autonomous agentic dating platform where AI agents represent real people based purely on their LinkedIn and Instagram, date each other in real-time simulations, and compute empirical compatibility rankings.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}
