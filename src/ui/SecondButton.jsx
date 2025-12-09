
export default function SecondButton({ lable, href }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center px-6 py-3 rounded-2xl bg-secondary text-white hover:shadow-2xl hover:bg-secondary/90 duration-200">
       
        {lable}
       
      </a>
    </div>
  )
}
