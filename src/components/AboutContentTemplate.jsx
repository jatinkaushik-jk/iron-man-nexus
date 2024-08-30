import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AboutContentTemplate = ({ title, content, link }) => {

    useGSAP(() => {
        gsap.fromTo('#aboutContent', {
            x: '-100%',
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
        })
    })

    return (
        <>
            <div id="aboutContent" className="w-full bg-[rgba(0,0,0,0.7)] overflow-y-auto">
                <div className="flex flex-row h-full">
                    <div className="w-[10%] xs:w-[20%] flex justify-center items-center">
                        <div className="hidden xs:block rotate-[-90deg] text-nowrap text-center xs:text-xl sm:text-2xl">About The Character</div>
                    </div>
                    <div className="w-full py-2 xs:pt-6 pe-12 md:pe-6 flex items-center">
                        <div className="w-full flex flex-col items-start xl:gap-y-4">
                            <h2 className="font-[varien] text-3xl lg:text-5xl">{title}</h2>
                            <p className="text-sm xs:text-base xl:text-xl py-4 xs:mt-4" dangerouslySetInnerHTML={{ __html: content }}>
                            </p>
                            {link && <button className=" p-1 px-2 xs:p-2 xs:px-3 lg:p-3 lg:px-5 border-2 border-white text-sm xs:text-lg md:text-xl mt-1 xs:mt-4 lg:mt-10 hover:text-black hover:bg-white hover:font-semibold transition-all duration-300"><a href={link} target="_blank" rel="noopener noreferrer" >See more</a></button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContentTemplate