export const MinatureCards = ({
  percentage,
  name,
  section,
}: {
  percentage: string;
  name: string;
  section: string;
}) => {
  return (
    <div className='bg-[#0D0D0D] flex flex-col items-center justify-center rounded h-[99px]'>
      <p className='text-[#8E8B8F]'>{section}</p>
      <p className='text-white]'>{name}</p>
      <p className='text-[#8E8B8F]'>{percentage}</p>
    </div>
  );
};
