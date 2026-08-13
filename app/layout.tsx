import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './style.css'; // <-- Menggunakan style.css untuk menghindari cache Git Windows

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VEIL AI',
  description: 'Aplikasi Asisten AI Modern',
  manifest: '/manifest.json',
  icons: {
    icon: '/veil.png',
    apple: '/veil.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0e15',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}