

const Hero = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:py-32 py-16 justify-center items-center">
        <div className="  w-[50%]">
        <h1 className="text-8xl font-bold lato-bold">
        Nicola Pasa 
        </h1>
        <h3 className="text-6xl font-bold lato-bold">
        Full Stack Developer
            </h3>
      
        <button className="my-8  bg-yellow-700 text-white px-6 py-4 rounded-lg ">Hire me!</button>
        </div>
        <div className="w-full sm:w-[50%]">
            <img src="https://res.cloudinary.com/devjy7hwv/image/upload/v1711013493/c1ef7b8e-428b-48db-9b09-d512c9441610_b6ysu7.jpg" alt="" className="rounded-tl-[50%] rounded-br-[50%]" />
        </div>
    
    </div>
  )
}

export default Hero
