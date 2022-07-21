import { Buttons } from '../Buttons';
import { Card } from '../Card';
import { MinatureCards } from '../Card/minaturecards';
import { ExternalLink } from '../ExternalLinks';

export const Body = () => {
  return (
    <>
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
          <Buttons imagepath={'/chart.svg'} Title={'Lorem ipsum'} />
          <Buttons imagepath={'/circles.svg'} Title={'Lorem ipsum'} />
          <Buttons imagepath={'/home.svg'} Title={'Lorem ipsum'} />
        </div>

        <div className='cards mt-[74px] w-100 flex flex-col lg:flex-row gap-[19px] mb-[68px]'>
          <section className='leftSection'>
            <Card showTips={false}>
              <>
                <p className='text-sm mt-[23px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{' '}
                </p>
                <div className='socials grid grid-cols-2 grid-rows-2 gap-4 mt-[43px]'>
                  <ExternalLink
                    imagepath={'/leaveSite.svg'}
                    Title={'Lorem ipsum.com'}
                    url={'#'}
                  />
                  <ExternalLink
                    imagepath={'/Discord.svg'}
                    Title={'@Lorem ipsum'}
                    url={'#'}
                  />
                  <ExternalLink
                    imagepath={'/Instagram.svg'}
                    Title={'@Lorem ipsum'}
                    url={'#'}
                  />
                  <ExternalLink
                    imagepath={'/Twitter.svg'}
                    Title={'@Lorem ipsum'}
                    url={'#'}
                  />
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
                    <ExternalLink
                      imagepath={'/leaveSite.svg'}
                      Title={'Lorem ipsum.com'}
                      url={'#'}
                    />
                    <ExternalLink
                      imagepath={'/Discord.svg'}
                      Title={'@Lorem ipsum'}
                      url={'#'}
                    />
                    <ExternalLink
                      imagepath={'/Instagram.svg'}
                      Title={'@Lorem ipsum'}
                      url={'#'}
                    />
                    <ExternalLink
                      imagepath={'/Twitter.svg'}
                      Title={'@Lorem ipsum'}
                      url={'#'}
                    />
                  </div>
                </>
              </Card>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
