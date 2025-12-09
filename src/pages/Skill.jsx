import { motion, scale } from "motion/react"



export default function Skill({ data }) {

    if (!data) return null

    const mySkill =
        <div className='flex lg:mx-72 justify-center gap-x-10 lg:gap-x-16 '>

            {data.skill.map((skl, i) => {
                return (

                    <div className="flex flex-col items-center justify-center ">

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -11 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="">

                            <img src={skl.skillLogo} alt={skl.skillName} className="w-10 h-10 md:w-12 md:h-12" />

                        </motion.div>

                    </div>

                )
            })}

        </div>


    return (

        <section className='pt-16 lg:pt-28'>
            <div >
                <div className='p-7'>
                   
                    <div className="text-center">
                        <h1 className='text-primary text-3xl lg:text-4xl  font-bold'>Skill</h1>
                    </div>


                    <div className="mt-8">
                        {mySkill}
                    </div>

                </div>
            </div>

        </section>
    )
}
