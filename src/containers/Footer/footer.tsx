export const Footer: React.FC = () => {
    return (
        <footer className="m-auto flex max-w-default flex-col bg-primary pt-12 font-morebi text-white">
            <div className="flex flex-col justify-around lg:flex-row 2xl:justify-between">
                <div className="mb-12 flex justify-center object-none text-center lg:mb-0 xl:justify-start">
                    <img className="h-28 w-28" src="/images/logo.png" alt="logo" />
                </div>

                <div className="hidden flex-col justify-center lg:flex">
                    <h1 className="font-morebi text-xl text-secondary lg:mb-6">Contact Us:</h1>

                    <div className="flex items-center justify-center">
                        <div className="mr-4 flex flex-col">
                            <img width="25px" height="20px" src="svg/footer/call.svg" alt="call" className="mb-4" />
                            <img width="25px" height="20px" src="svg/footer/email.svg" alt="email" />
                        </div>

                        <div className="flex flex-col justify-center text-lg">
                            <p className="mb-4">+971 5444 24 657</p>
                            <p>yazankhatib97@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="mb-6 hidden font-morebi text-xl text-secondary lg:block">Follow Us:</h1>
                    <div className="m-auto flex w-2/5 justify-around lg:w-full">
                        <a href="">
                            <img className="mr-2" width="35px" src="svg/footer/linkedin.svg" alt="linkedin" />
                        </a>
                        <a href="">
                            <img className="mr-2" width="35px" src="svg/footer/facebook.svg" alt="facebook" />
                        </a>
                        <a href="">
                            <img className="mr-2" width="35px" src="svg/footer/instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <h1 className="mb-6 font-morebi text-xl text-secondary">Stay In Touch:</h1>
                    <input
                        className="mr-3 rounded-full border border-white border-opacity-20 bg-primary p-3 focus:outline-none"
                        placeholder="Your Email"
                    />
                    <button className="rounded-full border border-secondary border-opacity-20 p-3">
                        Subscribe Now
                    </button>
                </div>
            </div>

            <div className="my-8 border-t border-white border-opacity-20 pt-10 text-center text-xl">
                <p>@2023-Intellectus. All Rights Receved</p>
            </div>
        </footer>
    );
};
