import { Header, Landing, Process, Services, Motivation, Testimonials, Footer } from '../src/containers';

const Home: React.FC = () => {
  return (
    <div className="relative page-container">
      <Header />
      <Landing />
      <Services />
      <Motivation />
      <Process />
      {/* <Work /> */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
