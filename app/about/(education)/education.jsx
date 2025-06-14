import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Me4 from "@/public/img/me4.jpeg";
import Me5 from "@/public/img/me5.jpeg";
import Me6 from "@/public/img/me6.jpg";
import SMA1 from "@/public/img/SMA1.jpeg";
import SMA2 from "@/public/img/SMA2.jpeg";
import SMA3 from "@/public/img/SMA3.jpeg";

export default function Education() {
	return (
		<section className="grid gap-8 md:gap-12">
			<div className="text-center space-y-2">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
					Education
				</h1>
				<p className="text-muted-foreground max-w-[800px] mx-auto">
					Discover more about my educational journey!
				</p>
			</div>
			<div className="grid gap-8 md:gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="px-5">
						<div className="font-medium text-lg">
							2022 - Present
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								Universitas Negeri Semarang
							</h2>
							<h3 className="text-md font-normal mb-3">
								S1 Teknik Informatika | Computer Science
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="LIDM 2024"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="DSC 2023"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="Quad Coders Team"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
							<p className="text-justify">
								I&apos;m currently working towards a bachelor&apos;s degree 
								in Computer Science at Universitas Negeri Semarang, 
								with the goal of becoming a software engineer. 
								Passionate about technology, I&apos;m always excited 
								to learn and dive deeper into the ever-evolving 
								world of computer science.
							</p>

							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 3.80 out of 4.00
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start px-5 md:px-0">
						<h2 className="font-semibold text-xl mt-7">
							Achievements
						</h2>
						<p className="text-md font-normal mb-3 md:mb-12">
							Here are a few of my achievements throughout my studies.
						</p>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									The top 50 teams at Bangkit Product Track Capstone Project
								</h3>
								<p className="text-sm">
									Bangkit Academy 2024 Batch 2 | Jan 2025
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									2nd Place, Advanced Technology Innovation Competition
								</h3>
								<p className="text-sm">
									DIMAS TI | Asosiasi MIPA LPTK Indonesia (AMLI) | Dec 2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									Finalist of LIDM (Lomba Inovasi Teknologi Digital Mahasiswa)
								</h3>
								<p className="text-sm">
									Kemendikbudristek, PUSPRESNAS, BPTI | Jun 2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-5">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									Bronze Medalist in the Business Plan Competition
								</h3>
								<p className="text-sm">
									UIN Syarif Hidayatullah | May 2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-5">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									Silver Medal & Best Poster Diponegoro Science Competition
								</h3>
								<p className="text-sm">
									Universitas Diponegoro | Oct 2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* SMA */}
			<div className="grid gap-8 md:gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="px-5">
						<div className="font-medium text-lg">
							2019 - 2022
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								SMA Negeri 1 Karanggede
							</h2>
							<h3 className="text-md font-normal mb-3">
								High School Diploma | Science and Mathematics
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={SMA1}
										width={400}
										height={225}
										alt="SMA 1"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={SMA2}
										width={400}
										height={225}
										alt="SMA 2"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={SMA3}
										width={400}
										height={225}
										alt="SMA 3"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
							{/* <p className="text-justify">
								I&apos;m currently working towards a bachelor&apos;s degree 
								in Computer Science at Universitas Negeri Semarang, 
								with the goal of becoming a software engineer. 
								Passionate about technology, I&apos;m always excited 
								to learn and dive deeper into the ever-evolving 
								world of computer science.
							</p> */}

							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 90.13 out of 100
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start px-5 md:px-0">
						<h2 className="font-semibold text-xl mt-7">
							Achievements
						</h2>
						<p className="text-md font-normal mb-3 md:mb-12">
							Here are a few of my achievements throughout my studies.
						</p>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									2nd place in KSNK Informatics Competition 2021
								</h3>
								<p className="text-sm">
									Kementerian Pendidikan & Kebudayaan, Boyolali Regency | Aug 2021
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									2nd Best Graduate – Mathematics and Natural Sciences Program
								</h3>
								<p className="text-sm">
									SMA N 1 Karanggede, Academic Year 2021/2022 | Jul 2022
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function GraduationCapIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
			<path d="M22 10v6" />
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
		</svg>
	);
}
