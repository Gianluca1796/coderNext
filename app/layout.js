import Header from '@/components/ui/Header'
import './globals.css'
import Footer from '@/components/ui/Footer'
import { CartProvider } from '@/components/context/CartContext'
import { AuthProvider } from '@/components/context/AuthContext'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}