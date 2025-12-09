
function Button({ lable, href }) {
  return (
    <div>
      <a
        href={href}
        className="flex justify-center px-6 py-3 rounded-2xl bg-primary text-white hover:shadow-2xl hover:bg-primary/90 duration-200">
       
        {lable}
       
      </a>
    </div>
  )
}

export default Button