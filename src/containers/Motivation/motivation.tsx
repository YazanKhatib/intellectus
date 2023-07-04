import * as React from 'react';

export const Motivation: React.FC = () => {
    return (
        <section id="motivation" className="bg-primary py-16">
            <div className="m-auto w-4/5 max-w-default">
                <h1 className="m-auto pb-8 text-center font-morebi text-5xl text-white">Why Choose US?</h1>
                <p className="m-auto mb-6 w-3/4 text-center font-morebi text-xl text-white">
                    Intellectus Group is committed to helping its clients reach their goals, to personalising their
                    event experiences, to providing an innovative environment, and to making a difference.
                </p>
                <div className="flex w-full justify-between">
                    <div>
                        <h3 className="mb-4 text-center font-morebi text-xl text-white">Customer Satisfaction</h3>
                        <img
                            style={{ width: 350, height: 350, objectFit: 'cover' }}
                            src="/images/satisfaction.jpg"
                            alt="Customer satisfaction"
                        />
                    </div>
                    <div>
                        <h3 className="mb-4 text-center font-morebi text-xl text-white">Innovation</h3>
                        <img
                            style={{ width: 350, height: 350, objectFit: 'cover' }}
                            src="/images/innovation.jpg"
                            alt="Innovation"
                        />
                    </div>
                    <div>
                        <h3 className="mb-4 text-center font-morebi text-xl text-white">Collaboration</h3>
                        <img
                            style={{ width: 350, height: 350, objectFit: 'cover' }}
                            src="/images/collaboration.jpg"
                            alt="Team collboration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
