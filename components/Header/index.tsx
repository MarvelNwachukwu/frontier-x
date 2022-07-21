import React from 'react';

export const Header = () => {
  const [showMenuContent, updateShowMenuContent] =
    React.useState<boolean>(false);
  return (
    <header className='bg-[#0D0D0D] h-max min-h-[96px] flex gap-4 justify-between px-[1rem] md:px-[38px] items-center flex-wrap lg:flex-nowrap pb-4 lg:pb-0'>
      <div
        className={`bg-[url(/logo.svg)] h-16 w-screen lg:w-[200px] bg-[100%] bg-no-repeat bg-center flex`}
      ></div>

      <form
        action='#'
        className={`grow px-4 items-center ${
          showMenuContent ? 'hidden' : 'flex'
        }`}
      >
        <div className='invisible hidden min-w-[20%] lg:flex w-16 h-2 bg-white'></div>
        <button
          type='submit'
          className='bg-[url(/Vector.svg)] h-5 w-5 bg-no-repeat bg-center mr-[-2.5rem] z-10'
        ></button>
        <input
          type='text'
          placeholder='Lorem ipsum'
          className='pl-[4rem] z-0 bg-[#1F1F1F] h-12 w-full text-[#A2A2A2] rounded-[10px]'
        />
      </form>

      <div className='CTA gap-[53px] items-center hidden lg:flex text-white'>
        <a href='#'>Lorem</a>
        <a href='#'>Lorem</a>
        <a href='#'>Lorem</a>
      </div>

      <div
        className={`CTA gap-[53px] grow h-12 ${
          showMenuContent ? 'flex' : 'hidden'
        } items-center justify-end pr-8 text-white`}
      >
        <a href='#'>Lorem</a>
        <a href='#'>Lorem</a>
        <a href='#'>Lorem</a>
      </div>

      <div
        className={`menu flex lg:hidden text-white h-8 w-8 ${
          showMenuContent ? "bg-[url('/close.png')]" : "bg-[url('/menu.png')]"
        } bg-cover bg-no-repeat cursor-pointer`}
        onClick={() => {
          updateShowMenuContent(!showMenuContent);
        }}
      />
    </header>
  );
};
