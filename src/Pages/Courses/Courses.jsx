import CourseCard from "../../Components/CourseCard"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

export default function Courses(){
    const header = {
        heading:'We are here to make you learn',
        parah:'Your learning journey starts here at Bakersvilla! We’re committed to providing you with hands-on experience and expert guidance, helping you master baking techniques and achieve your culinary goals.',
        button:'Explore courses',
        img:`${process.env.PUBLIC_URL}/images/Header/coursesHeader.png`
    }
    const courses = [
        {
            img:`${process.env.PUBLIC_URL}/images/Courses/course1.png`,
            name:'Diploma Course',
            time:'6 months',
            mentor:'Anil Das Kapoor'
        },
        {
            img:`${process.env.PUBLIC_URL}/images/Courses/course1.png`,
            name:'Happy Baking Course',
            time:'10 days',
            mentor:'Anil Das Kapoor'
        },
        {
            img:`${process.env.PUBLIC_URL}/images/Courses/course1.png`,
            name:'Entrepreneurial Professional Baking Course',
            time:'2 months',
            mentor:'Anil Das Kapoor'
        },
        {
            img:`${process.env.PUBLIC_URL}/images/Courses/course1.png`,
            name:'Red Velvet',
            time:'30 minutes',
            mentor:'Anil Das Kapoor'
        },
    ]

    return(
        <div id="course-body">
            <Header data={header}/>

            <section id="courses-section" className="flex flex-col justify-center items-center w-full my-12">
                <h1 className="text-[4rem] font-bold text-[#843F20]">Our Courses</h1>
                <p className="w-6/12 text-center text-[#757575]">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r</p>
                <div id="courses-container" className="w-[96%] flex flex-wrap justify-center items-center mt-8">
                    {
                        courses.map((course,index)=>{
                            return <CourseCard data={course} key={index}/>
                        })
                    }
                </div>
            </section>

            <section id="courses-chef" className="flex flex-col justify-center items-center mt-24 mb-12 relative box-border">
                <h1 className="text-[4rem] text-center w-10/12">Make A Routine Of Learning By Our Professional Chef!</h1>
                <img src={`${process.env.PUBLIC_URL}/images/Courses/coursesChef.png`} alt="img" className="w-[20%] my-12"></img>
                <p className="text-center text-[#757575] w-5/12">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r</p>
                <button className="text-sm border-[1px] border-black rounded-3xl px-8 py-2 mt-8 mb-12 hover:border-[#843F20] hover:text-white hover:bg-[#843F20] transition ease-in-out duration-[0.6s]">Contact</button>
                <div id="chef-bg-img" className="aspect-[1/2] w-[18%] absolute top-[7%] z-[-1] opacity-[0.5] right-[20%]">
                    <img src={`${process.env.PUBLIC_URL}/images/Home/homeStudentsHeading.png`} alt="" className=""></img>
                </div>
            </section>

            <Footer/>
        </div>
    )
}