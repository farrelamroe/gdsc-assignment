import background from '../assets/background.webp';

const Section1 = () => {
    return(
        <div className="h-full relative bg-cover xl:bg-bgdesktop mobile:bg-bgmobile sm:bg-bgdesktop">
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