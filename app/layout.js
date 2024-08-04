import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trace",
  description: "Created by na-graph",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Track your pantry: Add items, remove items, find items etc." />
      <meta name="keywords" content="Raphael A Frimpong, Raphael Appau Frimpong, Raph, Pantry, Track, Pantry Tracker, JavaScript, React Native, MERN Stack, Web Development, Mobile Development" />
      <meta name="author" content="Raphael A Frimpong" />
      <title>Trace</title>
    </head>
      <body className={inter.className}>
        <Navbar/>
        <container className="relative overflow-hidden">
          {children}
          <Footer />
        </container>
      </body>
    </html>
  );
}
