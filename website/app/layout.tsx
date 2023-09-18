import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skolplattformen',
  description:
    'Öppna Skolplattformen är en app för iOS och Android som gör det enklare för föräldrar att komma åt uppgifter i Skolplattformen.',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Öppna skolplattformen',
    description:
      'Öppna Skolplattformen är en app för iOS och Android som gör det enklare för föräldrar att komma åt uppgifter i Skolplattformen.',
    images: [{ url: '../assets/img/logo.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
