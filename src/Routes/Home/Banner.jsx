import banner1 from '../../assets/images/banner/1.jpg';
import banner2 from '../../assets/images/banner/2.jpg';
import banner3 from '../../assets/images/banner/3.jpg';
import banner4 from '../../assets/images/banner/4.jpg';
import banner5 from '../../assets/images/banner/5.jpg';
import banner6 from '../../assets/images/banner/6.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-[40rem]" />
                <div className="absolute flex flex-col justify-center pl-16 bg-gradient-to-r from-[#151515] to-[#15151500] text-start text-white h-full">
                    <div className='w-3/5 space-y-6'>
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-y-5 md:space-x-4'>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Discover More</button>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide6" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❮</a>
                    <a href="#slide2" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-[40rem]" />
                <div className="absolute flex flex-col justify-center pl-16 bg-gradient-to-r from-[#151515] to-[#15151500] text-start text-white h-full">
                    <div className='w-3/5 space-y-6'>
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-y-5 md:space-x-4'>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Discover More</button>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide1" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❮</a>
                    <a href="#slide3" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full h-[40rem]" />
                <div className="absolute flex flex-col justify-center pl-16 bg-gradient-to-r from-[#151515] to-[#15151500] text-start text-white h-full">
                    <div className='w-3/5 space-y-6'>
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-y-5 md:space-x-4'>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Discover More</button>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide2" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❮</a>
                    <a href="#slide4" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full h-[40rem]" />
                <div className="absolute flex flex-col justify-center pl-16 bg-gradient-to-r from-[#151515] to-[#15151500] text-start text-white h-full">
                    <div className='w-3/5 space-y-6'>
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-y-5 md:space-x-4'>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Discover More</button>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide3" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❮</a>
                    <a href="#slide5" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full h-[40rem]" />
                <div className="absolute flex flex-col justify-center pl-16 bg-gradient-to-r from-[#151515] to-[#15151500] text-start text-white h-full">
                    <div className='w-3/5 space-y-6'>
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-y-5 md:space-x-4'>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Discover More</button>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide4" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❮</a>
                    <a href="#slide6" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full h-[40rem]" />
                <div className="absolute flex flex-col justify-center pl-16 bg-gradient-to-r from-[#151515] to-[#15151500] text-start text-white h-full">
                    <div className='w-3/5 space-y-6'>
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-y-5 md:space-x-4'>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Discover More</button>
                            <button className='btn duration-500 bg-[#FFFFFF0D] hover:bg-[#FF3811] text-white hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide5" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❮</a>
                    <a href="#slide1" className="btn duration-500 btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] text-white hover:border-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;