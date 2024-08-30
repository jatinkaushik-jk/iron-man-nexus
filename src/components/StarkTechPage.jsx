import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StarkTechPage = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#StarkTech',
                scrub: 1,
                start: 'center bottom',
                end: 'center center',
            }
        });
        tl.fromTo('.header-content', { opacity: 0, scale: 0.9, transformOrigin: 'top left' }, { opacity: 1, scale: 1, transformOrigin: 'top left', })
        tl.from('[data-hover-image]', {
            xPercent: -100,
            stagger: 0.2,
        })

    })


    useGSAP(() => {
        const boxes = document.querySelectorAll('[data-hover-image]');

        function handleMouseEnter(e) {
            const targetContainer = e.target;
            const imgContainer = document.createElement('div');
            imgContainer.className = 'imageContainer';
            const imageURL = targetContainer.getAttribute('data-hover-image');

            imgContainer.classList.add('absolute', 'z-20', 'w-28', 'md:w-40', 'top-0', 'left-0', 'h-28', 'md:h-40', 'bg-no-repeat', 'bg-center', 'bg-cover', 'scale-0', 'rounded-full');
            imgContainer.style.backgroundImage = `url(${imageURL})`;

            const tl = gsap.timeline();
            tl.to(imgContainer, {
                x: e.layerX - 40,
                y: e.layerY - 40,
            });
            tl.to(imgContainer, {
                scale: 1,
            });

            targetContainer.appendChild(imgContainer);
        }
        function handleMouseLeave(e) {
            const targetContainer = e.target;
            const imgContainer = document.querySelectorAll('.imageContainer');
            gsap.to(imgContainer, { scale: 0, duration: 0.2 });
            setTimeout(() => {
                imgContainer.forEach((container) => targetContainer.removeChild(container));
            }, 200);
        }
        function handleMouseMove(e) {
            const imgContainer = document.querySelector('.imageContainer');
            const tl = gsap.timeline();
            tl.to(imgContainer, {
                x: e.layerX - 40,
                y: e.layerY - 40,
                delay: 0.1,
            })

        }

        boxes.forEach((box) => {
            box.addEventListener('mouseenter', handleMouseEnter);
            box.addEventListener('mouseleave', handleMouseLeave);
            box.addEventListener('mousemove', handleMouseMove);
        });


        return (() => {
            boxes.forEach((box) => {
                box.removeEventListener('mouseenter', handleMouseEnter);
                box.removeEventListener('mouseleave', handleMouseLeave);
                box.removeEventListener('mousemove', handleMouseMove);
            });
        })

    }, []);

    return (
        <section id="StarkTech" className="relative h-max w-full p-4 overflow-hidden bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/src/assets/tech-backdrop.jpeg)' }}>
            <div id="StarkTechBackground" className="w-full h-full absolute top-0 left-0 overflow-hidden">
                {/* Overlay Gradient */}
                <div className="w-full h-full absolute top-0 left-0 overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)]">
                </div>
                {/* Overlay dark filter */}
                <div className="w-full h-full bg-[#010101c4] absolute top-0 left-0 overflow-hidden mix-blend-multiply">
                </div>
            </div>

            <div className="content relative z-[2] p-2">
                <div className="header-content p-2">
                    <h2 className="font-[varien] text-4xl tracking-wide">STARK TECH</h2>
                    <p className="my-4 mt-6 text-lg">
                        {window.innerWidth >= 768 && 'Explore the groundbreaking technologies invented by Tony Stark, from the Arc Reactor’s limitless energy to the advanced AI JARVIS. Discover the evolution of Iron Man’s suits, powered by cutting-edge innovations like repulsor beams, the Unibeam, and Nano-Tech. Dive into the futuristic holographic interfaces he used to design and control his tech. Learn how Stark Tech has shaped the Marvel Universe and left a lasting legacy.'}

                        {window.innerWidth < 768 && 'Explore Tony Stark’s game-changing tech: from the Arc Reactor and JARVIS AI to his Nano-Tech suits. See how these innovations, like repulsor beams and holographic interfaces, shaped the Marvel Universe and defined Iron Man’s legacy.'}
                    </p>
                </div>
                <div className="body-content p-4 px-10 lg:mt-16 my-10">
                    <div className="p-2 bg-transparent border-b-2 border-white hover:bg-[rgba(0,0,0,0.6)] transition-colors duration-500" data-hover-image="./src/assets/arcReactorImage.jpeg">
                        <div className="ps-6 px-2 py-3">
                            <h3 className="font-[varien] text-xl tracking-wide">Arc Reactor</h3>
                            <p className="pt-2">A clean energy source powering Iron Man’s suits and a symbol of limitless potential.</p>
                        </div>
                    </div>
                    <div className="p-2 bg-transparent border-b-2 border-white hover:bg-[rgba(0,0,0,0.6)] transition-colors duration-500" data-hover-image="./src/assets/jarvisImage.jpeg">
                        <div className="ps-6 px-2 py-3">
                            <h3 className="font-[varien] text-xl tracking-wide">JARVIS (AI System)</h3>
                            <p className="pt-2">An advanced AI assistant managing Tony’s tech, suits, and operations.</p>
                        </div>
                    </div>
                    <div className="p-2 bg-transparent border-b-2 border-white hover:bg-[rgba(0,0,0,0.6)] transition-colors duration-500" data-hover-image="./src/assets/repulsorTechnologyImage.jpeg">
                        <div className="ps-6 px-2 py-3">
                            <h3 className="font-[varien] text-xl tracking-wide">Repulsor Technology</h3>
                            <p className="pt-2">Powerful energy beams used for flight, combat, and defense in the Iron Man suits.</p>
                        </div>
                    </div>
                    <div className="p-2 bg-transparent border-b-2 border-white hover:bg-[rgba(0,0,0,0.6)] transition-colors duration-500" data-hover-image="./src/assets/nanoTechnologyImage.jpeg">
                        <div className="ps-6 px-2 py-3">
                            <h3 className="font-[varien] text-xl tracking-wide">Nano Technology</h3>
                            <p className="pt-2">Adaptive nanobots that allow rapid suit deployment and on-the-fly modifications.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default StarkTechPage