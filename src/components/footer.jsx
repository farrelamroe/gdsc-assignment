import { faFacebook, faInstagram, faTwitter, faTwitterSquare, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/gojek-horizontal-logo-white.svg";
import button1 from "../assets/get-in-google-play.webp";
import button2 from "../assets/download-app-store.webp";
import * as React from "react";

const Footer = () => {
    return(
        <div className="bg-[#1F1F1F] text-white h-fit flex flex-col relative">
            <img src={logo} alt="logo" className="w-[250px] pl-20 pt-32 pb-12 mobile:pl-5 mobile:w-[200px] mobile:pt-12"/>
            <div className="flex flex-row pl-20 gap-x-0 mobile:gap-x-32 sm:gap-x-20 xl:gap-x-0 pb-20 flex-wrap mobile:pl-5">
                <div className="flex flex-col text-left gap-y-5 w-1/6 pb-12">
                    <p className="font-bold">Perusahaan</p>
                    <p>Tentang</p>
                    <p>Produk</p>
                    <p>Blog</p>
                </div>
                <div className="flex flex-col text-left gap-y-5 w-1/6">
                    <p className="font-bold">Gabung</p>
                    <p className="w-screen">Mitra Driver</p>
                    <p className="w-screen">Mitra Usaha</p>
                </div>
                <div className="flex flex-col text-left gap-y-5 w-1/6 pb-12">
                    <p className="font-bold">Karir</p>
                    <p>Pelajar</p>
                    <p>Profesional</p>
                </div>
                <div className="flex flex-col text-left gap-y-5 w-1/6 pb-12">
                    <p className="font-bold w-screen">Hubungi Kami</p>
                    <p>Bantuan</p>
                    <p>Kontak</p>
                </div>
                <div className="flex flex-col text-left gap-y-5 xl:w-1/5 sm:w-auto">
                    <p className="font-bold w-screen">Cari tau cerita baru</p>
                    <div className="flex flex-row gap-x-5">
                        <FontAwesomeIcon icon={faFacebook} className="h-12 w-12 text-white" />
                        <FontAwesomeIcon icon={faTwitter} className="h-12 w-12 text-white" />
                        <FontAwesomeIcon icon={faInstagram} className="h-12 w-12 text-white" />
                        <FontAwesomeIcon icon={faYoutube} className="h-12 w-12 text-white" />
                    </div>
                    <p className="font-bold w-screen">Unduh Aplikasi</p>
                    <div className="flex flex-row gap-x-5">
                        <img src={button1} alt="button" className="mobile:w-[150px] sm:w-[200px]"/>
                        <img src={button2} alt="button" className="mobile:w-[150px] sm:w-[200px]"/>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-white mx-20 pb-10 mobile:mx-5" />
            <div className="flex lg:flex-row mobile:flex-col-reverse pb-12 items-center gap-y-5 sm:flex-col-reverse">
                <div className="flex flex-row gap-x-5 underline pl-20 mobile:flex-col text-left mobile:pl-5 gap-y-5 w-screen">
                    <p>Pemberitahuan Privasi</p>
                    <p>Syarat dan Ketentuan</p>
                    <p>Atribusi Data</p>
                </div>
                <div className="flex xl:flex-row gap-x-3  mobile:flex-col gap-y-5 mx-5 sm:pl-20 xl:pl-0 w-screen mobile:pl-5 sm:flex-col ">
                    <div className="flex flex-row gap-x-2">
                        <FontAwesomeIcon icon={faLocationDot} className=" text-white w-10 h-10" />
                        <div className="flex flex-row justify-between border border-black rounded-full px-20">
                            <select className="bg-[#1f1f1f] w-full">
                                <option value="fruit">Indonesia</option>
                                <option value="vegetable">Vietnam</option>
                                <option value="meat">Thailand</option>
                                <option value="meat">Singapore</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-2">
                        <FontAwesomeIcon icon={faLanguage} className="text-white w-10 h-10" />
                        <div className="flex flex-row justify-between border border-black rounded-full px-20">
                            <select className="bg-[#1f1f1f] w-full">
                                <option value="fruit">Bahasa Indonesia</option>
                                <option value="vegetable">English</option>
                                
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-20 text-left pb-20 mobile:pl-5">
                <p>&#169; 2022 Gojek Gojek adalah merek milik PT Aplikasi Karya Anak Bangsa. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.</p>
            </div>
        </div>
    );
}
export default Footer;