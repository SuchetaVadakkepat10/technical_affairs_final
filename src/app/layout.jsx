import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './(components)/Navbar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technical Affairs IIITDM',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Technical Affairs IIITDM</title>
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Navbar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};
