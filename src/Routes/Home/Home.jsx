import About from "./About";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
    return (
        <div className="space-y-32">
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default Home;