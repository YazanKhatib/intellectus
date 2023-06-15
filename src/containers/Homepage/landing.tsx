import Intellectus from '../../../public/images/Intellectus.png';
import Image from 'next/image';

export const Landing: React.FC = () => {
  return (
    <section className="max-w-default m-auto relative z-0 ">
      <div>
        <Image src={Intellectus} alt="Intellectus Company Logo" />
      </div>

      <div className="flex flex-col justify-between items-center text-center lg:absolute lg:bottom-16">
        <h1 className="text-white text-3xl lg:text-6xl font-normal mb-4">Build.Launch.Grow</h1>
        <p className="w-4/5 lg:w-3/5 font-morebi text-white text-xl mb-6">
          Intellectus is a pioneer in developing software, websites, and providing technical solutions. We offer our
          customers the best service on time, at the lowest cost.
        </p>

        <div className="portfolio">
          <button className="flex text-white border border-tertiary rounded-full py-2 px-6 hover:bg-tertiary my-4 lg:my-0">
            <span className="pr-3">Our Portfolio </span>
            <img className="icon" src="https://img.icons8.com/metro/26/ffffff/play.png" alt="portfolio play icon" />
          </button>
        </div>
      </div>

      <h2 className="mb-8">
        <span className="font-morebi text-white border-b border-white text-2xl pb-3">What is your challenge ?</span>
      </h2>
 
    </section>
  );
};
