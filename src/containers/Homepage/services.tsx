import { Card } from '../../components';
import { data } from './data';
interface myProps {}
interface CardProps {
    image: string;
    title: string;
    description: string;
}

export const Services: React.FC<myProps> = () => {
    return (
        <div id="services" className="bg-white py-16">
            <div className="m-auto w-4/5 max-w-default">
                <div className="flex flex-col flex-wrap justify-between lg:flex-row">
                    {data.map(({ image, title, description }: CardProps, key) => (
                        <Card key={key} img={image} title={title} description={description} />
                    ))}
                </div>
            </div>
        </div>
    );
};
