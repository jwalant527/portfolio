import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jwalant Bhatt - Platform Engineer at NIH',
  description: 'Platform Engineer specializing in DevOps, CI/CD, and infrastructure automation at the National Institutes of Health. Expert in Kubernetes, Docker, Jenkins, and cloud platforms.',
  keywords: 'platform engineer, devops, kubernetes, docker, jenkins, cicd, infrastructure, automation, NIH, NCBI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
