import { useState } from "react"


import OutLineButton from "../ui/OutlineButton"

import { motion } from "motion/react"


export default function Experience({ data }) {

    if (!data) return null

    const myExperience =
        data.experience.map((ex, i) => {
            return (

                <motion.div
                    id={ex.id}
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-row items-start justify-between mx-6 border-b-2 py-5 lg:mx-56 ">

                    <div className="">

                        <h1
                            className="text-lg md:text-2xl font-semibold ">
                            {ex.position}
                        </h1>

                        <p className="lg:font-semibold text-slate-400">
                            {ex.date}
                        </p>

                    </div>

                    <motion.div
                        id={ex.id}
                        key={i}
                        initial={{ opacity: 0, x: 11 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mt-5 flex items-start md:w-24">
                        <h1

                            className="text-lg lg:text-xl font-bold text-primary">
                            {ex.company}
                        </h1>
                    </motion.div>


                </motion.div>

            )
        })

    return (
        <section className="pt-20 ">

            <div >
                <div className="mx-8 lg:mx-10 ">

                    <div className="text-center">
                        <h1 className='text-primary text-3xl lg:text-4xl font-bold'>Experience</h1>
                    </div>

                    <div className=" mt-5  ">
                        {myExperience}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=" flex justify-center mt-10">
                        <OutLineButton href="https://drive.google.com/file/d/1-4fzFVcOW51sCo_KAsS1glFCeLJ6lWiu/view?usp=drivesdk" lable="My Resume" />
                    </motion.div>

                </div>
            </div>

        </section>
    )
}
