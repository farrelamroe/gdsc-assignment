import background from '../assets/background.webp';
import AOS from "aos";
import 'aos/dist/aos.css';

const Section1 = () => {
    AOS.init();
	AOS.refresh();
	AOS.refreshHard();
    return(
        <div className="z-0 mobile:mt-40 sm:mt-[120px] h-full relative bg-cover xl:bg-bgdesktop mobile:bg-bgmobile sm:bg-bgdeskto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative block h-[550px] text-left pt-60 pl-20 text-3xl font-bold mobile:pt-80 mobile:pl-5">
                <h1 className="text-6xl text-white mobile:text-4xl">Bikin nyampe duluan</h1>
                <div className="pt-12 text-lg text-white">
                    <h2>Anton : Cendekiawan</h2>
                    <h2 className="text-[#F06400]"><i>#PastiAdaJalan</i></h2>

                </div>
            </div>
        </div>  
    );
}
export default Section1;