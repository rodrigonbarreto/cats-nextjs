import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ToastProvider from '@/components/ui/ToastProvider';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: 'Adocao de Gatos',
    description: 'Navegue e salve suas fotos de gatos favoritas',
};
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}>
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        <ToastProvider />
        </body>
        </html>
    );
}
