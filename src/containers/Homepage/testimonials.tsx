import * as React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials bg-white py-16">
      <div className="pb-16 text-primary text-6xl text-center font-morebi font-bold">What Client says?</div>
      <div className="container max-w-default m-auto w-4/5">
        <div className="innerContainer w-full flex">
          <div className="w-1/2 mr-12">
            <div className="h-28 w-3/4 flex items-center p-2 mb-4 bg-white rounded-xl hover:shadow-md cursor-pointer">
              <div className="w-1/4 flex items-center ml-8">
                <img className="rounded-full h-16" src="/images/profile.jpg" alt="" />
              </div>
              <div>
                <h3 className="text-xl text-secondary">John Doe</h3>
                <p className="font-morebi text-gray-400">Sales Manager, Slack</p>
              </div>
            </div>

            <div className="h-28 w-3/4 flex items-center p-2 mb-4 bg-white rounded-xl hover:shadow-md cursor-pointer">
              <div className="w-1/4 flex items-center ml-8">
                <img className="rounded-full h-16" src="/images/profile.jpg" alt="" />
              </div>
              <div>
                <h3 className="text-xl text-secondary">Roaa Doe</h3>
                <p className="font-morebi text-gray-400">Sales Manager, Asana</p>
              </div>
            </div>

            <div className="h-28 w-3/4 flex items-center p-2 mb-4 bg-white rounded-xl hover:shadow-md cursor-pointer">
              <div className="w-1/4 flex items-center ml-8">
                <img className="rounded-full h-16" src="/images/profile.jpg" alt="" />
              </div>
              <div>
                <h3 className="text-xl text-secondary">Luke Harper</h3>
                <p className="font-morebi text-gray-400">Team Lead, Sketch</p>
              </div>
            </div>
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
            <p className="font-morebi">
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
