"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import ReactChat1 from "@/public/projects/PlesiranJogja/Plesiranjogjalogo.png";
import ReactChat2 from "@/public/projects/PlesiranJogja/PlesiranJogja-00.png";
import ReactChat3 from "@/public/projects/PlesiranJogja/PlesiranJogja-07.png";
import ProjectAll from "@/public/img/projects.png";

import Hr from "@/components/Hr";
import ProjectCard from "./(project-card)";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
  1: "Mobile Apps",
  2: "Web Apps",
  3: "Desktop Apps",
  4: "Other",
};

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(1);
  const projects = Projects.Projects.filter((item) => item.show === true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#projects">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButon>
        <div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
            >
              <Image
                src={ProjectAll}
                alt="Wahid H"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
              My Projects
            </h1>
            <Hr />
            <p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
              Projects that I have worked on and{" "}
              <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                {" "}
                currently working on.
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
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
            <h1 className="text-3xl font-bold mt-3">My Hightlight</h1>
          </div>
        </div>
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
          <div className="flex justify-center items-start flex-col mb-5 ">
            <div className="images relative w-full  aspect-square">
              <div className="absolute top-20 right-1 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat1}
                    alt="Wahid H"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="rat"
                  />
                </motion.div>
              </div>
              <div className="absolute top-10 h-[30%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
                  className="w-full h-full shadow-lg "
                >
                  <Image
                    src={ReactChat3}
                    alt="Wahid H"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    objectPosition="0% 0%"
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-20 left-10 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat2}
                    alt="Wahid H"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
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
            <h2 className="text-2xl font-bold tracking-wider mb-3">
              PlesiranJogja
            </h2>
            <p className="text-gray-600 text-justify title text-lg">
              Plesiran Jogja is an innovative digital platform designed to
              provide in-depth travel information and personalized
              recommendations for those looking to explore Yogyakarta. The
              platform offers structured content on various tourist
              destinations, culinary experiences, and local culture, along with
              additional features such as trip packages, hotel accommodations,
              and vehicle rental services to simplify the travel planning
              process. By delivering well-organized and accessible information,
              Plesiran Jogja enables travelers to create meaningful and
              efficient travel experiences. The platform not only enhances
              convenience for tourists but also supports cultural preservation
              and the promotion of sustainable local tourism.
            </p>{" "}
            <div className="mt-3">
              <Button variation="primary">
                <Link href="projects/PlesiranJogja">More Detail</Link>
              </Button>
              <Button variation="secondary">
                <a
                  href="https://insomnia.celerateskampusmerdeka.site/homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
          <div className="flex justify-start items-start flex-col my-5 self-start ">
            <Hr />
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
              Additional Highlights
            </motion.h1>
          </div>
        </div>

        {/* choose category */}
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
          }}
          className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 "
        >
          {Object.keys(category).map((key, index) => (
            <button
              key={index}
              className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
                activeCategory === key
                  ? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
                  : "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {category[key]}
            </button>
          ))}
        </motion.div>

        {/* projects */}
        <div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        {/* view in archive btn */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="flex justify-center items-center flex-col my-5 self-start "
        >
          <Button variation="primary">
            <Link href="projects/archive">View My Archive</Link>
          </Button>
        </motion.div>
      </main>
    </>
  );
}
