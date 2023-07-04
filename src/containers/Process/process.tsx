import * as React from 'react';
import Image from 'next/image';
import process from '../../../public/images/process.jpg';

export const Process: React.FC = () => {
    return (
        <section id="process" className="flex justify-center bg-white py-16">
            <div className="m-auto w-4/5 max-w-default">
                <h1 className="pb-16 text-center font-morebi text-6xl font-bold text-primary">How we do this?</h1>
                <Image src={process} alt="Development process" />
            </div>
        </section>
    );
};
