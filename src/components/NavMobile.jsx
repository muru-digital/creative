import { nav } from "../data/route"
import Button from "../ui/Button"


function NavMobile({ isOpen, setOpen }) {
    return (
        <div >

            <div className="relative z-[70] lg:hidden ">
                <button
                    onClick={() => setOpen(!isOpen)}
                    className="flex flex-col items-center justify-between w-6 h-5 space-y-1 ">

                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0 translate-x-6" : " translate-x-0"}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />

                </button>
            </div>

            <div className={`fixed z-[70] top-[3.5rem] right-0 text-center w-full rounded-b-3xl bg-white p-10 transition-transform duration-300 ${isOpen ? "translate-x-0 " : "translate-x-full "}`}>

                <ul className="space-y-5">
                    {nav.map(v => (
                        <li key={v.title}>
                            <a onClick={() => setOpen(false)} href={v.href} >{v.title}</a>
                        </li>
                    ))}
                    <div className="flex items-center justify-center mt-10">
                        <Button href="https://linktr.ee/mushawwirrd" lable="Contact Me" />
                    </div>

                </ul>

            </div>


        </div>
    )
}

export default NavMobile