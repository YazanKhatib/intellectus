import * as React from 'react';

export const Testimonials: React.FC = () => {
    const [active, setActive] = React.useState(1);

    const Card = ({ id, name, title, img }: { id: number; name: string; title: string; img: string }) => {
        return (
            <div
                onClick={() => setActive(id)}
                className={` ${
                    active === id && 'shadow-lg'
                } mb-4 flex w-3/4 cursor-pointer flex-col items-center rounded-xl bg-white p-2 hover:shadow-lg md:h-28 md:flex-row`}
            >
                <div className="mb-2 flex items-center md:ml-8 md:w-1/4">
                    <img className="h-16 rounded-full" src={img} alt="" />
                </div>
                <div>
                    <h3 className="text-center text-xl text-secondary md:text-left">{name}</h3>
                    <p className="text-center font-morebi text-gray-400 md:text-left">{title}</p>
                </div>
            </div>
        );
    };

    return (
        <section id="testimonials" className="testimonials bg-white py-16">
            <div className="pb-16 text-center font-morebi text-6xl font-bold text-primary">What Client says?</div>
            <div className="container m-auto w-4/5 max-w-default">
                <div className="innerContainer flex w-full">
                    <div className="w-1/2">
                        <Card
                            id={1}
                            name="John Doe"
                            title="Sales Manager, Slack"
                            img="https://gravatar.com/avatar/10773a5f5a15c98c13b662d64dd2bb51?s=400&d=robohash&r=x"
                        />
                        <Card
                            id={2}
                            name="Roaa Doe"
                            title="Sales Manager, Asana"
                            img="https://gravatar.com/avatar/dd72bb233cd58ff48d06b500a86360c6?s=400&d=robohash&r=x"
                        />
                        <Card
                            id={3}
                            name="Luke Harper"
                            title="Team Lead, Sketch"
                            img="https://gravatar.com/avatar/da4e24c7ef99ce2372d404ba2b4595a9?s=400&d=robohash&r=x"
                        />
                    </div>

                    <div className="w-1/2">
                        <h3 className="font-morebi text-2xl font-bold text-secondary">It Was a great Experience </h3>
                        <div className="mb-4 flex">
                            <img src="images/star.png" alt="Stars rating" />
                            <img src="images/star.png" alt="Stars rating" />
                            <img src="images/star.png" alt="Stars rating" />
                            <img src="images/star.png" alt="Stars rating" />
                            <img src="images/star.png" alt="Stars rating" />
                        </div>
                        {active === 1 && (
                            <p className="text-md font-morebi md:text-lg">
                                Working with Intellectus was a game-changer. Instead of drowning in an endless chain of
                                emails, there is clear and easy accountability meaning tasks actually get done!
                            </p>
                        )}

                        {active === 2 && (
                            <p className="text-md font-morebi md:text-lg">
                                If you are a business owner, and you don't have Intellectus in your toolkit just yet, I
                                highly recommend that you check it out.
                            </p>
                        )}
                        {active === 3 && (
                            <p className="text-md font-morebi md:text-lg">
                                I highly recommend Intellectus. It has been so important for us as we continue to grow
                                our company.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
