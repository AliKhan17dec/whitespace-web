import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#043873] text-white py-[220px] px-[140px]">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="text-left max-w-lg">
        <h1 className="text-[64px] md:text-[50px] font-bold mb-6 leading-snug text-[#FFFFFF]">
          Get More Done with Whitepace
        </h1>
        <p className="text-lg md:text-[15px] mb-8">
          Project management software that enables your teams to collaborate, plan,
          analyze, and manage everyday tasks.
        </p>
        <a
          href="#"
          className="bg-[#4F9CF9] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#043873] transition duration-300 px-6 py-3 text-[18px] font-medium rounded-md shadow-md"
        >
          Try Whitepace Free →
        </a>
      </div>

      {/* Right Content */}
      <div className=" md:w-1/2 flex items-center justify-center">
        <div className="bg-blue-200 w-[824px] h-[549px] md:h-96  shadow-lg"></div>
      </div>
    </div>
  </section>
  )
}

export default Hero
