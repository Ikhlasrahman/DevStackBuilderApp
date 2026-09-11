import banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-6 flex flex-col justify-center items-start gap-4 p-8">
                <h1 className="display-font">Build Your Ideal
                    <span className="display-font-gradient"> Development Stack</span>
                </h1>
                <p className="paragraph-font">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex mt-12 gap-4"><button className="btn text-white bg-linear-to-r from-orange-500 to-pink-500  p-6">ExploreTechnologies</button>
                    <button className="btn btn-outline p-6">Learn More</button></div>
            </div>
            <div className="col-span-6 flex items-center justify-center p-8">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Hero;