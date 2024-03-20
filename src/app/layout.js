import {Roboto} from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const roboto = Roboto({subsets: ['latin-ext'],weight: ['400', '700'] });

export const metadata = {
  title: "Best paypal casino slots",
  description: "Best paypal casino slots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="body-wrapper">
            <Header/>
            {children}
            <Footer/>
        </div>
      </body>
    </html>
  );
}
