export const Footer: React.FC = () => {
    return (
        <footer className="m-auto flex max-w-default flex-col bg-primary pt-12 font-morebi text-white">
            <div className="flex flex-col justify-around lg:flex-row 2xl:justify-between">
                <div className="flex justify-center xl:justify-start">
                    <img width="120" src="/images/logo.png" alt="logo" />
                </div>

                <div className="mb-6 flex flex-col justify-center lg:mb-4">
                    <h1 className="invisible font-morebi text-xl text-secondary lg:visible lg:mb-6">Contact Us:</h1>
                    <div className="m-auto mb-6 flex">
                        <img className="mr-2" width="25px" height="20px" src="svg/footer/email.svg" alt="email" />
                        <p className="text-lg">Info@Intellectus.works</p>
                    </div>
                    <div className="m-auto flex lg:m-0">
                        <img className="mr-2" width="25px" height="20px" src="svg/footer/call.svg" alt="call" />
                        <p className="text-lg">+971 5444 24 657</p>
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

            <div className="my-12 border-t border-white border-opacity-20 pt-10 text-center text-xl">
                <p>@2023-Intellectus. All Rights Receved</p>
            </div>
        </footer>
    );
};
