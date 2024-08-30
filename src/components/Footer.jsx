import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#151515]">
            <div className="bg-black p-4 font-semibold text-lg text-center tracking-wide">
                <a href="https://github.com/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" >LET’S COLLAB</a>
            </div>
            <div className="flex flex-col p-4">
                <div className="flex flex-row gap-10 items-center justify-evenly my-6 mb-10 flex-wrap">
                    <div className="flex flex-col justify-center items-center gap-y-10">
                        <div><img src="./src/assets/marvel-studios-logo.svg" alt="Marvel Studios Logo" /></div>
                        <div className="flex flex-col  items-start justify-center gap-y-1 font-semibold tracking-wider">
                            <a className="hover:text-[#ccc] transition-colors" href="https://www.marvel.com/corporate/about" target="_blank" rel="noopener noreferrer">ABOUT MARVEL</a>
                            <a className="hover:text-[#ccc] transition-colors" href="https://help.marvel.com" target="_blank" rel="noopener noreferrer">HELP/FAQS</a>
                            <a className="hover:text-[#ccc] transition-colors" href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]" target="_blank" rel="noopener noreferrer">CAREER</a>
                            <a className="hover:text-[#ccc] transition-colors" href="https://www.marvel.com/corporate/interns" target="_blank" rel="noopener noreferrer">INTERNSHIP</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-y-1">
                        <a className="hover:text-[#ccc] transition-colors" href="https://www.marvel.com/corporate/advertising" target="_blank" rel="noopener noreferrer">ADVERTISING</a>
                        <a className="hover:text-[#ccc] transition-colors" href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA" target="_blank" rel="noopener noreferrer">DISNEY+</a>
                        <a className="hover:text-[#ccc] transition-colors" href="https://www.marvelhq.com" target="_blank" rel="noopener noreferrer">MARVELHQ.COM</a>
                        <a className="hover:text-[#ccc] transition-colors" href="https://www.marvel.com/redeem" target="_blank" rel="noopener noreferrer">REDEEM DIGITAL<br />COMICS</a>
                    </div>
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <a href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer" target="_blank" rel="noopener noreferrer">
                            <img className="w-20" src="./src/assets/footer-image-01.png" alt="Marvel Insider" />
                        </a>
                        <a href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer" target="_blank" rel="noopener noreferrer">
                            <img className="w-20" src="./src/assets/footer-image-02.png" alt="Marvel Unlimited" />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4 font-semibold tracking-wider">
                        <h5>FOLLOW US</h5>
                        <div className="flex flex-row gap-5 text-2xl">
                            <a href="https://github.com/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="text-[#767676] transition-colors duration-500 hover:text-white"><FaGithub /></a>
                            <a href="https://linkedin.com/in/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="text-[#767676] transition-colors duration-500 hover:text-white"><FaLinkedin /></a>
                            <a href="https://behance.net/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="text-[#767676] transition-colors duration-500 hover:text-white"><FaSquareBehance /></a>
                            <a href="https://instagram.com/jatinkaushik.jk" target="_blank" rel="noopener noreferrer" className="text-[#767676] transition-colors duration-500 hover:text-white"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm text-[#ccc]">Designed & Developed by Jatin Kaushik | Source Marvel Studios</div>
            </div>
        </footer>
    )
}

export default Footer;