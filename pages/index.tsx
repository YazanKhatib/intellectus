import { Header, Landing, Process, Services, Motivation, Testimonials, Footer, Work } from '../src/containers';

const Home: React.FC = () => {
    return (
        <div className="page-container relative">
            <Header />
            <Landing />
            <Services />
            <Motivation />
            <Process />
            <Work />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
