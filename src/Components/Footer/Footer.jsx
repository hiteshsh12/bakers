import { Link } from "react-router-dom";
import Map from "../Map";
import './footer.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Footer(){

    return(
        <div id="footer-body" className="w-full flex flex-col justify-center items-center rounded-t-[10rem] box-border overflow-hidden text-white">
            <div id="footer-container" className="w-full grid grid-rows-3 grid-cols-9 bg-[#843F20] min-h-60 z-[0]">
                <div id="Bakersvilla" className="absolute z-[1]"><img src={`${process.env.PUBLIC_URL}/images/Footer/Bakersvilla.png`} alt=""></img></div>

                <div id="footer-welcome" className="row-span-1 col-span-9 text-center z-[2]">
                    <h1 className="w-6/12 text-[4rem] text-[#ECBFAB] font-bold mx-auto pt-8 box-border">Connect With Us</h1>
                </div>

                <div id="footer-details" className="row-span-2 col-span-3 z-[2] flex flex-col justify-center ml-16 pb-12 box-border">
                    <div id="footer-branding" className="nav-brand flex justify-start items-center w-full col-span-3 sm:col-span-1
                    px-[0.5rem] py-[0.4rem] sm:ml-2 lg:ml-0 lg:py-[0.2rem]
                    mb-2">
                        <div id="nav-brand-name" className="text-end">
                            <p id="bakersvilla" className="font-bold font-medium 
                            text-base sm:text-sm md:text-base xl:text-lg 2xl:text-xl
                            leading-[11px] sm:leading-[10px] md:leading-[11px] xl:leading-[12px] 2xl:leading-[14px]">Bakersvilla <br/><span className="text-xs sm:text-[0.65rem] md:text-xs xl:text-sm 2xl:text-base 
                            sm:leading-[10px] md:leading-[11px] xl:leading-[12px] 2xl:leading-[14px] "> Academy</span></p>
                        </div>
                        <hr className='border-black min-h-8'/>
                        <img src={`${process.env.PUBLIC_URL}/images/Navbar/logo.png`} alt="logo" className="w-[10%] sm:w-4/12 xl:w-[14%] 2xl:w-3/12 aspect-[4/3]"/>
                    </div>

                    <p className="w-11/12 my-2 text-sm">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus</p>

                    <div id="icons-container" className="z-[2] flex mt-2">
                       <a
  href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME"
  target="_blank"
  rel="noreferrer"
  className="w-[2rem] mx-2 box-border"
>
  <img src={`${process.env.PUBLIC_URL}/images/Footer/facebook.svg`} alt="facebook" />
</a>

                       <a
  href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
  target="_blank"
  rel="noreferrer"
  className="w-[2rem] mx-2 box-border"
>
  <img src={`${process.env.PUBLIC_URL}/images/Footer/instagram.svg`} alt="instagram" />
</a>

                        <Link to={''} className="w-[2rem] mx-2 box-border"><img src={`${process.env.PUBLIC_URL}/images/Footer/whatsapp.svg`} alt="whatsapp"/></Link>
                        <Link to={''} className="w-[2rem] mx-2 box-border"><img src={`${process.env.PUBLIC_URL}/images/Footer/youtube.svg`} alt="youtube"/></Link>
                    </div>
                </div>

                <div id="footer-map" className="row-span-2 col-span-3 rounded-xl overflow-hidden box-border h-[70%] w-[90%] mx-auto mt-4 z-[2]">
                    <Map className="z-[2]"/>
                </div>

                <div id="footer-nav" className="row-span-2 col-span-1 flex flex-col justify-start mt-4 box-border items-start mx-auto z-[2]">
                    <p className="text-sm font-bold mb-2">Quick Links</p>
                    <Link to={'/'} className="my-[2px] font-medium text-sm">Home</Link>
                    <Link to={'/about'} className="my-[2px] font-medium text-sm">About Us</Link>
                    <Link to={'/courses'} className="my-[2px] font-medium text-sm">Courses</Link>
                    <Link to={'/home'} className="my-[2px] font-medium text-sm">Gallery</Link>
                    <Link to={'/contact'} className="my-[2px] font-medium text-sm">Contact</Link>
                </div>
                
                <div id="footer-contact" className="row-span-2 col-span-2 flex flex-col justify-start items-start mx-auto mt-4 z-[2]">
                    <p className="text-sm font-bold mb-2">Contact us at</p>
                    <p className="text-sm my-[2px]"><MdLocalPhone className="inline"/>+91 XXXXX XXXXX</p>
                    <p className="text-sm my-[2px]"><MdEmail className="inline"/> abc@gmail.com</p>
                </div>
            </div>
            <div id="footer-banner" className="w-full">
                <p className="text-center text-sm py-2 text-black">© Bakersvilla.com – All rights reserved || Powered Bakersvilla | Google Play and the Google Play logo are trademarks of Bakersvilla</p>
            </div>
        </div>
    )
}
