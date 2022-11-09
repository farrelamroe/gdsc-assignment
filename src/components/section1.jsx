import background from '../assets/background.webp';

const Section1 = () => {
    return(
        <div className="h-full relative bg-cover" style={{backgroundImage: `url(${background})`}}>
            <div className="relative block h-[550px] text-left top-20 left-20 text-3xl font-bold">
                <h1>Bikin nyampe duluan</h1>
                <h2>Anton Cendekiawan</h2>
                <h2 className="text-[#F06400]"><i>#PastiAdaJalan</i></h2>

            </div>
        </div>  
    );
}
export default Section1;