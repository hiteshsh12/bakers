export default function PhotoGallery(){
    return(
        <div id="photo-gallery-body" className="flex flex-col justify-center items-center my-16">
            <h1 className="text-[4rem] font-bold text-[#843F20]">Baking The Taste</h1>
            <p className="w-7/12 text-center mt-4 mb-12 text-[#757575]">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r</p>
            <div id="photos-container" className="grid grid-rows-2 grid-cols-12 gap-[1rem] w-11/12">
                <div className="col-span-6 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery1.png`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
                <div className="col-span-3 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery2.png`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
                <div className="col-span-3 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery3.jpg`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
                <div className="col-span-2 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery4.png`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
                <div className="col-span-2 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery5.png`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
                <div className="col-span-2 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery6.png`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
                <div className="col-span-6 h-64">
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/gallery7.png`} alt="img" className="w-full h-full rounded-xl"></img>
                </div>
            </div>
        </div>
    )
}