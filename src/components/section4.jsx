import React from "react";
import section4_1 from '../assets/section4/driver jempolan.webp';
import section4_2 from '../assets/section4/bbm.webp';
import {dataSection4} from '../assets/section4/dataSection4';
import background from '../assets/section4/background.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
const Section4 = () => {
    AOS.init();
	AOS.refresh();
	AOS.refreshHard();
    return(
        <>
            <div className="py-12" style={{backgroundImage: `url(${background})`}}>
                <div className="flex lg:flex-row gap-x-20 mx-20 mobile:flex-col sm:flex-col sm:gap-y-5 mobile:mx-5 mobile:gap-y-5 " data-aos="zoom-in-down"
						data-aos-duration="1000"
						data-aos-delay="200">
                    <div className="text-white font-bold flex justify-center items-center text-6xl bg-[#00AA13] px-12 rounded-[50px]">
                        <p>Sorotan</p>
                    </div>
                    {dataSection4.map((item) =>
                        <div className="flex flex-col gap-y-5 bg-white p-5 rounded-[50px]">
                            <img src={require('../assets/section4/'+item.img+'.webp')} alt={item.name} className="w-auto"/>
                            <p className="font-bold text-2xl">{item.name}</p>
                            <p className="py-2 px-5 bg-[#00AA13] w-fit rounded-[50px] text-white hover:animate-fade hover:bg-[#07c91b] cursor-pointer">Lihat Semua</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Section4;