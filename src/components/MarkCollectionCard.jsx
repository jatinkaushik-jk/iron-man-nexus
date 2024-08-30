
const MarkCollectionCard = ({ markCardData }) => {
    return (
        <>
            <div data-mark-suit className="group w-14 md:w-[4.5rem] lg:w-24 h-52 xs:h-64 md:h-80 lg:h-96 bg-white rounded-[4rem] transition-all duration-500 bg-top bg-cover flex items-end justify-center overflow-hidden saturate-0 hover:rounded-xl hover:lg:w-60 hover:w-48 hover:saturate-100 " style={{ backgroundImage: `url(${markCardData.url})` }}>
                <h5 className="font-[varien] text-sm md:text-lg tracking-wide m-2 text-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 drop-shadow-[1px_1px_0.25rem_rgba(0,0,0,1)]">{markCardData.name}</h5>
            </div>
        </>
    )
}

export default MarkCollectionCard