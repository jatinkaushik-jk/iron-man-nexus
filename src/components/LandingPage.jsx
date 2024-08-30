// @ts-ignore
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LandingPage = () => {

    const scrollRef = useRef(null);
    const subjectRef = useRef(null);
    const quickNavRef = useRef(null);
    const mainTextRef = useRef(null);

    useGSAP(() => {
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#Home',
                start: "top top",
                end: "70% top",
                scrub: true,
            }
        }, 0);

        // Main text animation
        scrollTl.fromTo(
            mainTextRef.current,
            { opacity: 1, y: 0 },
            {
                opacity: 0.8,
                y: -40,
                duration: 1.5,
                ease: "power1.out",
            }
        );

        // Subject animation
        scrollTl.to(subjectRef.current, {
            x: 80,
            opacity: 0.8,
            duration: 1,
            ease: "expo.out",
        });

        // Quick Navigation animation
        scrollTl.to('#quickNav a', {
            y: -30,
            opacity: 0.6,
            duration: 2,
            ease: "power3.out",
            stagger: 0.3,
        });


    })


    return (
        <>
            <section id="Home" className="relative h-[24rem] xs:h-[30rem] lg:h-[38rem] xl:h-[45rem] w-full p-4 overflow-hidden" ref={scrollRef}>
                <div id="landingBackground" className="w-full h-full absolute top-0 left-0 overflow-hidden">
                    {/* Background Video */}
                    <div className="w-full h-full">
                        <video src="/src/assets/iron-man-backdrop-video.mp4" type="video/mp4" className="w-full h-full object-center object-cover " autoPlay muted loop></video>
                    </div>

                    {/* Abstract Tech Design */}
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden mix-blend-multiply z-[6]">
                        <img src="/src/assets/abstract-tech-design.jpg" alt="Abstract Tech Design" className="w-full h-full object-cover object-center" />
                    </div>
                    {/* Overlay Gradient */}
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)] z-[2]">
                    </div>
                    {/* Overlay Red filter */}
                    <div className="w-full h-full bg-[--imRed] absolute top-0 left-0 overflow-hidden mix-blend-multiply z-[3] ">
                    </div>
                    <div className="w-full h-full bg-[--imRed80] absolute top-0 left-0 overflow-hidden mix-blend-color z-[6]">
                    </div>

                </div>

                <div className="flex flex-row justify-center w-full xs:w-4/5 h-full mx-auto mt-8">

                    {/* Main text Content */}
                    <div className="relative p-2 xs:w-full h-max">
                        <div ref={mainTextRef} className="relative z-[4] drop-shadow-[0_0_2rem_rgba(0,0,0,0.8)] transition-all duration-700">
                            <h1 className="font-[varien] text-8xl leading-[5rem] xs:text-[9rem] xs:leading-[7rem] lg:text-[12rem] lg:leading-[9rem] xl:text-[15rem] xl:leading-[11.4rem]">IRON<br />MAN</h1>
                            <h2 className="text-xs xs:text-sm lg:text-2xl xl:text-3xl ps-2 lg:ps-4 mt-4 xl:mt-6">TONY STARK | ROBERT DOWNEY JR</h2>
                            <div className="absolute top-5 left-0">
                                <div className="rotate-[-90deg] flex items-center justify-center gap-1 text-nowrap relative left-[-54%] lg:left-[-52%] top-[1.4rem] xs:top-[2.8rem] lg:top-[4rem] xl:top-[5rem] text-[0.5rem] xs:text-xs lg:text-base ">
                                    <div className="w-8 xs:w-12 lg:w-16 xl:w-24 h-[0.08rem] md:h-[0.15rem] bg-white"></div><span>by Stan Lee</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Navigation */}

                        <div className="relative z-10" >
                            <div id="quickNav" ref={quickNavRef} className="flex flex-row gap-x-1 justify-center xs:justify-start text-center xs:ps-4 mt-8 lg:mt-12 xl:mt-16 text-xs lg:text-base xl:text-lg text-nowrap" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                                <a href="#TonyStark" className="bg-[--imRed60] p-2 lg:p-3 lg:px-4 hover:bg-[--imRed80] shadow-[0_0_1rem_rgba(0,0,0,0.4)]">CHARACTER</a>
                                <a href="#StarkTech" className="bg-[--imRed60] p-2 lg:p-3 lg:px-4 hover:bg-[--imRed80] shadow-[0_0_1rem_rgba(0,0,0,0.4)]">STARKTECH</a>
                                <a href="#MarkCollection" className="bg-[--imRed60] p-2 lg:p-3 lg:px-4 hover:bg-[--imRed80] shadow-[0_0_1rem_rgba(0,0,0,0.4)]">THE MARK COLLECTION</a>
                            </div>
                        </div>

                    </div>

                    {/* Subject */}
                    <div className="w-0 h-0 xs:w-full xs:h-full">
                        <img id="subject" ref={subjectRef} className="absolute w-[48%] xs:w-[55%] sm:w-[50%] z-[15] top-[40%] translate-y-[-50%] xs:translate-y-0 xs:top-10 sm:top-0 md:top-[-8%] right-[-4%] md:right-0 transition-transform duration-1000" src="/src/assets/home-subject.svg" alt="Iron Man" />
                    </div>

                </div>


                <div id="social-connect-icons" className="hidden md:flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 justify-center items-center w-max absolute z-20 top-[70%] translate-y-[-50%] right-6 text-lg lg:text-2xl">
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-700 "><FaGithub /></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-700 "><FaLinkedin /></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-700 "><FaSquareBehance /></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-700 "><FaInstagram /></a>
                </div>


            </section>
        </>
    )
}

export default LandingPage;