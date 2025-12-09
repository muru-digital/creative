
function LargeButton({href, lable}) {
    return (
        <div>
            <a
                href={href}
                className="px-7 py-4 rounded-2xl bg-primary text-white hover:shadow-2xl hover:bg-blue-700 duration-200">
                {lable}
            </a>
        </div>
    )
}

export default LargeButton