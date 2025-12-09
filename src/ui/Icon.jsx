
export default function Icon({ href, target, icon }) {
    return (

        <div className="p-2 rounded-full bg-primary text-white hover:shadow-lg hover:bg-white hover:text-primary">

            <a 
                href={href}
                target={target} >

                {icon}

            </a>
        </div>


    )
}
