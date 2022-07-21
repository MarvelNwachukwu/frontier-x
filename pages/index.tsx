import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Card } from '../components/Card';
import { MinatureCards } from '../components/Card/minaturecards';
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
        <div className='seperator h-[6px] w-full bg-gradient-to-r from-[#665AEF] to-[#FC364C] '></div>
        <section className='bg-gradient-to-br from-[#2e2d6699] via-[#3a273f99] to-[#181818] animate-gradient-xy min-h-screen flex flex-col items-center px-4 pt-8 text-white'>
          <div className="wide-image w-full h-[264px] rounded bg-[url('/frontierx-2.svg')] bg-cover bg-no-repeat" />
          <div className="h-36 w-36 bg-[url('/eyes.svg')] bg-cover bg-no-repeat mt-[-90px]" />

          <h3 className='mb-[6px] text-[45px] font-[800] mt-[30px]'>
            Lorem ipsum
          </h3>
          <p>
            Created by:{' '}
            <span className='text-[#FC364C] cursor-pointer'>Lorem ipsum</span>
          </p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

          <div className='buttons flex gap-5 flex-wrap mt-[60px]'>
            <div className='w-[184px] h-[50px] bg-[#0d0d0d7f] hover:bg-[#0D0D0D] cursor-pointer flex gap-1 items-center justify-center rounded-md'>
              <img src='/chart.svg' alt='' className='h-4 w-4' />
              Lorem ipsum
            </div>
            <div className='w-[184px] h-[50px] bg-[#0d0d0d7f] hover:bg-[#0D0D0D] cursor-pointer flex gap-1 items-center justify-center rounded-md'>
              <img src='/circles.svg' alt='' className='h-4 w-4' />
              Lorem ipsum
            </div>
            <div className='w-[184px] h-[50px] bg-[#0d0d0d7f] hover:bg-[#0D0D0D] cursor-pointer flex gap-1 items-center justify-center rounded-md'>
              <img src='/home.svg' alt='' className='h-4 w-4' />
              Lorem ipsum
            </div>
          </div>

          <div className='cards mt-[74px] w-100 flex flex-col lg:flex-row gap-[19px] mb-[68px]'>
            <section className='leftSection'>
              <Card showTips={false}>
                <>
                  <p className='text-sm mt-[23px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{' '}
                  </p>
                  <div className='socials grid grid-cols-2 grid-rows-2 gap-4 mt-[43px]'>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/leaveSite.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        Lorem ipsum.com
                      </a>
                    </div>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/Discord.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        @Lorem ipsum
                      </a>
                    </div>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/Instagram.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        @Lorem ipsum
                      </a>
                    </div>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/Twitter.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        @Lorem ipsum
                      </a>
                    </div>
                  </div>
                </>
              </Card>
            </section>
            <section className='rightSection flex flex-col gap-[24px]'>
              <Card showTips={true}>
                <div className='grid grid-cols-3 gap-[8px] max-h-[438px] overflow-y-scroll pt-[24px]'>
                  <MinatureCards
                    percentage={'9%'}
                    name={'Lorem ipsum'}
                    section={'Accessories & Ears'}
                  />
                  <MinatureCards
                    percentage={'15%'}
                    name={'Lorem ipsum'}
                    section={'Arms'}
                  />
                  <MinatureCards
                    percentage={'2%'}
                    name={'Lorem ipsum'}
                    section={'Background'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'3%'}
                    name={'Lorem ipsum'}
                    section={'Glasses'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Hair & Hats'}
                  />
                  <MinatureCards
                    percentage={'2%'}
                    name={'Lorem ipsum'}
                    section={'Head'}
                  />
                  <MinatureCards
                    percentage={'92%'}
                    name={'Lorem ipsum'}
                    section={'Legs & Clothes'}
                  />
                  <MinatureCards
                    percentage={'2%'}
                    name={'Lorem ipsum'}
                    section={'Mouth'}
                  />
                  <MinatureCards
                    percentage={'46%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                  <MinatureCards
                    percentage={'32%'}
                    name={'Lorem ipsum'}
                    section={'Eye'}
                  />
                </div>
              </Card>
              <Card showTips={false}>
                <>
                  <p className='text-sm mt-[23px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{' '}
                  </p>
                  <div className='socials grid grid-cols-2 grid-rows-2 gap-4 mt-[43px]'>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/leaveSite.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        Lorem ipsum.com
                      </a>
                    </div>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/Discord.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        @Lorem ipsum
                      </a>
                    </div>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/Instagram.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        @Lorem ipsum
                      </a>
                    </div>
                    <div className='flex gap-4 w-max items-center justify-center'>
                      <img src='/Twitter.svg' alt='' className='h-4 w-4' />
                      <a
                        href='#'
                        target='_blank'
                        className='hover:text-rose-600'
                      >
                        @Lorem ipsum
                      </a>
                    </div>
                  </div>
                </>
              </Card>
            </section>
          </div>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default Home;
