import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';



const About = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row p-0 gap-20">
                <div className="w-1/2 relative">
                    <img src={person} className="rounded-lg shadow-2xl" />
                    <img src={parts} className="w-3/5 rounded-lg shadow-2xl absolute -right-5 -bottom-5 border-white" />
                </div>
                <div className="w-1/2 text-start space-y-6">
                    <h3 className="text-xl text-[#FF3811] font-bold">About US</h3>
                    <h1 className='font-bold text-5xl text-[#151515]'>We are qualified & of experience in this field</h1>
                    <p className="text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-base text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="bg-[#FF3811] font-bold text-lg text-white px-7 py-3 rounded">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;