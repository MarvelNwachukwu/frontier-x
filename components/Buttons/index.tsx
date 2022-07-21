export const Buttons = ({ imagepath, Title }: { imagepath: string, Title:string }) => {
  return(
    <div className='w-[184px] h-[50px] bg-[#0d0d0d7f] hover:bg-[#0D0D0D] cursor-pointer flex gap-1 items-center justify-center rounded-md'>
      <img src={imagepath} alt='' className='h-4 w-4' />
      {Title}
    </div>
  )
}