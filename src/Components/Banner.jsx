import img from '../assets/images/banner.jpg'
const Banner = () => {

  return (
    <div>
        <div className='z-2 relative'>
            <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
       >
        <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        </div>
       {/* <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[250px] z-10">
          <img className="w-full h-full object-cover rounded-lg shadow-lg" src={img} alt="" />
        </div> */}
    </div>
  )
}

export default Banner