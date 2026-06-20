import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Good News Collective | Positive News That Inspires',
  description: 'Discover uplifting, positive news stories that celebrate human kindness, innovation, and progress. Restore your faith in humanity with The Good News Collective.',
  keywords: 'positive news, good news, uplifting stories, inspiring news, kindness, hope',
  openGraph: {
    title: 'The Good News Collective',
    description: 'Positive news that inspires and uplifts.',
    url: 'https://thegoodnewscollective.org',
    siteName: 'The Good News Collective',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Good News Collective',
    description: 'Positive news that inspires and uplifts.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.Node
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}