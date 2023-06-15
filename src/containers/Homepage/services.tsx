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
    <div className="bg-white bottom-20">
      
      <div className="max-w-default w-4/5 m-auto servicesContainer">

        <div className="flex flex-wrap flex-col lg:flex-row justify-between">
          {data.map(({ image, title, description }: CardProps, key) => (
            <Card key={key} img={image} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
