import { useEffect, useRef, useState } from "react";
import MarkCollectionCard from "./MarkCollectionCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MarkCollectionPage = () => {

    const redBG = useRef();

    const [markCards, setMarkCards] = useState([
        { id: '_01', name: 'Mark I', url: '/assets/mark-i.jpeg' },
        { id: '_02', name: 'Mark V', url: '/assets/mark-v.jpeg' },
        { id: '_03', name: 'War Machine', url: '/assets/mark-warmachine.jpeg' },
        { id: '_04', name: 'Mark L', url: '/assets/mark-l.jpeg' },
        { id: '_05', name: 'Mark XLVI', url: '/assets/mark-xlvi.jpeg' },
        { id: '_06', name: 'Hulk Buster', url: '/assets/mark-hulkbuster.jpeg' },
        { id: '_07', name: 'Mark LXXXV', url: '/assets/mark-lxxxv.jpeg' },
    ]);

    useGSAP(() => {

        const tlOne = gsap.timeline({
            scrollTrigger: {
                trigger: '#MarkCollectionIntro',
                scrub: 1,
                start: 'top bottom',
                end: '5% top',
            }
        });

        tlOne.fromTo('.markinitial', {
            xPercent: -100,
            scale: 0.2,
            opacity: 0,
        },
            {
                xPercent: 0,
                scale: 1,
                opacity: 1,
                stagger: 0.1,
                ease: 'power1',
            });

        const tlTwo = gsap.timeline({
            scrollTrigger: {
                trigger: '#MarkCollections',
                scrub: 1,
                start: 'top bottom',
                end: 'top center',
                markers: true
            }
        });

        tlTwo.fromTo('[data-mark-suit]', {
            scale: 0.5,
            transformOrigin: 'center',
            opacity: 0,
        },
            {
                scale: 1,
                opacity: 1,
                ease: 'power1',
                stagger: 0.1,
            });

    })


    return (
        <>
            <section id="MarkCollectionIntro" className="relative h-[24rem] xs:h-[30rem] lg:h-[38rem] xl:h-[45rem] w-full p-4 overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/assets/media_02.jpeg)' }}>
                <div className="CollectionBackground w-full h-full absolute top-0 left-0 overflow-hidden">
                    {/* Overlay Gradient */}
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)] z-[2]">
                    </div>
                    {/* Overlay Red filter */}
                    <div ref={redBG} className="w-full h-full bg-[--imRed] absolute top-0 left-0 overflow-hidden mix-blend-multiply  backdrop-blur-sm z-[3]">
                    </div>
                </div>

                <div id="markBox" className="absolute top-0 left-0 z-[6] w-full h-full">

                    <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                        <img id="markElementIMG" className="markinitial w-[60%] md:w-[50%] drop-shadow-[0_0_1rem_rgba(0,0,0,0.4)] z-[2]" src="/assets/mark-collection-masked.svg" alt="Iron Man Mark Collection Element" />
                    </div>

                    <h2 id="markHeading" className="markinitial w-full h-full flex justify-center items-center font-[varien] text-2xl xs:text-4xl md:text-5xl lg:text-7xl xl:text-9xl drop-shadow-[0_0_0.5rem_rgba(0,0,0,0.6)] absolute top-0 left-0 z-[3]">THE MARK <br />COLLECTION</h2>

                </div>

            </section>

            <section id="MarkCollections" className="relative h-[24rem] xs:h-[30rem] lg:h-[38rem] xl:h-[45rem] w-full p-4 overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/assets/media_02.jpeg)' }}>
                <div className="CollectionBackground w-full h-full absolute top-0 left-0 overflow-hidden">
                    {/* Overlay Gradient */}
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)] z-[2]">
                    </div>
                    {/* Overlay Red filter */}
                    <div ref={redBG} className="w-full h-full bg-[--imRed] absolute top-0 left-0 overflow-hidden mix-blend-multiply  backdrop-blur-sm z-[3]">
                    </div>

                </div>

                <div className="relative z-[6] w-full h-full p-4">
                    <div id="MarkSuitContainer" className="w-full h-full flex flex-row gap-x-2 justify-center items-center">
                        {window.innerWidth > 600 ? (markCards.map((card) => {
                            return (<MarkCollectionCard key={card.id} markCardData={card} />)
                        }))
                            : (markCards.filter((card, index) => index > 0)).map((card) => {
                                return (<MarkCollectionCard key={card.id} markCardData={card} />)
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default MarkCollectionPage