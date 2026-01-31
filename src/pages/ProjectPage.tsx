import TopNavbarBlack from "../components/TopNavbar copy"
import BgImage from '../assets/AboutMain.jpg'
import BottomNavbar from "../components/BottomNavbar"
import { useSEO } from "../hooks/useSEO";

function ProjectPage() {

  useSEO({
    title: "Projects | SUSL LEO Club – Community & University Initiatives",
    description:
      "Explore community service and university initiatives organized by SUSL LEO Club, including impact programs, volunteering and leadership projects.",
  });

  return (
    <>
    <div className="bg-white">
    <section className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat md:bg-none md:bg-transparent bg-[url('https://img.freepik.com/premium-photo/colorful-curve-frame-template-design-element_53876-1024352.jpg?semt=ais_hybrid&w=740&q=80')] ">
      <TopNavbarBlack/>

      <div className="flex flex-col lg:flex-row mx-0 md:mx-[40px] xl:mx-[80px] mt-0 lg:mt-[10px] xl:mt-[50px] md:gap-[40px]">

        <div className="xl:flex-1 flex flex-col justify-center items-center md:items-start  h-[600px] rounded-[10px] pl-0 md:pl-[20px] xl:pl-[80px]">
          <div className="text-[30px] md:text-[30px] xl:text-[40px] xl:w-[300px] font-bold leading-tight text-center">Our Work. <span className="text-black/50">Your Vision Realised.</span></div>
          <div className="text-[18px] md:text-[18px] pt-[22px] md:pt-[40px] md:w-[480px] text-justify px-[30px] md:px-0">From educational workshops and health camps to environmental initiatives and cultural celebrations, each gathering reflects our commitment to service excellence.</div>
          <div className="pt-[28px] md:mt-6 w-[100%] md:w-auto px-[30px] md:px-0"><button className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] text-white px-6 py-3 rounded-md cursor-pointer w-[100%]"> Get In Touch</button></div>
        </div>

        <div className="xl:flex-1 md:flex flex-col hidden gap-[20px]">
          <img src="https://www.collegemagazine.com/wp-content/uploads/2019/04/group-projects.jpg" alt=""  className="w-full h-[300px] object-cover"/>

          <div className="flex gap-[20px]">
            <div className="flex-1">
              <img src="https://static.vecteezy.com/system/resources/previews/023/980/160/large_2x/team-of-young-and-diversity-volunteer-worker-group-enjoy-charitable-social-work-outdoor-in-cleaning-up-garbage-and-waste-separation-project-at-the-river-beach-photo.jpg" alt="" className="w-full h-[274px] object-cover"/>
            </div>

            <div className="flex-1">
              <img src="https://t4.ftcdn.net/jpg/03/96/97/03/360_F_396970354_vbhmMrOS0qTAi1AHRGnTMpCgAGGK8eou.jpg" alt="" className="w-full h-[274px] object-cover"/>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="relative flex flex-col md:pt-[40px]  pb-[60px] px-[30px] md:px-[40px] xl:px-[80px]">

    <div className="flex flex-col md:flex-row">
    
     <div className="">
        <div className="flex flex-row gap-[10px] items-center">
          <div className="w-[14px] h-[14px] bg-[#DC1F5F]" />
          <div className="text-[14px] font-light">See all Projects</div>
        </div>

        <div className="text-[20px] md:text-[30px] xl:text-[40px] font-bold leading-tight pt-[15px] md:pt-[30px]">Discover Our Completed <br /> Every Project </div>
      </div>

      <div className="md:w-[438px] text-justify md:text-[16px] font-light flex mt-[15px] md:mt-auto ml-auto">Every Project we complete is  a reflection of our  commitment to quality, precision, and client satisfaction. Every Event Tells a Story of Service, Leadership & Lasting Change!</div>

    </div> 

    <div className="flex gap-[10px] md:gap-[30px] pt-[60px]">
      <div className="md:w-[60px] md:h-[30px] rounded-[4px] flex items-center justify-center bg-[#DC1F5F] text-white cursor-pointer text-[12px] md:text-[16px] px-[15px] py-[3px] ">All</div>
      <div className="md:w-[130px] h-[30px] rounded-[4px] flex items-center justify-center bg-[#F3F1EE] text-black cursor-pointer text-[12px] md:text-[16px] px-[15px] py-[3px] ">Completed</div>
      <div className="md:w-[120px] h-[30px] rounded-[4px] flex items-center justify-center bg-[#F3F1EE] text-black cursor-pointer text-[12px] md:text-[16px] px-[15px] py-[3px] ">UpComing</div>
      <div className="w-[120px] h-[30px] rounded-[4px]  md:flex items-center justify-center bg-[#F3F1EE] text-black cursor-pointer text-[12px] md:text-[16px] px-[15px] py-[3px] hidden  ">Magazines</div>
      <div className="w-[120px] h-[30px] rounded-[4px] md:flex items-center justify-center bg-[#F3F1EE] text-black cursor-pointer text-[12px] md:text-[16px] px-[15px] py-[3px] hidden  ">Gallery</div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-[50px] pt-[60px]">
      
      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>


      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>


      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>


      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>


      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>


      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>


      <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:shadow cursor-pointer">
        <img src="https://www.travelmapsrilanka.com/destinations/destinationimages/wangedigala-sri-lanka.webp" className="rounded-[10px] hover:rounded-none lg:h-[240px]" />
        <div className="text-[12px] md:text-[20px] font-bold pt-[15px] md:pt-[30px] md:pl-[5px]">Mountain Conservation Drive</div>
        <div className="text-[8px] md:text-[14px] font-light md:pl-[5px] leading-tight pt-[12px]">Cleaning and preserving mountain areas while promoting environmental awareness in local communities.</div>
        <div className="flex flex-col lg:flex-row justify-between pt-[10px] md:pt-[20px] lg:items-center md:px-[5px] gap-[8px] md:gap-auto ">
          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=fLFTtJbNqW1j&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">Wangedigala, Kalupahana</div>
          </div>

          <div className="flex gap-[6px] items-center">
              <img src="https://img.icons8.com/?size=100&id=YKJRubqbjHsc&format=png&color=000000" alt="" className="w-[12px] md:w-[20px] h-[12px] md:h-[20px]" />
              <div className="text-[8px] md:text-[12px] font-bold">29 December 2025</div>
          </div>

        </div>
        <div className="flex pt-[20px] pl-[5px] items-center gap-[7px] px-[5px] pb-[5px] cursor-pointer">
            <div className=" text-[#DC1F5F] text-[12px]">View More</div>
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=DC1F5F" alt="" className="w-[16px] h-[16px]"/>
        </div>
      </div>
     

    </div>
    </section>



    <section className='relative w-full h-[460px] flex flex-col bg-cover bg-center bg-no-repeat justify-center items-center text-white mb-[80px] ' style={{backgroundImage: `url(${BgImage})`}}>
      <div className="absolute inset-0 bg-black/50" />

      <div className='text-[30px] text-center md:text-[40px] z-10'>Ready to Lead Join Our Movement</div>
      <div className='md:mx-[220px] text-center z-10 mt-[30px] font-light md:text-[20px]'>Become part of a legacy where your passion meets purpose, and together we create lasting change in communities across Sabaragamuwa Province.</div>

      <div className="mt-12 md:mt-6 flex flex-col md:flex-row gap-4 px-[20px] md:px-0 w-full md:w-auto z-10">
        <button className="w-full md:w-auto bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] text-white px-6 py-3 rounded-md border-none cursor-pointer">Get In Touch</button>
        <button className="w-full md:w-auto bg-white border text-black px-6 py-3 rounded-md border-none cursor-pointer">More Details</button>
        </div>
    </section>


    <BottomNavbar />

    </div>
    </>
  )
}

export default ProjectPage