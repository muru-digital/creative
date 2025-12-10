import { motion } from "motion/react"
import ButtonIcon from "../ui/IconButton"
import { FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa6"

export default function AboutMe({ data }) {

    if (!data) return "null"
    const skill =
        <div className="flex flex-row justify-between w-full" >

            {data.skill.map((sk, i) => {
                return (
                    <div key={i}>
                        <img src={sk.skillLogo} alt={sk.skillName} className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                )
            }
            )}

        </div>


    return (
        <section id="about" className="pt-16 lg:pt-16">

            <div className="flex flex-col items-center mx-8 lg:mx-10">

                <div className="flex flex-col items-center">
                    <h1 className=' text-primary text-3xl lg:text-4xl  font-bold'>About Me</h1>
                    {/* <h3 className=' text-lg lg:text-xl font-bold'>Designing Solution, Not Just Visual</h3> */}
                </div>


                <div className="flex flex-col items-center lg:flex-row lg:justify-between mt-5 gap-y-3 md:mx-12">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center w-3/5 lg:w-2/5">
                        <img src="man2.webp" alt="" className="" />
                    </motion.div>

                    <div className="flex flex-col md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl ">


                            <p className="mb-3">
                                {data.prg1}
                            </p>

                            <p className="mb-4">
                                {data.prg2}
                            </p>

                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 17 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-row gap-5 justify-start">

                            <ButtonIcon
                                href="https://www.linkedin.com/in/mushawwir-rudianto"
                                icon={<FaLinkedin size={28} />}
                                target="_blank"
                                alt="Linked In"
                            />

                            <ButtonIcon
                                href="https://www.behance.net/mushawwrudiant"
                                icon={<FaBehance size={32} />}
                                target="_blank"
                                alt="Behance"
                            />

                            <ButtonIcon
                                href="https://github.com/mushawwirrd"
                                icon={<FaDribbble size={28} />}
                                target="_blank"
                                alt="Github"
                            />

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center mt-16">
                            {/* <h1 className=' text-primary text-xl lg:text-2xl font-bold mb-8'>My Skill</h1> */}
                            {skill}
                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    )
}
