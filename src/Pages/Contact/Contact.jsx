import Navbar from "../../Navbar/Navbar";
import PhotoGallery from "../../Components/PhotoGallery";
import Footer from "../../Components/Footer/Footer";

export default function Contact(){
    return(
        <div id="contact-body">
            <div id="contact-header" className="w-full flex flex-col items-center justify-start p-8 box-border text-white rounded-b-[10rem]" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/images/Header/galleryHeader.png')`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <Navbar/>
                <h1 className="text-[4rem] font-bold mb-2 mt-16">Contact Us</h1>
                <p className="w-6/12 mb-8 text-center">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem</p>
                <form className="grid grid-rows-5 grid-cols-2 w-6/12 text-black mb-16 gap-x-[0.8rem] gap-y-[0.5rem] ">
                    <div className="flex flex-col items-start justify-center">
                        <label className="text-[0.68rem] text-[#F7F0E6] mb-[3px]">NAME</label>
                        <input type="text" placeholder="Enter your name..." className="w-11/12 bg-[#F7F0E6] px-4 py-2 rounded-3xl text-sm" required></input>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <label className="text-[0.68rem] text-[#F7F0E6] mb-[3px]">EMAIL ADDRESS</label>
                        <input type="email" placeholder="e.g. abc@gmail.com" className="w-11/12 bg-[#F7F0E6] px-4 py-2 rounded-3xl text-sm" required></input>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <label className="text-[0.68rem] text-[#F7F0E6] mb-[3px]">SUBJECT</label>
                        <input type="text" placeholder="Enter Subject" className="w-11/12 bg-[#F7F0E6] px-4 py-2 rounded-3xl text-sm"></input>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <label className="text-[0.68rem] text-[#F7F0E6] mb-[3px]">ENQUIRY TYPE</label>
                        <input type="text" placeholder="e.g. Advertising" className="w-11/12 bg-[#F7F0E6] px-4 py-2 rounded-3xl text-sm"></input>
                    </div>
                    <div className="col-span-2 row-span-2 flex flex-col items-start justify-center">
                        <label className="text-[0.68rem] text-[#F7F0E6] mb-[3px]">MESSAGE</label>
                        <textarea placeholder="Enter your message..." className="w-[95%] rounded-xl h-28 py-2 px-4 bg-[#F7F0E6]"></textarea>
                    </div>
                    <div className="col-span-2 w-full mt-4 flex justify-center items-center">
                        <button className="w-3/12 px-[2rem] box-border py-2 border-[#843F20] bg-[#843F20] text-[#F7F0E6] rounded-2xl">Submit</button>
                    </div>
                </form>
            </div>

            <PhotoGallery/>

            <Footer/>
        </div>
    )
}