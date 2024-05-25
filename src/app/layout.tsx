import type {Metadata} from 'next';
import {Open_Sans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/providers/theme-provider';

const font = Open_Sans({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Synco',
  description: 'Automate your work wit Synco',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
