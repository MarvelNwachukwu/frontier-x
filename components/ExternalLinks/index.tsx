export const ExternalLink = ({ imagepath, Title, url }: { imagepath: string, Title: string, url: string }) => {
  return(
    <div className='flex gap-4 w-max items-center justify-center'>
      <img src={imagepath} alt='' className='h-4 w-4' />
      <a
        href={url}
        target='_blank'
        className='hover:text-rose-600'
      >
        {Title}
      </a>
    </div>
  )
}