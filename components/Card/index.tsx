import React from 'react';

type props = {
  children: JSX.Element;
  showTips: boolean;
};
export const Card = ({ children, showTips }: props) => {
  const [isOpen, updateIsOpen] = React.useState<boolean>(true);
  const [displayTips, updateDisplayTips] = React.useState<boolean>(false)
  return (
    <>
      <div
        className={`w-[100vw] md:w-[591px] ${isOpen ? 'pb-[3rem]' : ''} bg-[#0d0d0d7f] p-4`}
      >
        <div className='flex w-fill justify-between'>
          <div className='flex gap-1 items-center justify-center'>
            <img src='/circles.svg' alt='' className='h-4 w-4' />
            Lorem ipsum
            {showTips && (
              <img src='/question.svg' alt='' className='h-4 w-4' onMouseEnter={() => { updateDisplayTips(true)}} onMouseLeave={() => { updateDisplayTips(false)}} />
            )}
          </div>
          <img
            src='/arrowDown.svg'
            alt=''
            className={`h-4 w-4 ${isOpen ? '' : '-rotate-90'} cursor-pointer`}
            onClick={() => {
              updateIsOpen(!isOpen);
            }}
          />
        </div>
        {isOpen ? children : ''}
      </div>
    </>
  );
};
