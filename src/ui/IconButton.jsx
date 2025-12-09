
function ButtonIcon({ href, target, icon }) {
    return (

        <div className="">

            <a
                href={href}
                target={target} >

                {icon}

            </a>
        </div>


    )
}

export default ButtonIcon