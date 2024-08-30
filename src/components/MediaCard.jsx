import { useEffect, useState } from "react";
import gsap from "gsap";


const MediaCard = ({ cardData }) => {
    const [cardSize, setCardSize] = useState(15);

    useEffect(() => {
        if (cardData.size === 'small') {
            setCardSize(10);

        }
        else if (cardData.size === 'medium') {
            setCardSize(15);
        }
        if (cardData.size === 'large') {
            setCardSize(22);
        }
    })

    return (
        <>
            <div className={`w-[--mediaCardWidth] h-[${cardSize}] rounded-lg overflow-hidden`} style={{ height: `${cardSize}rem`, gridRowEnd: `span ${cardSize + 1}` }}>
                <img data-media-image className="w-full h-full object-center object-cover hover:scale-105 transition-all duration-300" src={cardData.src} alt="Iron Man Media" onMouseEnter={(e) => { gsap.to(e.target, { scale: 1.1, duration: 0.1, ease: 'power1' }) }} onMouseLeave={(e) => { gsap.to(e.target, { scale: 1, duration: 0.1, ease: 'power1' }) }} />
            </div>
        </>
    )
}


export default MediaCard