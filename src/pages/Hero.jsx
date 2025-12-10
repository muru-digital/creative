import { motion } from "motion/react"

import SecondButton from "../ui/SecondButton"



export default function Hero({ data }) {


    if (!data) return null

    return (
        <section 
        id="hero" 
        className=" relative pt-24 lg:pt-36 h-full bg-cover bg-center"
        style={{backgroundImage : "url(bgnd.jpg"} }
        >

            <div className=" flex flex-col items-center lg:items-start lg:flex-row lg:justify-between  mx-8 lg:mx-24 ">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:mt-0 mx-8  ">

                    <motion.h1
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl lg:text-4xl font-bold w-full">
                        Hi, I'm <span className="font-extrabold ">{data.name}</span>👋🏻
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 17 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold mt-1 lg:mt-0 text-white lg:text-5xl ">
                        {data.role}
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-white text-lg w-60 lg:w-[210px] mt-5 lg:mt-8 lg:text-lg ">{data.desc}</motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=" flex flex-row justify-center lg:justify-start mt-5 ">
                        <SecondButton href="https://linktr.ee/mushawwirrd" lable="Contact Me" />
                    </motion.div>

                </div>

                <div className="mt-10 lg:mt-0">

                    <motion.img
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}

                        src={data.photo}
                        alt={data.name}
                        className=" w-[320px] lg:w-[400px] " />

                    {/* <div>
                            <img src="white.png" alt="" />
                        </div> */}
                </div>


            </div>

        </section>

    )
}



