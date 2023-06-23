import Image from 'next/image';

interface CardProps {
    variant: 'service' | 'ourwork';
    image: string;
    title: string;
    index?: number;
    active?: boolean;
    industry?: string;
    description: string;
    website: string;
}

const Card: React.FC<CardProps> = ({ variant, index = 0, image, title, active, industry, description, website }) => {
    return variant === 'ourwork' ? (
        <div className="fonte-morebi mb-12 flex flex-col justify-between lg:flex-row lg:odd:flex-row-reverse lg:even:flex-row">
            <div className="relative mb-8 flex w-full flex-col lg:w-1/2">
                <div className={`flex justify-center ${index % 2 == 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-lid bg-cover p-4">
                        <Image
                            className="transition-transform duration-500 hover:scale-125"
                            width="540"
                            height="314"
                            objectFit="cover"
                            src={image}
                            alt="Project preview"
                        />
                    </div>
                </div>
                {active && (
                    <button
                        className={`from-button-gradient to-button-gradient1 absolute -bottom-4 right-0 left-0 rounded-2xl border-2 border-white bg-gradient-to-r py-3 px-8 text-sm text-white shadow-lg ${
                            index % 2 == 0
                                ? 'md:left-auto md:bottom-6 md:right-12 md:w-52'
                                : 'md:right-auto md:bottom-6 md:left-12 md:w-52'
                        }`}
                    >
                        See the project
                    </button>
                )}
            </div>

            <div className="flex w-full flex-col justify-center lg:w-2/5">
                {industry && <h1 className="text-button mb-4 text-white">Industry: {`${industry}`}</h1>}
                <h1 className="mb-2 text-3xl font-bold text-white lg:font-normal">{title}</h1>
                <p className="text-lg text-white">{description}</p>
            </div>
        </div>
    ) : (
        <div className="from-card-gradient to-card-gradient1 mb-4 rounded-3xl p-6 hover:bg-gradient-to-r md:w-1/2 lg:w-1/3">
            <div className="mb-4 flex items-center">
                <div className="w-1/5">
                    <Image src={image} width="60" height="60" alt="UI/UX design icon" />
                </div>
                <h1 className="ml-2 w-4/5 text-3xl">{title}</h1>
            </div>
            <p className="text-description font-normal">{description}</p>
        </div>
    );
};

export default Card;
