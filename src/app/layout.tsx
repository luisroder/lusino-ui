import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { SiteHeader } from '@/components/site-header';
import { fonts } from './fonts';
import { Container } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'lusino.de',
  description: 'cut it!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${fonts.srcCodeMono.variable} antialiased`}>
        <Container>
          <SiteHeader />
          <Providers>{children}</Providers>
        </Container>
      </body>
    </html>
  );
}
