import { useRef, useState, useEffect } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const Navbar = () => {

    const menuBar = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(window.scrollY)


    useEffect(() => {

        const controlNavbar = () => {
            let currentScrollPosition = window.scrollY;

            if (scrollPosition > currentScrollPosition) {
                setShow(true)
            } else {
                setShow(false)
            }
            setScrollPosition(currentScrollPosition);
        }

        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [scrollPosition]);

    const handleMenuClick = (e) => {

        const tl = gsap.timeline();

        if (e.currentTarget.id === 'menuBtn') {
            e.currentTarget.id = 'closeBtn';
            tl.to(menuBar.current, {
                height: '25.5rem',
                ease: 'expo.inOut'
            });
            tl.fromTo('#menuBar a', {
                opacity: 0,
                y: 1,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: 'expo.inOut'
            });
            setTimeout(() => {
                setIsOpen(true);
            }, 300);
            return 1;
        };
        if (e.currentTarget.id === 'closeBtn') {
            e.currentTarget.id = 'menuBtn';
            tl.to('#menuBar a', {
                opacity: 0,
                stagger: 0.1,
                ease: 'expo.inOut'
            });
            tl.to(menuBar.current, {
                height: 0,
                ease: 'expo.inOut'
            });
            setTimeout(() => {
                setIsOpen(false);
            }, 300);
            return 1;
        };

    };


    return (
        <>
            <header className={show ? 'fixed top-0 z-50 bg-black w-full px-2 shadow-[0_4px_11px_rgba(0,0,0,0.5)] h-[4.5rem] flex transition-all duration-1000' : 'fixed top-[-100%] z-50 bg-black w-full px-2 shadow-[0_4px_11px_rgba(0,0,0,0.5)] h-[4.5rem] flex transition-all duration-1000'}>
                {/* Navbar for large screen devices */}
                <nav className="hidden w-full h-full lg:w-[90%] md:flex flex-row items-center justify-evenly lg:px-2 text-center mx-auto text-nowrap font-bold tracking-wide gap-x-2 text-sm">
                    <div id="nav-left" className="w-full h-full flex flex-row justify-evenly items-center gap-x-0 lg:gap-x-2">
                        <a href="#Home" className="nav-anchor">HOME</a>
                        <a href="#TonyStark" className="nav-anchor">TONY STARK</a>
                        <a href="#StarkTech" className="nav-anchor">STARK TECH</a>
                    </div>
                    <div id="nav-center" className="w-96 h-full flex items-center justify-evenly text-center">
                        <a className="mx-1" href="#" target="_blank" rel="noopener noreferrer"><img src="/assets/marvel-studios-logo.svg" alt="Marvel Studios Logo" /></a>
                    </div>
                    <div id="nav-right" className="w-full h-full flex flexx-row justify-evenly items-center gap-x-0 lg:gap-x-2">
                        <a href="#ArcReactor" className="nav-anchor">ARC RECTOR</a>
                        <a href="#MarkCollection" className="nav-anchor">MARK COLLECTION</a>
                        <a href="#Media" className="nav-anchor">MEDIA</a>
                    </div>
                </nav>
                {/* Navbar for small screen devices */}
                <nav className="md:hidden w-full py-2 flex flex-row justify-between items-center">
                    <div id="nav-center" className="w-full flex items-center justify-center text-center mx-auto py-2">
                        <a href="#" target="_blank" rel="noopener noreferrer"><img className="h-full w-full object-center object-contain" src="/assets/marvel-studios-logo.svg" alt="Marvel Studios Logo" /></a>
                    </div>
                    <button id="menuBtn" className="text-4xl cursor-pointer pe-2" onClick={handleMenuClick}>
                        {!isOpen && <RiMenu4Line className="animate-spin-once" />}
                        {isOpen && <RxCross2 className="animate-spin-once" />}
                    </button>
                </nav>
                <div ref={menuBar} id="menuBar" className="absolute w-full h-0 overflow-hidden top-full right-0 z-20 transition-all duration-500 bg-black shadow-[0_4px_11px_rgba(0,0,0,0.5)] ">
                    <div className="px-2 pb-6 flex flex-col gap-y-2 text-center justify-center items-center">
                        <a href="#Home" className=" p-4 w-full flex justify-center bg-black transition-all duration-500 ease-in-out hover:bg-[#121212]">HOME</a>
                        <a href="#TonyStark" className=" p-4 w-full flex justify-center bg-black transition-all duration-500 ease-in-out hover:bg-[#121212]">TONY STARK</a>
                        <a href="#StarkTech" className=" p-4 w-full flex justify-center bg-black transition-all duration-500 ease-in-out hover:bg-[#121212]">STARK TECH</a>
                        <a href="#ArcReactor" className=" p-4 w-full flex justify-center bg-black transition-all duration-500 ease-in-out hover:bg-[#121212]">ARC RECTOR</a>
                        <a href="#MarkCollection" className=" p-4 w-full flex justify-center bg-black transition-all duration-500 ease-in-out hover:bg-[#121212]">MARK COLLECTION</a>
                        <a href="#Media" className=" p-4 w-full flex justify-center bg-black transition-all duration-500 ease-in-out hover:bg-[#121212]">MEDIA</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar