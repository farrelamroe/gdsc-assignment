import React from "react";
import section5_1 from '../assets/section5/section5_1.webp';
import section5_2 from '../assets/section5/section5_2.webp';

const Section5 = () => {
    return(
        <>
        <div className="container-fluid bg-white">
            <div className="block text-left sm:pt-20 sm:pl-20 mobile:mx-5 bg-white">
                <div className="flex sm:flex-row justify-between gap-x-16 pt-20 relative pb-20 mobile:flex-col mobile:py-5 sm:items-center sm:pt-5">
                   <img src={section5_1} alt="section5_1" className="lg:w-[600px] rounded-[50px] mobile:rounded-lg sm:w-[300px]"/>
                    <div className="flex flex-col justify-center gap-y-12 pr-20 mobile:pr-0 mobile:pt-5">
                            <h1 className="text-4xl font-bold sm:block">Info Selengkapnya </h1>
                            <h2 className="text-base flex justify-center items-center"> Kamu bisa mencari tahu lebih lengkap dengan membuka halaman FAQ atau bisa langsung menghubungi kami.</h2>
                            <div className="flex flex-row gap-x-4 text-[#00AA13] mobile:flex-col gap-y-5">
                                <p className="rounded-full border-2 border-[#00AA13] px-5 py-2 hover:animate-fade hover:bg-[#00AA13] hover:text-white text-center">FAQ</p>
                                <p className="rounded-full border-2 border-[#00AA13] px-5 py-2 hover:bg-[#00AA13] hover:text-white text-center">Hubungi Kami</p>
                             </div>
                    </div>
                </div>
            </div>
            <div className="bg-auto h-[494px] sm:mx-20 sm:rounded-[50px] sm:bg-bgdekstop5 mobile:bg-bgmobile5  mobile:bg-cover bottom-20 mt-20 relative">
                <div className="relative flex flex-col lg:left-[600px] xl:left-[700px] sm:top-40 mobile:top-60">
                    <p className="mobile:text-3xl sm:text-4xl font-bold text-white mobile:px-5">Gabung jadi Mitra Driver</p>
                    <p className="pt-12 text-white mobile:px-5">Bergabunglah bersama jutaan mitra driver kami se-Indonesia.</p>
                    <p className="bg-white w-fit px-5 py-2 rounded-full mt-8 cursor-pointer mobile:mx-5">Daftar</p> 
                </div>
            </div>
        </div>
        </>
    );
}

export default Section5;