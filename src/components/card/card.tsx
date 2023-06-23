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
            className={`+ relative my-4 flex h-[250px] w-full overflow-hidden rounded-3xl p-8 shadow lg:my-8 lg:w-[47%] ${
                !check ? '' : 'mt-16'
            }`}
        >
            <div className="w-full lg:w-1/2">
                <h1 className="align-left pb-2 font-morebi text-2xl font-bold text-secondary">{title}</h1>
                <h1 className="font-morebi text-base text-primary">{description}</h1>
            </div>
            <div className="hidden lg:block">
                <div className="circle flex w-[300px] items-start justify-center rounded-full">
                    <Image src={img} height={300} width={220} alt="Service card" />
                </div>
            </div>
        </section>
    );
};
