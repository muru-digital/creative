
export default function TextButton({ href, target, lable }) {
    return (
        <div className="">
            <a href={href}
                target={target}
            >

                {lable}

            </a>
        </div>
    )
}

