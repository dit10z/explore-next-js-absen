import "@/styles/globals.css";
import type { AppProps } from "next/app";
// app/layout.tsx or pages/_app.tsx
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <Component {...pageProps} />
    </div>
  );
}
