import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google"; 
import AuthProvider from "@/app/_context/Auth-Context";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Registro",
  description: "Autenticação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientId = process.env.GOOGLE_CLIENT_ID || "";

  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-dark text-darklight`}
      >
        <AuthProvider>
          <GoogleOAuthProvider clientId={clientId}>
            {children}
          </GoogleOAuthProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
