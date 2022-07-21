import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '../components/Body';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontier-X</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap'
          rel='</link>stylesheet'
        ></link>
      </Head>
      <body className='font-manrope bg-black'>
        <Header />
        <Body />
        <Footer />
      </body>
    </>
  );
};

export default Home;
