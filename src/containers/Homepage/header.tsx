import Link from 'next/link';
import * as React from 'react';

export const Header: React.FC = () => {
    return (
        <nav className="relative z-10 m-auto flex w-4/5 max-w-default items-center justify-between pt-8 lg:top-6">
            <img width="70px" src="/images/logo.png" alt="logo" />
            <div className="ml-20 hidden w-1/2 justify-between lg:flex">
                <Link href="#services">
                    <a className="font-morebi text-xl text-white">Services</a>
                </Link>

                <Link href="#motivation">
                    <a className="font-morebi text-xl text-white">Motivation</a>
                </Link>

                <Link href="#process">
                    <a className="font-morebi text-xl text-white">Process</a>
                </Link>

                <Link href="#portfolio">
                    <a className="font-morebi text-xl text-white">Portfolio</a>
                </Link>

                <Link href="#testimonials">
                    <a className="font-morebi text-xl text-white">Testimonials</a>
                </Link>
            </div>
            <button className="rounded-full border border-tertiary bg-primary py-3 px-6 font-morebi text-white hover:bg-tertiary">
                Start Your Project
            </button>
        </nav>
    );
};
