import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import '../../styles/components.css';

// Configuración de fuente Inter
const inter = Inter({ subsets: ['latin'], variable: '--font-base' });

export const metadata = {
  title: 'Servi Proce | Servicios Profesionales en Comercio Exterior',
  description: 'Especialistas en logística, despacho aduanal y cadena de suministro.',
};

// Generar rutas estáticas para los idiomas soportados (SSG)
export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default function RootLayout({ children, params }) {
  const { lang } = params;
  
  return (
    <html lang={lang} className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
