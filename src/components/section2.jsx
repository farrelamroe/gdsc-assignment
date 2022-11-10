import React from 'react';
import section2_1 from '../assets/section2/section2_1.webp';
import section2_2 from '../assets/section2/section2_2.webp';
import section2_3 from '../assets/section2/section2_3.webp';
import section2_4 from '../assets/section2/section2_4.webp';

const Section2 = () =>{
    return(
        <>
            <div className=" h-full bg-white">
                <div className=" block text-left pt-20 sm:pl-20 mobile:mx-5">
                    <p className="font-bold text-4xl">Kenapa GoRide?</p>
                    <h1 className="text-4xl font-bold pt-5 mobile:text-3xl sm:hidden ">Pake GoRide itu AMAN dan NYAMAN</h1>
                    <div className="flex sm:flex-row justify-between gap-x-16 pt-20 relative pb-20 mobile:flex-col mobile:py-5 sm:items-center sm:pt-5">
                        <img src={section2_1} alt="section2_1" className="lg:w-[600px] rounded-[50px] mobile:rounded-lg sm:w-[300px]"/>
                        <div className="flex flex-col justify-center items-center gap-y-12 pr-20 mobile:pr-0 mobile:pt-5">
                            <h1 className="text-4xl font-bold mobile:hidden sm:block">Pake GoRide itu AMAN dan NYAMAN</h1>
                            <h2 className="text-base flex justify-center items-center">Mitra driver kami selalu menjadikan keamanan dan kenyamananmu dalam perjalanan sebagai prioritas. Gak cuma itu, kami juga punya fitur Bagikan Perjalanan dan Tombol Darurat di aplikasi dan Asuransi yang selalu melindungi. </h2>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-x-1 top-20 sm:pb-20 mobile:flex-col-reverse">
                        <div className="flex flex-col justify-center gap-y-12 sm:pr-20 mobile:pr-0">
                            <h1 className="text-4xl font-bold mobile:hidden">Gak usah khawatir gak ada ojek online yang antar jemput kamu </h1>
                            <h2 className="text-base mobile:pt-5 ">Kami punya lebih dari 2 juta mitra driver yang tersebar di 203 kota dan kabupaten se-Indonesia. Baik kamu di Jakarta, Bogor, Depok, Tangerang, Bekasi, ataupun kota lainnya; kapanpun kamu butuh, langsung pesen aja.</h2>
                        </div>
                        <img src={section2_2} alt="section2_1" className="lg:w-[600px] rounded-[50px] sm:mr-20 mobile:rounded-lg mobile:w-[600px] sm:w-[300px] h-fit my-auto"/>
                        <h1 className="text-3xl font-bold pb-5 sm:hidden">Gak usah khawatir gak ada ojek online yang antar jemput kamu </h1>
                    </div>

                    <h1 className="text-4xl font-bold pt-5 mobile:text-3xl sm:hidden">Pake GoRide itu AMAN dan NYAMAN</h1>
                    <div className="flex sm:flex-row justify-between gap-x-16 pt-20 relative pb-20 mobile:flex-col mobile:py-5 sm:items-center sm:pt-5">
                        <img src={section2_3} alt="section2_1" className="lg:w-[600px] rounded-[50px] mobile:rounded-lg sm:w-[300px]"/>
                        <div className="flex flex-col justify-center items-center gap-y-12 pr-20 mobile:pr-0 mobile:pt-5">
                            <h1 className="text-4xl font-bold mobile:hidden sm:block">Pake GoRide itu AMAN dan NYAMAN</h1>
                            <h2 className="text-base flex justify-center items-center">Mitra driver kami selalu menjadikan keamanan dan kenyamananmu dalam perjalanan sebagai prioritas. Gak cuma itu, kami juga punya fitur Bagikan Perjalanan dan Tombol Darurat di aplikasi dan Asuransi yang selalu melindungi. </h2>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-x-1 top-20 pb-20 mobile:flex-col-reverse">
                        <div className="flex flex-col justify-center gap-y-12 sm:pr-0 mobile:pr-0">
                            <h1 className="text-4xl font-bold mobile:hidden">Mitra driver kami #DriverJempolan</h1>
                            <h2 className="text-base mobile:pt-5 ">Driver telah melalui proses rekrutmen yang ketat, menerima modul on-boarding dan program pelatihan keamanan berkendara yang komprehensif di Rifat Drive Labs.</h2>
                            <h2 className="text-base mobile:pt-5 ">Baca cerita Driver Jempolan dan pelatihan P3K dan anti kekerasan seksual melalui Bengkel Belajar Mitra (BBM) </h2>
                            <div className="flex flex-row gap-x-4 text-[#00AA13] mobile:flex-col gap-y-5">
                                <p className="rounded-full border-2 border-[#00AA13] px-5 py-2 hover:animate-fade hover:bg-[#00AA13] hover:text-white">Driver Jempolan</p>
                                <p className="rounded-full border-2 border-[#00AA13] px-5 py-2 hover:bg-[#00AA13] hover:text-white">Bengkel Belajar Mitra</p>
                            </div>
                        </div>
                        <img src={section2_4} alt="section2_1" className="lg:w-[600px] rounded-[50px] sm:mr-20 mobile:rounded-lg mobile:w-[600px] sm:w-[300px] h-fit my-auto"/>
                        <h1 className="text-3xl font-bold pb-5 sm:hidden">Gak usah khawatir gak ada ojek online yang antar jemput kamu </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;