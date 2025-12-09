import ButtonIcon from "../ui/IconButton"
import { FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa6"

import SecondButton from "../ui/SecondButton"
import NavDekstop from "../components/NavDekstop"
import SmallButton from "../ui/SmallButton"


function Footer({ data }) {

    if (!data) return null


    return (
        <footer className="pt-16 ">

            <div className="relative pt-12 pb-3  bg-primary ">

                <img
                    src="bgd.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="" />

                <div className="relative z-10 flex flex-col items-center justify-center mx-8 lg:mx-10 ">

                    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full mb-14 lg:mb-20">

                        <div >
                            <h1 className="font-bold text-white text-xl mb-5 lg:mb-0 lg:text-2xl">
                                Lets's Work Together
                            </h1>
                        </div>

                        <div className="">
                            <SmallButton href="https://linktr.ee/mushawwirrd" lable={"Let's Talk"} />
                        </div>

                    </div>

                    <div className="flex items-center justify-center w-full mb-3">

                        {/* <div >
                            <a className="font-bold text-white text-xl ">
                                LOGO
                            </a>
                        </div> */}

                        <div className="">
                            <NavDekstop />
                        </div>

                    </div>


                    {/* <div className="flex flex-row justify-center gap-5 lg:justify-start mb-4">

                        <ButtonIcon
                            href="https://www.linkedin.com/in/mushawwir-rudianto"
                            icon={<FaLinkedin size={28} />}
                            target="_blank"
                            alt="Linked In"
                        />

                        <ButtonIcon
                            href="https://github.com/mushawwirrd"
                            icon={<FaDribbble size={28} />}
                            target="_blank"
                            alt="Github"
                        />

                        <ButtonIcon
                            href="https://www.behance.net/mushawwrudiant"
                            icon={<FaBehance size={32} />}
                            target="_blank"
                            alt="Behance"
                        />

                    </div> */}

                    <div className="w-full mb-4">
                        <span className="block h-[1px] bg-gray-300"></span>
                    </div>

                    <div className="w-full text-center">
                        <p className="text-sm text-white">{data.copy}</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer