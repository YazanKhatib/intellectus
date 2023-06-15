import * as React from 'react';


export const Testimonials: React.FC = () => {
  const [active, setActive] = React.useState(1);

  const Card = ({id, name, title, img}: {id: number, name: string, title: string, img: string}) => {
    return (
      <div onClick={() => setActive(id)} className={` ${active === id && "shadow-lg"} md:h-28 w-3/4 flex-col md:flex-row flex items-center p-2 mb-4 bg-white rounded-xl hover:shadow-lg cursor-pointer`}>
      <div className="md:w-1/4 mb-2 flex items-center md:ml-8">
        <img className="rounded-full h-16" src={img} alt="" />
      </div>
      <div>
        <h3 className="text-xl text-secondary text-center md:text-left">{name}</h3>
        <p className="font-morebi text-gray-400 text-center md:text-left">{title}</p>
      </div>
    </div>
    )
  }

  return (
    <section className="testimonials bg-white py-16">
      <div className="pb-16 text-primary text-6xl text-center font-morebi font-bold">What Client says?</div>
      <div className="container max-w-default m-auto w-4/5">
        <div className="innerContainer w-full flex">
          <div className="w-1/2">

            <Card id={1} name="John Doe" title="Sales Manager, Slack" img="/images/profile.jpg" />
            <Card id={2} name="Roaa Doe" title="Sales Manager, Asana" img="/images/profile.jpg" />
            <Card id={3} name="Luke Harper" title="Team Lead, Sketch" img="/images/profile.jpg" />

          </div>

          <div className="w-1/2">
            <h3 className="text-2xl font-bold font-morebi text-secondary">It Was a great Experience </h3>
            <div className="flex mb-4">
              <img src="images/star.png" alt="Stars rating" />
              <img src="images/star.png" alt="Stars rating" />
              <img src="images/star.png" alt="Stars rating" />
              <img src="images/star.png" alt="Stars rating" />
              <img src="images/star.png" alt="Stars rating" />
            </div>
            <p className="font-morebi text-md md:text-lg">
              Lorem Ipsum is simply dummy text of the printi and beenthndustry sstandard dummy text ever since the when
              anunknownLorem Ipsum is simply dummy text of the printi and beenthndustry sstandard dummy text ever since
              the when anunknownLorem Ipsum is simply dummy text of the printi and beenthndustry sstandard dummy text
              ever since the when anunknown
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
