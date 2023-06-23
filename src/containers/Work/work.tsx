import * as React from "react";
import Card from "./card";
import Link from "next/link";
import { data } from "./data";

export const Work: React.FC = () => {
  return (
    <section id="ourwork" className="font-morebi py-16">
      <div className="max-w-default mx-auto w-full px-6 md:w-4/5 lg:px-0">
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-3xl font-bold text-white">Our work</h1>
          <h2 className="text-button z-10 hidden cursor-pointer text-2xl font-medium lg:block">
            <Link href="/portfolio">
              <a className="mr-3 cursor-pointer text-white">See all projects</a>
            </Link>
          </h2>
        </div>

        {data.map(({ image, title, description, active, website }, key) => (
          <Card
            website={website}
            variant="ourwork"
            active={active}
            key={key}
            index={key}
            image={image}
            title={title}
            description={description}
          />
        ))}

        <h2 className="text-button absolute bottom-12 cursor-pointer text-sm font-medium lg:hidden">
          <Link href="/portfolio">
            <a className="z-50 mr-3 cursor-pointer">See all projects</a>
          </Link>
        </h2>
      </div>
    </section>
  );
};
