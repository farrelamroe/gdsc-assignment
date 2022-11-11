import react from 'react';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import satu from '../assets/section3/satu.webp';
import dua from '../assets/section3/dua.webp';
import tiga from '../assets/section3/tiga.webp';
import empat from '../assets/section3/empat.webp';
import lima from '../assets/section3/lima.webp';
import AOS from "aos";
import "aos/dist/aos.css";
const Section3 = () => {
    AOS.init();
	AOS.refresh();
	AOS.refreshHard();
    const Params = useParams();
  let ID = Params.id;
  console.log(ID)
  if( ID == "1" ||ID == "2" ||ID == "3" ||ID == "4" ||ID == "5" )
  {
    ID = ID
  } else{
    ID = "1"
  }
  const handleSatu = () => {
    setNumber("1");


  };
  const handleDua = () => {
    setNumber("2");

  };
  const handleTiga = () => {

    setNumber("3");

  };
  const handleEmpat = () => {
    setNumber("4");

  };
  const handleLima = () => {
    setNumber("5");

  };
  const [categoryName,setCategoryName] = useState("test");
  const [number,setNumber] = useState(ID);
  useEffect(() => {
      

    switch (number) {
        case "1":
            setCategoryName("Satu")
            break;
        case "2":
            setCategoryName( "Dua");
            break;
        case "3":
            setCategoryName("Tiga ")
            break;
        case "4":
            setCategoryName("Empat")
            break;
        case "5":
            setCategoryName("Lima")
            break;
    }});
    return (
       <div className="bg-white">
       <p className="bg-white w-full py-8 relative flex justify-center font-bold text-6xl mobile:flex mobile:justify-center mobile:text-4xl" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="200">Cara pesan GoRide</p>
       <div className="bg-white w-full flex flex-row justify-between mobile:flex-col-reverse mobile:gap-y-5">
       <ul className="pl-20 mobile:px-5" data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="200">
            <li onClick={handleSatu} className={number === "1" ?'  bg-[#00AA13] animation-fade rounded-[20px] py-2 px-5 w-full text-white ':"bg-white animation-fade rounded-[50px] py-2 px-5 w-fit "}> 
                <p className="font-bold text-2xl pb-5 cursor-pointer">1․ Buka aplikasi Gojek, lalu pilih GoRide</p>
                <p className="pl-6 mobile:pl-0 cursor-pointer">Ikonnya gambar motor, parkir di home screen Gojek.</p>    
            </li>
            <li onClick={handleDua} className={number === "2" ?'  bg-[#00AA13] animation-fade rounded-[20px] py-2 px-5 w-full text-white':"bg-white animation-fade rounded-[50px] py-2 px-5 w-fit "}> 
                <p className="font-bold text-2xl pb-5 cursor-pointer">2․ Tentukan lokasi tujuan kamu</p>
                <p className="pl-6 mobile:pl-0 cursor-pointer">Bisa ketik alamatnya manual, atau cari lewat peta. Bebas, sesuai kebutuhan aja.</p>
            </li> 
            <li onClick={handleTiga} className={number === "3" ?'  bg-[#00AA13] animation-fade rounded-[20px] py-2 px-5 w-full text-white':"bg-white animation-fade rounded-[50px] py-2 px-5 w-fit "}> 
                <p className="font-bold text-2xl pb-5 cursor-pointer">3․ Pastiin lokasi jemputmu</p>
                <p className="pl-6 mobile:pl-0 cursor-pointer">Kamu bisa tambahin catetan buat driver. Kalo lagi di tempat umum, kamu juga bisa langsung pilih di titik/gerbang mana kamu mau dijemput.</p>
            </li> 
            <li onClick={handleEmpat} className={number === "4" ?'  bg-[#00AA13] animation-fade rounded-[20px] py-2 px-5 w-full text-white':"bg-white animation-fade rounded-[50px] py-2 px-5 w-fit "}> 
                <p className="font-bold text-2xl pb-5 cursor-pointer" >4․ Cek ulang pesanan, pilih metode pembayaran, lalu klik 'PESAN'</p>
                <p className="pl-6 mobile:pl-0 cursor-pointer">Pastiin lokasi jemput dan tujuan udah benar. Pembayarannya pilih antara GoPay atau tunai.</p>
            </li> 
            <li onClick={handleLima} className={number === "5" ?'  bg-[#00AA13] animation-fade rounded-[20px] py-2 px-5 w-full text-white':"bg-white animation-fade rounded-[50px] py-2 px-5 w-fit "}> 
                <p className="font-bold text-2xl pb-5 cursor-pointer">5․ Driver menuju titik jemputmu</p>
                <p className="pl-6 mobile:pl-0">Tinggal tunggu driver kamu tiba deh. Selamat menikmati perjalananmu dengan GoRide.</p>
            </li> 
           </ul>
         <div       className={'relative  w-full  md:h-screen  overflow-hidden ' }>

      
      <div         className={number === "1"? ' ease-in-out duration-1000  transition-all animation-fade xl:w-3/5 block mx-auto my-auto mobile:w-full sm:w-full lg:w-4/5' : 'hidden animation-fade'}>
        <img src ={satu} judul ="satu" color="hijau"/> 

       </div>
       <div         className={number === "2"? ' ease-in-out duration-1000  transition-all animation-fade xl:w-3/5 block mx-auto my-auto mobile:w-full sm:w-full lg:w-4/5' : 'hidden animation-fade'}>
      
       <img src ={dua} judul ="dua" color="purple" />
        </div>
        <div         className={number === "3"? ' ease-in-out duration-1000  transition-all animation-fade xl:w-3/5 block mx-auto my-auto mobile:w-full sm:w-full lg:w-4/5' : 'hidden animation-fade'}>
        
        <img src ={tiga} judul =" tiga" color="orange" />
        </div>
      <div       className={number === "4"? '  ease-in-out duration-1000  transition-all animation-fade xl:w-3/5 block mx-auto my-auto mobile:w-full sm:w-full lg:w-4/5' : 'hidden animation-fade'}>
     
   
      
      <img src ={empat} judul ="empat" color = "merah-orange"/>
       </div>
       <div       className={number === "5"? '  ease-in-out duration-1000  transition-all animation-fade xl:w-3/5 block mx-auto my-auto mobile:w-full sm:w-full lg:w-4/5' : 'hidden animation-fade' }>
     
   
      
      <img src ={lima} judul ="lima" color = "merah-orange"/>
       </div>
      
       
       </div>
       
    
   </div>
       </div> 
    );
}

export default Section3;