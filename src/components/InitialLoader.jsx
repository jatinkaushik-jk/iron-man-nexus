import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP)

const InitialLoader = ({ onCompleteFunction }) => {

    useGSAP(() => {

        const text = new SplitType('#text', { types: 'chars' });
        const chars = text.chars;

        const tl = gsap.timeline({
            onComplete: () => onCompleteFunction(true),
            paused: true,
        });

        window.onload = () => setTimeout(() => { tl.play() }, 13000);
        tl.to('#videoPlayback', { opacity: 0 });
        tl.fromTo(chars, { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.07, ease: 'power2' });
        tl.to('#text', { scale: 1.2, delay: 0.6 });
        tl.to('#text', { scale: 0 });
        tl.to('#animationSection', { yPercent: -100 });

    })


    return (
        <section id="animationSection" className="relative w-full h-screen bg-[rgb(171,2,9)]">
            <div id="videoPlayback" className="absolute top-0 left-0 w-full h-full">
                <video src="./src/assets/videoplayback.mp4" itemType="video/mp4" className="w-full h-full object-cover object-center aspect-video" autoPlay muted controls={false}></video>
            </div>
            <div className="absolute top-0 left-0 w-full h-full font-[varien] flex justify-center items-center">
                <div className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl" id="text" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>I am Iron Man</div>
            </div>
        </section>
    )
}

export default InitialLoader