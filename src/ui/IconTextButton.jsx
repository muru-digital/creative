
export default function IconTextButton({ lable, href, src, alt, icon, icon2 }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center gap-2 px-5 py-3 rounded-full bg-primary text-white hover:shadow-2xl hover:bg-blue-800 duration-200">
        
        {icon}
        <img src={src} alt={alt} />
        {lable}
        {icon2}
        
      </a>
    </div>
  )
}
