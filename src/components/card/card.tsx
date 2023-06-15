import Image from 'next/image';

interface myProps {
  title: string;
  description: string;
  img: string;
  check?: boolean;
}

export const Card: React.FC<myProps> = ({ title, description, img, check }) => {
  return (
    <section
      className={`w-full lg:w-[47%] h-[250px] relative flex shadow overflow-hidden rounded-3xl p-8 my-4 lg:my-8 + ${
        !check ? '' : 'mt-16'
      }`}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="font-morebi font-bold text-secondary text-2xl align-left pb-2">{title}</h1>
        <h1 className="font-morebi text-primary text-base">{description}</h1>
      </div>
      <div className="hidden lg:block">
        <div className="circle items-start justify-center flex w-[300px] rounded-full">
          <Image src={img} height={300} width={220} alt="Service card" />
        </div>
      </div>
    </section>
  );
};
