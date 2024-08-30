import { useState } from "react";
import MediaCard from "./MediaCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MediaPage = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#Media',
                scrub: true,
                start: '20% bottom',
                end: 'top top',
            }
        });
        tl.fromTo('[data-media-image]', { scale: 0 }, { scale: 1, ease: 'bounce', stagger: 0.1 });
    })

    const cards = [
        { id: '_01', src: './src/assets/media_01.jpeg', size: 'small' },
        { id: '_02', src: './src/assets/media_02.jpeg', size: 'small' },
        { id: '_03', src: './src/assets/media_03.jpeg', size: 'large' },
        { id: '_04', src: './src/assets/media_04.jpeg', size: 'medium' },
        { id: '_05', src: './src/assets/media_05.jpeg', size: 'small' },
        { id: '_06', src: './src/assets/media_06.jpeg', size: 'large' },
        { id: '_07', src: './src/assets/media_07.jpeg', size: 'large' },
        { id: '_08', src: './src/assets/media_08.jpeg', size: 'medium' },
        { id: '_09', src: './src/assets/media_09.jpeg', size: 'medium' },
        { id: '_10', src: './src/assets/media_10.jpeg', size: 'medium' },
    ]

    return (
        <>
            <section id="Media" className="bg-[#080808] h-max py-10 pb-16 w-full">
                <div className=" w-[90%] mx-auto h-full">
                    <div>
                        <h3 className="font-[varien] text-7xl md:text-9xl text-center xs:text-start ">MEDIA</h3>
                    </div>
                    <div id="mediaContainer" className="mt-20 w-full h-max gap-x-4 grid justify-center" style={{ gridTemplateColumns: 'repeat(auto-fill, var(--mediaCardWidth))', gridAutoRows: '1rem' }}>
                        {cards.map((card) => {
                            return (<MediaCard key={card.id} cardData={card} />)
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default MediaPage