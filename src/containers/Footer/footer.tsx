export const Footer: React.FC = () => {
  return (
    <footer className="max-w-default m-auto flex flex-col text-white font-morebi bg-primary pt-12">
      <div className="flex-col lg:flex-row flex justify-around">
        <div className="flex justify-center lg:justify-start">
          <img width="120" src="/images/Logo.png" alt="logo" />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-center font-morebi text-xl text-secondary mb-6">Contact Us:</h1>
          <div className="flex mb-6 m-auto">
            <img className="mr-2" width="25px" height="20px" src="svg/footer/email.svg" alt="email" />
            <p>Info@Intellectus.works</p>
          </div>
          <div className="flex m-auto lg:m-0">
            <img className="mr-2" width="25px" height="20px" src="svg/footer/call.svg" alt="call" />
            <p>+963 941 738 664</p>
          </div>
        </div>

        <div>
          <h1 className="font-morebi text-xl text-secondary mb-6 hidden lg:block">Follow Us:</h1>
          <div className="flex justify-around">
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
          <h1 className="font-morebi text-xl text-secondary mb-6">Stay In Touch:</h1>
          <input
            className="bg-primary border border-white border-opacity-20 rounded-full mr-3 p-3 focus:outline-none"
            placeholder="Your Email"
          />
          <button className="border border-secondary border-opacity-20 rounded-full p-3">Subscribe Now</button>
        </div>
      </div>

      <div className="text-center text-xl my-12 pt-10 border-t border-white border-opacity-20">
        <p>@2021-Intellectus. All Rights Receved</p>
      </div>
    </footer>
  );
};
