import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import BootstrapJS from '@/components/BootstrapJS';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  metadataBase: new URL('https://latamventuresrealty.com'),
  title: 'Latam Ventures Realty | Real estate advisory for foreigners in Argentina',
  description: 'Personalized real estate services in Argentina for international clients.',
  openGraph: {
    title: 'Latam Ventures Realty | Real estate advisory for foreigners in Argentina',
    description: 'Personalized real estate services in Argentina for international clients.',
    url: 'https://latamventuresrealty.com',
    siteName: 'Latam Ventures Realty',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <I18nProvider>
          <BootstrapJS />
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}