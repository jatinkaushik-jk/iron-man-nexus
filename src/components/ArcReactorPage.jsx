import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin({ useGSAP, ScrollTrigger })

const ArcReactorPage = () => {

    useGSAP(() => {

        const scrollContainer = document.querySelector(".scrollContainer");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#ArcReactor',
                scrub: true,
                start: 'center bottom',
                end: 'center top',
                // markers: true,
            }
        });

        const scrollBox = gsap.utils.toArray(".scrollBox");
        gsap.to(scrollBox, {
            xPercent: -100 * (scrollBox.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#ArcReactor",
                pin: true,
                start: "top top",
                scrub: 1,
                snap: {
                    snapTo: 1 / (scrollBox.length - 1),
                    inertia: false,
                    duration: { min: 0.1, max: 0.2 }
                },
                end: () => "+=" + (scrollContainer.offsetWidth - innerWidth)
            }
        });


        tl.fromTo('#arImg', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, transformOrigin: 'bottom right' });
        tl.fromTo('.headings', { yPercent: 10, rotate: 0 }, { yPercent: -10, rotate: '5deg', stagger: 0.1, ease: 'power1.inOut' });

    }, []);



    return (
        <>
            <section id="ArcReactor" className="relative h-[24rem] xs:h-[30rem] lg:h-[38rem] xl:h-[45rem] p-4 overflow-hidden bg-black z-[0] w-full" >
                <div className="w-[400vw] h-full flex flex-nowrap scrollContainer">
                    <div id="heading01" className="headings scrollBox relative z-10 w-full h-full flex items-center ps-0 xs:ps-4 sm:ps-8 md:ps-16">
                        <div className="w-min">
                            <h4 className="font-[varien] text-4xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-nowrap">ARC Reactor</h4>
                            <p className="text-xs sm:text-sm md:text-base lg:text-2xl py-2 text-pretty">A clean energy source powering Iron Man’s suits and a symbol of limitless potential.</p>
                        </div>
                    </div>
                    <div id="heading02" className="subHeadings scrollBox relative z-10 w-full h-full flex items-center ps-0 xs:ps-4 sm:ps-8 md:ps-16">
                        <div>
                            <h4 className="font-[varien] text-4xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Limitless <br /> Energy</h4>
                        </div>
                    </div>
                    <div id="heading03" className="subHeadings scrollBox relative z-10 w-full h-full flex items-center ps-0 xs:ps-4 sm:ps-8 md:ps-16">
                        <div>
                            <h4 className="font-[varien] text-4xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Self <br />Sustaining</h4>
                        </div>
                    </div>
                    <div id="heading04" className="subHeadings scrollBox relative z-10 w-full h-full flex items-center ps-0 xs:ps-4 sm:ps-8 md:ps-16">
                        <div>
                            <h4 className="font-[varien] text-3xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Miniaturized <br />Power Source</h4>
                        </div>
                    </div>
                </div>
                <div id="arImg" className="w-40 xs:w-48 sm:w-64 md:w-72 lg:w-80 h-40 xs:h-48 sm:h-64 md:h-72 lg:h-80 xl:w-96 xl:h-96 fixed z-[-1] bottom-[-1%] right-[-1%] opacity-100" style={{ clipPath: ' polygon(1% 1%, 1% 99%, 99% 99%, 99% 1%)' }} >
                    <img className="w-full h-full object-center object-contain aspect-square" src="/assets/arcReactorGIF.gif" alt="Arc Reactor" />
                </div>
            </section>
        </>
    )
}

export default ArcReactorPage