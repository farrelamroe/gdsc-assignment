import Slider from "react-slick";
import {dataFoto} from '../assets/sectiontambahan3/dataSection';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const SectionTambahan = () => {
    AOS.init();
    AOS.refresh();
    AOS.refreshHard();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
              breakpoint: 2000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return(
      <div className="bg-[#FF808B]">
        <div className="bg-[#FF9BD6] rounded-t-[100px]">
            <div className="h-auto block mx-auto px-20 gap-x-6 mobile:px-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <p className="text-4xl pt-12 font-bold" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Hiburan</p>
                <p className="pt-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">Streaming online, beli tiket nonton film atau konser, main games, dan lain-lain.</p>
                    <Slider {...settings} >
                        {dataFoto.map((item) =>
                            <>
                                <div className="h-[300px] flex flex-col gap-y-5 bg-white py-5 rounded-[50px] shadow-xl lg:mx-6 my-12 pb-1 lg:px-12 mobile:mx-1 mobile:px-5 sm:mx-5 sm:px-5">
                                    <img src={require('../assets/sectiontambahan3/'+item.img+'.svg')} alt="foto" className="w-3/5 pb-6"/>
                                    <p className="">{item.description}</p>
                                    <p className="pt-6 justify-end absolute bottom-20 cursor-pointer hover:font-bold">Know more &#8594;</p>
                                </div>
                            </>
                        )}
                    </Slider>
            </div>
        </div>
      </div>
    );
}

export default SectionTambahan;