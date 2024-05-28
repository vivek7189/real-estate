import Image from "next/image";
import Head from 'next/head';
import Header from '@/app/ui/Header';
import Hero from '@/app/ui/Hero';
import FeaturedProperties from '@/app/ui/FeaturedProperties';
import Services from '@/app/ui/Services';
import Footer from '@/app/ui/Footer';
import InsightsTools from '@/app/ui/InsightsTools';
export default function Home() {
  return (
    <>
    <Head>
        <title>Real Estate App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <Header />
      <Hero />
        {/* <InsightsTools/> */}
      <FeaturedProperties />
      <Services />
      <Footer />
  </>
     );
}
