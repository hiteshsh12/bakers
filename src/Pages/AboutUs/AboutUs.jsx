import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import RectSlider from '../../Components/Slider/RectSlider'
import CircleSlider from '../../Components/Slider/CircleSlider'

export default function AboutUs(){
    const sliderData1 = [
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/sliderImg.png`}
    ]

    const sliderData2 = [
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/face1.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/face2.png`},
        {img:`${process.env.PUBLIC_URL}/images/AboutUs/face3.png`}
    ]

    const data = {
        heading:'About Us',
        parah:"Welcome to Bakersvilla, where passion meets precision! We are dedicated to teaching and perfecting the art of baking. Our hands-on workshops and expert instructors help aspiring bakers create sweet and savory masterpieces. Join us and turn your baking dreams into reality!",
        button:'Explore courses',
        img:`${process.env.PUBLIC_URL}/images/Header/galleryHeader.png`
    }
    
    return(
        <div id="aboutus-body">
            <Header data={data}/>

            <section id="aboutus-services" className="w-full flex flex-col justify-center items-center my-8">
                <h1 className="text-[4rem] font-bold text-[#843F20]">Services</h1>
                <p className="text-center w-6/12 text-[#757575]">At Bakersvilla, we offer hands-on baking classes, personalized workshops, and professional certification programs. Our services include everything from basic baking techniques to advanced pastry arts, ensuring a comprehensive learning experience for all skill levels.</p>
                <RectSlider data={sliderData1}/>
            </section>

            <section id="aboutus-services" className="w-full flex flex-col justify-center items-center my-8">
                <h1 className="text-[4rem] font-bold text-[#843F20]">Faces of Baker's villa</h1>
                <p className="text-center w-6/12 text-[#757575]">Meet the passionate team behind Bakersvilla, led by our expert chef, Bhavika Gupta. With years of experience and a love for baking, our team is dedicated to teaching and inspiring bakers of all levels.</p>
                <CircleSlider data={sliderData2}/>
            </section>

            <Footer/>
        </div>
    )
}