"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButon from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Quote from "./(quote)/quote.jsx";
import Skills from "./(skills)/skills.jsx";
import Tools from "./(skills)/tools.jsx";
import Stack from "./(skills)/stack.jsx";
import Experience from "./(experience)/experience.jsx";
import Education from "./(education)/education.jsx";

// images
import Me1 from "@/public/img/me1.jpg";
import Me2 from "@/public/img/me2.jpg";
import Me3 from "@/public/img/me3.jpg";
import Hr from "@/components/Hr";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#about">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButon>
        <div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
            <motion.div initial={{ scale: 1 }} animate={{ scale: 1.6 }} transition={{ ease: "circOut", duration: 1 }} className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
              <Image src={Me2} alt="Wahid" layout="fill" objectFit="cover" placeholder="blur" />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">About Me</h1>
            <Hr />
            <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
              A concise introduction about myself and <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent"> my interest.</span>
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="mb-3"
            >
              <Button variation="primary">Swipe Down</Button>
            </motion.div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
          <div className="flex justify-center items-center flex-col my-5 self-start ">
            <div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
            <div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
            <h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
          </div>
        </div>
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
          <div className="flex justify-center items-start flex-col mb-5 ">
            <div className="images relative w-full  aspect-square">
              <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  className="transition-transform transform hover:scale-105 w-full h-full"
                >
                  <Image src={Me1} alt="Wahid" layout="fill" objectFit="cover" placeholder="blur" />
                </motion.div>
              </div>
              <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{ delay: 0.3 }}
                  className="transition-transform transform hover:scale-105 w-full h-full"
                >
                  <Image src={Me2} alt="Wahid" layout="fill" objectFit="cover" placeholder="blur" />
                </motion.div>
              </div>
              <div className="transition-transform transform hover:scale-105 absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="w-full h-full"
                >
                  <Image src={Me3} alt="Wahid" layout="fill" objectFit="cover" placeholder="blur" />
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="flex justify-center items-start flex-col mb-5 md:px-10"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          >
            <h1 className="text-3xl font-bold tracking-wider mb-3">Dony Benaya Dinova</h1>
            <p className="text-gray-600 text-justify title text-lg">
              Hello! I&rsquo;m Dony Benaya Dinova, a passionate <span className="text-black font-medium">technology enthusiast</span> and aspiring
              <span className="text-black font-medium"> Mobile Developer</span> based in Boyolali, Central Java, Indonesia. I&rsquo;m currently pursuing a degree in <span className="text-black font-medium">Informatics Engineering</span> at
              <span className="text-black font-medium"> Semarang State University</span>. My core expertise lies in <span className="text-black font-medium">mobile development</span>, with hands-on experience in
              <span className="text-black font-medium"> full-stack development</span>,<span className="text-black font-medium"> project management</span>, and
              <span className="text-black font-medium"> Python programming</span>. I&rsquo;m also deeply interested in <span className="text-black font-medium">machine learning</span>, where I enjoy applying data-driven insights to create
              meaningful, real-world solutions. Known for being adaptable and always eager to learn, I thrive on tackling unique challenges and staying updated with evolving technologies. I&rsquo;m committed to delivering impactful and
              reliable digital solutions while fostering effective collaboration within teams. Let&rsquo;s connect—I&rsquo;d be happy to share ideas and explore exciting opportunities together!
            </p>
          </motion.div>
        </div>

        {/* skills */}
        <div className=" w-screen mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
          <motion.div
            className="flex justify-center items-center flex-col mb-5 "
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          >
            <Skills />
          </motion.div>
        </div>

        <div className=" w-screen mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
          <motion.div
            className="flex justify-center items-center flex-col mb-5 "
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          >
            <Stack />
          </motion.div>
          <motion.div
            className="flex justify-start items-center flex-col mb-5 "
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.6,

              type: "spring",
            }}
          >
            <Tools />
          </motion.div>
        </div>

        {/* experience */}
        <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
          <div className="flex justify-center items-center flex-col my-5 self-start ">
            <motion.div
              className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,

                type: "spring",
              }}
            ></motion.div>
            <motion.div
              className="bg-gray-700 w-28 h-1 rounded-full"
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: -50,
              }}
              transition={{
                delay: 0.5,

                type: "spring",
              }}
            ></motion.div>
            <motion.h1
              className="text-3xl font-bold mt-3"
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.7,

                type: "spring",
              }}
            >
              My Path to Growth
            </motion.h1>
          </div>
        </div>

        <div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
          <motion.div
            className="flex justify-center items-start flex-col mb-5 "
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          >
            <Experience />
          </motion.div>
        </div>

        {/* Education */}
        {/*<div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
          <motion.div
            className="flex justify-center items-start flex-col mb-5 "
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          >
            <Education />
          </motion.div>
        </div>*/}

        <div className="min-h-[80vh] w-screen mx-auto container  p-10 grid grid-cols-1 mt-10 ">
          <motion.div
            className="flex justify-center items-center flex-col mb-5 "
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Quote />
          </motion.div>
        </div>
      </main>
    </>
  );
}
