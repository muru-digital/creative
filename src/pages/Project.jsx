import { motion } from "motion/react"
import Icon from "../ui/Icon"
import { PiArrowBendRightUp, PiArrowBendRightUpBold } from "react-icons/pi"
import { FcRightUp } from "react-icons/fc"
import { RiArrowRightUpLine } from "react-icons/ri"

export default function Project({ data }) {
  if (!data) return null

  const myProject =
    <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center gap-x-3">

      {data.project.map((prj, i) => (

        <div className=" mt-6  ">

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 13 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-xl  overflow-hidden">

            <div className="flex items-center justify-center object-cover lg:h-80 lg:pt-6" >
              <img src={prj.image} alt={prj.title} />
            </div>

          </motion.div>

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 13 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between p-3 lg:p-5">

            <div className="flex flex-col items-start ">

              <motion.h1 className="text-xl lg:text-2xl font-bold mb-1">{prj.title}</motion.h1>

              <div className="flex justify-start">
                {/* <motion.p className="text-sm lg:text-base py-0.5 px-2.5 border rounded-full mb-4 w-fit ">{prj.type}</motion.p> */}
                <p>{prj.type}</p>
              </div>

            </div>

            <div>
              <Icon icon={<RiArrowRightUpLine size={28} />} href="#project" target="" />
            </div>

          </motion.div>

        </div>

      ))}

    </div >

  return (

    <section id='project' className='pt-16'>

      <div>
        <div className='mx-5 lg:mx-10'>

          <div className="text-center">
            <h1 className='text-primary text-3xl lg:text-4xl font-bold mx-8 lg:mx-0'>Project</h1>
          </div>

          <div className="mt-5">
            {myProject}
          </div>

        </div>
      </div>

    </section>
  )
}