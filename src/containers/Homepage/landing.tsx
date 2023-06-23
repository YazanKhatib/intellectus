import Intellectus from '../../../public/images/Intellectus.png';
import Image from 'next/image';

export const Landing: React.FC = () => {
    return (
        <section className="relative z-0 m-auto max-w-default ">
            <div>
                <Image src={Intellectus} alt="Intellectus Company Logo" />
            </div>

            <div className="flex flex-col items-center justify-between text-center lg:absolute lg:bottom-16">
                <h1 className="mb-4 text-3xl font-normal text-white lg:text-6xl">Build.Launch.Grow</h1>
                <p className="mb-6 w-4/5 font-morebi text-xl text-white lg:w-3/5">
                    Intellectus is a pioneer in developing software, websites, and providing technical solutions. We
                    offer our customers the best service on time, at the lowest cost.
                </p>

                <div className="portfolio">
                    <button className="my-4 flex rounded-full border border-tertiary py-2 px-6 text-white hover:bg-tertiary lg:my-0">
                        <span className="pr-3">Our Portfolio </span>
                        <img
                            className="icon"
                            src="https://img.icons8.com/metro/26/ffffff/play.png"
                            alt="portfolio play icon"
                        />
                    </button>
                </div>
            </div>

            <h2 className="mb-8">
                <span className="border-b border-white pb-3 font-morebi text-2xl text-white">
                    What is your challenge ?
                </span>
            </h2>
        </section>
    );
};
