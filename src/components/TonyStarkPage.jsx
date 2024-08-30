import { useEffect, useState } from "react";
import AboutContentTemplate from "./AboutContentTemplate"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TonyStarkPage = () => {

    const data = [{
        title: 'TONY STARK',
        content: '<b>Tony Stark / Anthony Edward Stark</b> is a fictional character primarily portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) media franchise —based on the Marvel Comics character of the same name— commonly known by his alias, Iron Man.<br/> Stark is initially depicted as an industrialist, genius inventor, and former playboy who is CEO of Stark Industries. Initially the chief weapons manufacturer for the U.S. military, he has a change of heart and redirects his technical knowledge into creating mechanized suits of armor, which he uses to defend Earth.',
        link: 'https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)',
    },
    {
        title: 'POWERS',
        content: 'Iron Man&apos;s abilities stem from his advanced suits of armor, which provide superhuman strength, flight, and an array of powerful weapons, including repulsor rays, missiles, and a unibeam projector. The suit&apos;s technology allows for enhanced durability, advanced AI systems like J.A.R.V.I.S., and regenerative health.Tony Stark&apos;s genius level intellect enables him to continuously upgrade his suits, making Iron Man a formidable hero.',
        link: null,
    },
    {
        title: 'MOVIES',
        content: 'Iron Man has been featured in several major films within the Marvel Cinematic Universe (MCU). Key movies include the original Iron Man trilogy (Iron Man 2008, Iron Man 2 2010, Iron Man 3 2013), and his pivotal roles in The Avengers series, such as The Avengers (2012), Avengers: Age of Ultron (2015), Avengers: Infinity War (2018), and Avengers: Endgame (2019). Tony Stark&apos;s character development from a self-centered billionaire to a self-sacrificing hero is a central arc in the MCU.',
        link: null,
    },
    {
        title: 'COMICS',
        content: 'Iron Man debuted in Tales of Suspense #39 in 1963, created by Stan Lee, Larry Lieber, Don Heck, and Jack Kirby. Over the decades, Iron Man has appeared in countless comic series, including The Invincible Iron Man, where his battles against villains like the Mandarin, and his struggles with personal demons, such as alcoholism in the "Demon in a Bottle" storyline, are highlighted. His comics explore themes of technology, ethics, and heroism, making Iron Man one of Marvel&apos;s most enduring characters.',
        link: null,
    },
    ];
    const [dataIndex, setDataIndex] = useState(0);

    useEffect(() => {
        // Re-trigger the animation whenever dataIndex changes
        gsap.fromTo(
            "#aboutContent",
            { x: '-100%', opacity: 0 },
            { x: 0, opacity: 1, duration: 1, }
        );
    }, [dataIndex]);


    return (
        <section id="TonyStark" className="relative h-[30rem] xs:h-[35rem] md:h-[38rem] lg:h-[43rem] xl:h-[50rem] w-full overflow-hidden bg-top bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/src/assets/about-backdrop.jpg)' }}>

            <div id="about-subject" className="hidden md:block w-full h-full absolute top-0 left-0 overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-[6]">
                    <img src="/src/assets/about-subject.png" alt="Iron Man" className="w-full h-full object-cover object-top " />
                </div>
            </div>

            {/* About Navigations */}
            <div className="bg-black h-[11.5%]" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                <div className="flex flex-row h-full items-center sm:gap-x-2 ps-2 sm:ps-8 md:text-xl lg:text-3xl font-normal relative z-10">
                    <a href="#" className="h-full p-3 xs:px-4 border-b-4 border-transparent hover:border-[--imRed] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 flex justify-center items-center " onClick={(e) => { e.preventDefault(); setDataIndex(0) }} >BIO</a>
                    <a href="#" className="h-full p-3 xs:px-4 border-b-4 border-transparent hover:border-[--imRed] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 flex justify-center items-center " onClick={(e) => { e.preventDefault(); setDataIndex(1) }} >POWERS</a>
                    <a href="#" className="h-full p-3 xs:px-4 border-b-4 border-transparent hover:border-[--imRed] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 flex justify-center items-center " onClick={(e) => { e.preventDefault(); setDataIndex(2) }} >MOVIES</a>
                    <a href="#" className="h-full p-3 xs:px-4 border-b-4 border-transparent hover:border-[--imRed] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 flex justify-center items-center " onClick={(e) => { e.preventDefault(); setDataIndex(3) }} >COMICS</a>
                </div>
            </div>
            <div className="flex md:flex-row w-full h-[88.5%] relative z-10" style={{ fontFamily: 'Roboto Condensed , sans-serif' }}>
                {data[dataIndex] && <AboutContentTemplate title={data[dataIndex].title} content={data[dataIndex].content} link={data[dataIndex].link} />}
                <div className="w-0 md:w-4/5 h-0 md:h-full bg-transparent"></div>
            </div>


        </section>
    )
}

export default TonyStarkPage