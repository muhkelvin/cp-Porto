import '@/app/globals.css'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';

export const metadata = {
    title: 'Muhammad Kelvin',
    description: 'Muhammad Kelvin  Portfolio',
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    
    if (!routing.locales.includes(locale)) {
        notFound();
    }
    
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className="min-h-screen bg-[#F9F9F9]">
        <NextIntlClientProvider messages={messages}>
            <Nav />
            <main className="pt-20">{children}</main>
            <Footer />
        </NextIntlClientProvider>
        </body>
        </html>
    )
}