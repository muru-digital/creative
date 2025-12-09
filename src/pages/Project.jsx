import { motion } from "motion/react"

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
            className="rounded-t-xl lg:rounded-t-3xl overflow-hidden">

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
            className="flex flex-col items-start p-5 rounded-b-xl lg:rounded-b-3xl shadow-lg lg:p-7">

            <motion.h1 className="text-xl lg:text-2xl font-bold mb-2">{prj.title}</motion.h1>

            <div className="flex justify-start">
              <motion.p className="text-sm lg:text-base py-0.5 px-2.5 border rounded-full mb-4 w-fit ">{prj.type}</motion.p>

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