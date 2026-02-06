import { PiForkKnifeFill } from "react-icons/pi";
import { MdTimer } from "react-icons/md";


export default function CourseCard(props){
    const {data} = props;

    return(
        <div id="card-body" className="group bg-white p-2 mx-4 my-4 w-60 rounded-2xl flex-shrink-0 text-[#757575] group-hover:text-white hover:bg-[#843F20] transition ease-in-out duration-[0.6s]">
            <img src={data.img} alt={data.name} className="w-[100%] rounded-xl mb-2"></img>
            <h4 className="mb-2 min-h-[4rem] px-2 font-semibold group-hover:text-white">{data.name}</h4>
            <div className="flex justify-between items-center px-2 pb-[2px] group-hover:text-white transition ease-in-out duration-[0.6s]">
                <p className="flex items-center text-[0.65rem] font-[500]"><MdTimer className="group-hover:text-white text-xs text-[#843F20] mr-[1px]  transition ease-in-out duration-[0.6s]"/> {data.time}</p>
                <p className="flex items-center text-[0.65rem] font-[500]"><PiForkKnifeFill className="group-hover:text-white text-xs text-[#843F20] mr-[1px]  transition ease-in-out duration-[0.6s]"/> {data.mentor}</p>
            </div>
        </div>
    )
}