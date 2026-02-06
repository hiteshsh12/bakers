import { useState, useEffect, useRef } from "react";
import './carousel.css'

export default function CircleCarousel(props){
    const {data} = props;
    const [currIndex,setCurrIndex] = useState(0);
    const itemsToShow = 3;
    const dots = Math.ceil(data.length/itemsToShow);

    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            // Calculate the width of each slide item based on container width
            const slideWidth = sliderRef.current.clientWidth;
            sliderRef.current.style.scrollBehavior = 'smooth';
            sliderRef.current.scrollLeft = currIndex * slideWidth;
        }
    }, [currIndex, itemsToShow]);

    const handleDotClick = (index) => {
        setCurrIndex(index);
    };

    return(
        <div className="relative flex flex-col justify-center items-center w-content my-8 px-4 box-border" id="slider-body">
            <div ref={sliderRef} className={`flex ${(dots===1)?'justify-center':'justify-start'} items-center p-8 box-border transition-transform duration-1000 ease-in-out h-auto overflow-x-scroll`} id="slider">
                {
                    data.map((slide,index)=>{
                        return(
                            <div key={index} className="flex-shrink-0 min-w-[25%] max-w-[25%] mx-12 hover:scale-[1.15] duration-200 ease-in-out">
                                <img src={slide.img} alt="img" className="w-full rounded-2xl"></img>
                            </div>
                        )
                    })
                }
            </div>

            <div id="dots-container" className="mt-12">
                {
                    Array.from({length:dots}).map((dot,index)=>{
                        return(
                            <div 
                            key={index} 
                            className={`inline-block w-[10px] h-[10px] border-[1px] rounded-full pointer mx-[2px] ${(currIndex===index)?'bg-slate-800':'bg-slate-400'}`}
                            onClick={()=>handleDotClick(index)}
                            />                 
                        )
                    })
                }
            </div>
        </div>
    )
}


//style={{ transform: `translateX(-${currIndex * slideWidth}%)` }}