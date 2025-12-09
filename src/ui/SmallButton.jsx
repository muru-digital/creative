
export default function SmallButton({ lable, href }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center px-5 py-2 rounded-xl bg-secondary text-white hover:shadow-2xl hover:bg-secondary/90 duration-200">
       
        {lable}
       
      </a>
    </div>
  )
}
