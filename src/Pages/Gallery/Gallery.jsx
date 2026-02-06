import Header from "../../Components/Header/Header"
import RectSlider from '../../Components/Slider/RectSlider'
import PhotoGallery from "../../Components/PhotoGallery"
import CircleSlider from '../../Components/Slider/CircleSlider'

export default function Gallery(){
    const header = {
        heading:'Simply Tasty!',
        parah:'Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r',
        button:'Explore courses',
        img:`${process.env.PUBLIC_URL}/images/Header/galleryHeader.png`
    }

    const rectSlider=[
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`}
    ]

    return (
        <div id="gallery-body">
            <Header data={header}/>

            <section className="flex flex-col justify-center items-center mt-12 mb-8">
                <h1 className="text-[4rem] font-bold text-[#843F20]">Range Products</h1>
                <p className="w-6/12 text-center text-[#757575]">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r</p>
                <RectSlider data={rectSlider}/>
            </section>

            <PhotoGallery/>

            <section className="flex flex-col justify-center items-center mt-12 mb-8">
                <h1 className="text-[4rem] font-bold text-[#843F20]">Faces of Bakers's Villa</h1>
                <p className="w-6/12 text-center text-[#757575]">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r</p>
                <CircleSlider data={rectSlider}/>
            </section>
        </div>
    )
}