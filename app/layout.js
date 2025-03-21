import './globals.css'
import Nav from './components/nav'
import Footer from './components/footer'

export const metadata = {
    title: 'Portfolio Dev',
    description: 'Web Developer Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-[#F9F9F9]">
        <Nav />
        <main className="pt-20">{children}</main> {/* Adjust padding for fixed nav */}
        <Footer />
        </body>
        </html>
    )
}