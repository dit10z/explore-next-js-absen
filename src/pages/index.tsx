import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/layouts/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * The Home component is a functional component that renders
 * a simple div with a greeting message.
 */

export default function HomePage() {
  const [data, setData] = useState<{ name: string; age: number } | null>(null);

  useEffect(() => {
    // Fetch data from the API route
    const fetchData = async () => {
      const response = await fetch("/api/hello");
      const result = await response.json();
      console.log(result);
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <main className={[geistSans.className, geistMono.className].join(" ")}>
      <Head>
        <title>Hello Bang</title>
      </Head>
      <Navbar />
      <h1 className={styles.title}>Hello Bang</h1>
      <p className={styles.description}>
        The easiest way to get started with Next.js and TypeScript.
      </p>

      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
