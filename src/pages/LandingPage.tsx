import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import BgImage from "../assets/LandingBG.png";
import Girl from "../assets/HeroGirl.jpg";
import { useState } from "react";

function LandingPage() {
  // Array of different icons for each info point
  const infoIcons: string[] = [
    "https://img.icons8.com/?size=100&id=97nxa8FRHkyw&format=png&color=ffffff", 
    "https://img.icons8.com/?size=100&id=ujWSak4BJLt1&format=png&color=ffffff", 
    "https://img.icons8.com/?size=100&id=Ed2NVH5khVQ6&format=png&color=ffffff", 
    "https://img.icons8.com/?size=100&id=q65LZo1xaciW&format=png&color=ffffff", 
    "https://img.icons8.com/?size=100&id=GesQWESeiSrx&format=png&color=ffffff", 
  ];

  const infoPoints: string[] = [
    "Fostering Leadership & Community Service Skills",
    "Dedicated to Empowering Youth for Positive Change",
    "Holistic Growth through Service & Events",
    "Inclusive Environment for Emerging Leaders",
    "Impactful Experiences with Continuous Mentorship",
  ];

  // --- Testimonial Data for the 7th section ---
  const testimonials = [
    {
      image: Girl,
      title: "Inspiring Change Through Passion and Teamwork",
      description:
        "The LEO Club of Sabaragamuwa University truly embodies the spirit of service and leadership. Their members are passionate, organised, and deeply committed to creating real change in the community. From environmental projects to youth empowerment programs, every initiative reflects dedication, teamwork, and compassion. Collaborating with them has been an inspiring experience - a true reminder that young leaders can make a powerful difference.",
      name: "Ms. Nadeesha Perera",
      role: "Community Development Officer",
    },
    {
      image:
        "https://media.istockphoto.com/id/1170905659/photo/adding-updates-to-her-digital-planner.jpg?s=612x612&w=0&k=20&c=1hssJ6EF6v42uwaz3ARtYd18DXgEkmk7W9amOoGOa-Q=",
      title: "Dedication Beyond Expectation and Service",
      description:
        "The LEO Club of Sabaragamuwa University stands as a shining example of youth-driven service and leadership. Their unwavering enthusiasm, creativity, and sense of responsibility continue to uplift communities. Through impactful initiatives — from sustainability drives to social outreach — they demonstrate what it means to lead with purpose. Working with them has been truly inspiring, proving that compassion and collaboration can spark meaningful change.",
      name: "Mr. Thilina Weerasinghe",
      role: "Local Business Partner",
    },
    {
      image:
        "https://media.istockphoto.com/id/1464539429/photo/thoughtful-business-man-with-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=yLbK-rGNUkL0sPX4jw7Q_XE_vDtfj0X3nirixUlGtr4=",
      title: "Professionalism in Service and Leadership",
      description:
        "The LEO Club of Sabaragamuwa University showcases what true leadership through service looks like. Every member brings passion, teamwork, and innovation to their projects, creating lasting value in society. Whether it's through education, environmental care, or community welfare, their commitment never wavers. Partnering with them has been both motivating and heartening — a testament to the power of dedicated young changemakers.",
      name: "Ms. Sadhani Jayasinghe",
      role: "Teacher & Mentor",
    },
    {
      image:
        "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
      title: "Real Impact in the Community and Leadership",
      description:
        "Driven by empathy and purpose, the LEO Club of Sabaragamuwa University continues to make a remarkable difference. Their members embody unity, leadership, and a deep desire to create positive impact. Each project reflects careful planning, teamwork, and genuine care for others. Collaborating with them reaffirms the belief that youth can be the driving force behind lasting transformation in our communities. leadership, and a deep desire to create positive impact. Each project reflects careful planning, teamwork, and genuine care for others. Collaborating with them ",
      name: "Mr. Chamara Ekanayake",
      role: "Village Council Member",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    {/* First Section */}
      <section  className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${BgImage})` }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col h-full">
          <TopNavbar />

          {/* Hero Content */}
          <div className="flex flex-col flex-1 pt-[220px] md:pt-[170px] text-white md:pl-[70px] items-center md:items-start">
            <h2 className="text-md md:text-lg">WELCOME TO LEO CLUB.</h2>
            <div className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left px-2 md:px-0">
              Shaping Future Leaders <br /> 
              <span className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] bg-clip-text text-transparent">
                Through Service & Excellence
              </span>
            </div>
            <div className="mt-12 md:mt-6 flex gap-4">
              <button className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] text-white px-6 py-3 rounded-md">
                Get In Touch
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-md">
                More Details
              </button>
            </div>
          </div>

          {/* Bottom Info Section — only visible on large screens */}
          <div className="hidden md:flex flex-col absolute bottom-[-290px] left-1/2 -translate-x-1/2 w-[90%] z-10">
            <div className="w-full h-[1px] bg-white/70 mb-6" />

            {/* Info Points */}
            <div className="flex justify-between text-white">
              {infoPoints.map((text: string, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left max-w-[190px]"
                >
                  <img
                    src={infoIcons[index]}
                    alt={`${infoPoints[index]} icon`}
                    className="w-[24px] h-[24px] mb-2"
                  />
                  <div className="text-[12px] leading-snug">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Second Section */}   
      <section className="relative flex flex-col items-center pt-[60px] pb-[60px] px-4">
        <div className="text-[10px] text-[#DC1F5F]">PARTNERSHIP</div>
        <div className="text-[24px] text-center">We Work with the Best Partners</div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[20px] pt-[40px] max-w-6xl w-full">

          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-[4px] md:gap-[8px] w-full max-w-[240px] h-[40px] md:h-[60px] justify-center bg-white rounded-[5px] mx-auto" style={{ boxShadow: "0 0 12px 1px rgba(220, 31, 95, 0.10)" }}>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/480px-Dell_Logo.svg.png" alt="" className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div className="text-xs md:text-base">Dell Logo</div>
            </div>
          ))}

        </div>
      </section>

      {/* Third Section */}      
      <section className="relative flex flex-col items-center pb-[80px] px-4">
        <div className="text-[20px] md:text-[24px] text-center">Empowering Change Through Leadership and Service</div>
        <div className="w-[20%] md:w-[10%] mx-auto h-[2px] " style={{ boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.25)" , background: "rgba(220, 31, 95, 0.60)" }}/>
        <div className="px-4 md:px-[240px] text-[14px] md:text-[16px] text-center pt-[28px]" style={{color:"rgba(0, 0, 0, 0.40)"}}>At the LEO Club of Sabaragamuwa University of Sri Lanka, we strive to create positive change through community service, leadership, and teamwork. Together, we inspire young leaders to make a lasting impact in society.</div>


        <div className="flex flex-col lg:flex-row pt-[80px] w-full max-w-6xl mx-auto gap-8 lg:gap-12 items-center">
          {/* Left side - Stats and content */}
          <div className="flex-1 w-full">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-20 mb-12">

              <div className="text-center flex flex-col items-start gap-[20px] lg:gap-[40px] border-l-[4px] h-[100px] lg:h-[130px] border-[#DC1F5F]">
                <div className="text-2xl lg:text-4xl font-bold pl-[20px]">150+</div>
                <div className="text-gray-600 pl-[20px] text-justify text-sm lg:text-base">Project <br /> Done</div>
              </div>

              <div className="text-center flex flex-col items-start gap-[20px] lg:gap-[40px] border-l-[4px] h-[100px] lg:h-[130px] border-[#DC1F5F]">
                <div className="text-2xl lg:text-4xl font-bold pl-[20px]">2400+</div>
                <div className="text-gray-600 pl-[20px] text-justify text-sm lg:text-base">Happy <br /> Customers</div>
              </div>

              <div className="text-center flex flex-col items-start gap-[20px] lg:gap-[40px] border-l-[4px] h-[100px] lg:h-[130px] border-[#DC1F5F]">
                <div className="text-2xl lg:text-4xl font-bold pl-[20px]">2100+</div>
                <div className="text-gray-600 pl-[20px] text-justify text-sm lg:text-base">Cup of <br /> Coffee</div>
              </div>

              <div className="text-center flex flex-col items-start gap-[20px] lg:gap-[40px] border-l-[4px] h-[100px] lg:h-[130px] border-[#DC1F5F]">
                <div className="text-2xl lg:text-4xl font-bold pl-[20px]">800+</div>
                <div className="text-gray-600 pl-[20px] text-justify text-sm lg:text-base">Project in<br />Queue</div>
              </div>
              
            </div>

          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center relative">

          <div  className="hidden md:block absolute bg-[#DC1F5F] z-0 lg:w-[380px] lg:h-[430px] lg:right-[44px]"
            style={{ width: '280px', height: '330px', bottom: '-20px', right: '44px' }}/>
          <img 
            src={Girl} 
            alt="" 
            className="w-[320px] h-[450px] lg:w-[420px] lg:h-[550px] object-cover relative z-10" 
          />
        </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="relative flex flex-col items-center pb-[60px] px-4">
        <div className="text-[10px] text-[#DC1F5F] font-semibold tracking-widest">LEADERSHIP</div>
        <div className="text-[20px] md:text-[24px] font-bold mt-2 text-gray-800 text-center">Global Leaders Inspiring Local Change</div>
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] mt-3 mb-4"></div>
        <div className="px-4 md:px-[240px] text-[14px] md:text-[16px] text-center pt-[20px] text-gray-600 leading-relaxed">
          Meet the visionary leaders who guide the LEO movement worldwide. Their dedication, innovation, and leadership inspire millions of young volunteers to serve communities, promote unity, and create meaningful global impact.
        </div>

        {/* Leadership Grid */}
        <div className="flex flex-col lg:flex-row gap-[40px] mt-12 items-center justify-center max-w-6xl">
          {/* Large Card */}
          <div className="bg-white p-8 shadow-xl flex flex-col items-center text-center transition-transform duration-300 relative w-full max-w-[350px]" style={{ height: '460px', boxShadow:"2px 2px 12px 0 rgba(220, 31, 95, 0.20)" }}>

            <div className="text-[14px] absolute top-[22px] right-[30px]"  style={{color:"rgba(0, 0, 0, 0.50)"}}>President</div>
            <img src={Girl} alt="" className="rounded-full w-[150px] h-[150px] object-fill mt-[30px]"/>
            <div className="text-[18px] font-bold pt-[30px]">Akhila Chirantha</div>
            <div className="leading-tight pt-[18px] text-sm" style={{color:"rgba(0, 0, 0, 0.50)"}}>Leads the global LEO movement with vision and purpose and Leads the global LEO movement with vision and purpose</div>
            <div className="flex gap-[20px] pt-[30px]">
              <img src="https://img.icons8.com/?size=100&id=pZ9xZYiinken&format=png&color=DC1F5F" alt="" className="w-[26px] h-[26px]" />
              <img src="https://img.icons8.com/?size=100&id=zaaIniBXxCHv&format=png&color=DC1F5F" alt="" className="w-[26px] h-[26px]" />
              <img src="https://img.icons8.com/?size=100&id=32320&format=png&color=DC1F5F" alt="" className="w-[26px] h-[26px]" />
            </div>
          </div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full lg:w-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 relative w-full max-w-[360px] mx-auto"  style={{ height: '215px',boxShadow:"2px 2px 12px 0 rgba(220, 31, 95, 0.20)" }} >
              <div className="text-[14px] absolute top-[15px] right-[20px]"  style={{color:"rgba(0, 0, 0, 0.50)"}}>Vice President</div>
              <div className="flex items-center gap-4 w-full">
                <img src={Girl} alt="" className="rounded-full w-[100px] h-[100px] object-fill" />
                <div className="flex-1 mt-[20px] items-end">
                  <div className="font-bold mb-[5px] flex justify-end text-sm md:text-base">Ms. Imandi Upeksha</div>
                  <div className="flex gap-[15px] justify-end pt-[5px]">
                      <img src="https://img.icons8.com/?size=100&id=pZ9xZYiinken&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=zaaIniBXxCHv&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=32320&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                    </div>
                </div>
              
              </div>

              <div className="leading-tight pt-[18px] text-justify text-xs md:text-sm" style={{color:"rgba(0, 0, 0, 0.50)"}}>Supports the mission and ensures strong international collaboration</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 relative w-full max-w-[360px] mx-auto"  style={{ height: '215px',boxShadow:"2px 2px 12px 0 rgba(220, 31, 95, 0.20)" }} >
              <div className="text-[14px] absolute top-[15px] right-[20px]"  style={{color:"rgba(0, 0, 0, 0.50)"}}>Secretary</div>
              <div className="flex items-center gap-4 w-full">
                <img src={Girl} alt="" className="rounded-full w-[100px] h-[100px] object-fill" />
                <div className="flex-1 mt-[20px] items-end">
                  <div className="font-bold mb-[5px] flex justify-end text-sm md:text-base">Mr. Yasith Kulathunga</div>
                  <div className="flex gap-[15px] justify-end">
                      <img src="https://img.icons8.com/?size=100&id=pZ9xZYiinken&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=zaaIniBXxCHv&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=32320&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                    </div>
                </div>
              
              </div>

              <div className="leading-tight pt-[18px] text-justify text-xs md:text-sm" style={{color:"rgba(0, 0, 0, 0.50)"}}>Supports the mission and ensures strong international collaboration</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 relative w-full max-w-[360px] mx-auto"  style={{ height: '215px',boxShadow:"2px 2px 12px 0 rgba(220, 31, 95, 0.20)" }} >
              <div className="text-[14px] absolute top-[15px] right-[20px]"  style={{color:"rgba(0, 0, 0, 0.50)"}}>Treasure</div>
              <div className="flex items-center gap-4 w-full">
                <img src={Girl} alt="" className="rounded-full w-[100px] h-[100px] object-fill" />
                <div className="flex-1 mt-[20px] items-end">
                  <div className="font-bold mb-[5px] flex justify-end text-sm md:text-base">Mr. Prasad Madusanka</div>
                  <div className="flex gap-[15px] justify-end">
                      <img src="https://img.icons8.com/?size=100&id=pZ9xZYiinken&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=zaaIniBXxCHv&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=32320&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                    </div>
                </div>
              
              </div>

              <div className="leading-tight pt-[18px] text-justify text-xs md:text-sm" style={{color:"rgba(0, 0, 0, 0.50)"}}>Supports the mission and ensures strong international collaboration</div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 relative w-full max-w-[360px] mx-auto"  style={{ height: '215px',boxShadow:"2px 2px 12px 0 rgba(220, 31, 95, 0.20)" }} >
              <div className="text-[14px] absolute top-[15px] right-[20px]"  style={{color:"rgba(0, 0, 0, 0.50)"}}>Directer</div>
              <div className="flex items-center gap-4 w-full">
                <img src={Girl} alt="" className="rounded-full w-[100px] h-[100px] object-fill" />
                <div className="flex-1 mt-[20px] items-end">
                  <div className="font-bold mb-[5px] flex justify-end text-sm md:text-base">Ms. Nimasha Nishadini</div>
                  <div className="flex gap-[15px] justify-end">
                      <img src="https://img.icons8.com/?size=100&id=pZ9xZYiinken&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=zaaIniBXxCHv&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://img.icons8.com/?size=100&id=32320&format=png&color=DC1F5F" alt="" className="w-[20px] h-[20px]" />
                    </div>
                </div>
              
              </div>

              <div className="leading-tight pt-[18px] text-justify text-xs md:text-sm" style={{color:"rgba(0, 0, 0, 0.50)"}}>Supports the mission and ensures strong international collaboration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="relative flex flex-col items-center w-auto min-h-[460px] mx-[20px] rounded-[20px] mb-[60px] md:mb-[200px]">
        
        {/* Background image - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[20px]" style={{backgroundImage: `url(${BgImage})`}} />
        
        <div className="relative md:absolute inset-1 bg-white md:top-[280px] mx-0 md:mx-[70px] rounded-[20px] h-auto md:h-[334px] flex flex-col items-center justify-center px-[20px] md:px-[100px] py-8" >
          <div className="text-[22px] ">What We Are Doing Now</div>
          <div className="text-[14px] md:text-[16px] text-justify pt-[20px]">The LEO Club of Sabaragamuwa University of Sri Lanka is actively engaged in various impactful projects that serve our communities and build leadership among youth. From environmental cleanups, blood donation campaigns, educational workshops, and mental health awareness programs, we work together to make a real difference. Every initiative reflects our passion for service, teamwork, and positive change, empowering young leaders to take action and inspire others across Sri Lanka and beyond.</div>
           <div className="mt-12 md:mt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <button className="w-full md:w-auto bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] text-white px-6 py-3 rounded-md">
                Get In Touch
              </button>
              <button className="w-full md:w-auto bg-white border text-black px-6 py-3 rounded-md">
                More Details
              </button>
            </div>

        </div>
      </section>

      {/* Sixth Section */}
      <section className="relative flex flex-col items-center pb-[80px] px-4">
        <div className="text-[10px] text-[#DC1F5F] font-semibold tracking-widest">Why US</div>
        <div className="text-[20px] md:text-[24px] font-bold mt-2 text-gray-800">Our Core Values</div>
        <div className="px-4 md:px-[240px] text-[14px] md:text-[16px] text-center pt-[20px] text-gray-600 leading-relaxed">At the LEO Club of Sabaragamuwa University of Sri Lanka, our actions are guided by a strong set of values that shape who we are and how we serve. These principles reflect our commitment to leadership, service, and personal growth - helping us create lasting impact in our university and communities beyond. </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-[60px] px-4 md:px-[100px] max-w-6xl">
        {/* Leadership */}
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#DC1F5F] to-[#FF9BBD] flex items-center justify-center rounded-full flex-shrink-0 mt-[5px]">
            <img 
              src="https://img.icons8.com/?size=100&id=3vkFuo7NEufV&format=png&color=ffffff" 
              alt="Leadership" 
              className="w-[18px] h-[18px]" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[20px] md:text-[24px] font-bold text-gray-800">Leadership</div>
            <div className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              We inspire and empower individuals to take initiative, make decisions, and lead by example through teamwork and integrity.
            </div>
          </div>
        </div>

        {/* Opportunity */}
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#DC1F5F] to-[#FF9BBD] flex items-center justify-center rounded-full flex-shrink-0 mt-[5px]">
            <img 
              src="https://img.icons8.com/?size=100&id=3vkFuo7NEufV&format=png&color=ffffff" 
              alt="Opportunity" 
              className="w-[18px] h-[18px]" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[20px] md:text-[24px] font-bold text-gray-800">Opportunity</div>
            <div className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              We create pathways for personal and professional growth, helping members unlock their full potential through meaningful experiences.
            </div>
          </div>
        </div>

        {/* Teamwork */}
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#DC1F5F] to-[#FF9BBD] flex items-center justify-center rounded-full flex-shrink-0 mt-[5px]">
            <img 
              src="https://img.icons8.com/?size=100&id=3vkFuo7NEufV&format=png&color=ffffff" 
              alt="Teamwork" 
              className="w-[18px] h-[18px]" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[20px] md:text-[24px] font-bold text-gray-800">Teamwork</div>
            <div className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              We believe in unity and collaboration, knowing that together we can achieve more for our communities and the world.
            </div>
          </div>
        </div>

        {/* Empathy */}
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#DC1F5F] to-[#FF9BBD] flex items-center justify-center rounded-full flex-shrink-0 mt-[5px]">
            <img 
              src="https://img.icons8.com/?size=100&id=3vkFuo7NEufV&format=png&color=ffffff" 
              alt="Empathy" 
              className="w-[18px] h-[18px]" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[20px] md:text-[24px] font-bold text-gray-800">Empathy</div>
            <div className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              We serve with compassion, understanding the needs of others and striving to bring hope and happiness to every life we touch.
            </div>
          </div>
        </div>

        {/* Integrity */}
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#DC1F5F] to-[#FF9BBD] flex items-center justify-center rounded-full flex-shrink-0 mt-[5px]">
            <img 
              src="https://img.icons8.com/?size=100&id=3vkFuo7NEufV&format=png&color=ffffff" 
              alt="Integrity" 
              className="w-[18px] h-[18px]" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[20px] md:text-[24px] font-bold text-gray-800">Integrity</div>
            <div className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              We uphold honesty, transparency, and ethical standards in everything we do earning trust through our actions and everything.
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#DC1F5F] to-[#FF9BBD] flex items-center justify-center rounded-full flex-shrink-0 mt-[5px]">
            <img 
              src="https://img.icons8.com/?size=100&id=3vkFuo7NEufV&format=png&color=ffffff" 
              alt="Service" 
              className="w-[18px] h-[18px]" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[20px] md:text-[24px] font-bold text-gray-800">Service</div>
            <div className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              We are committed to making a difference through volunteerism, community engagement, and selfless dedication to others.
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Seventh Section */}
      <section className="relative flex w-full justify-center pb-[80px] px-4">
        <div className="relative w-full max-w-6xl">

          <div className="relative">

            <div className="hidden md:block absolute right-0 top-0 w-[64%] h-[700px] bg-white shadow-sm" />


            <div className="hidden md:block absolute right-[40px] top-[40px] z-20 text-right">
              <div className="text-[28px] md:text-[34px] font-semibold text-gray-900 leading-snug w-[332px]">What Our Customers Are Saying</div>
            </div>

            {/* Mobile title */}
            <div className="md:hidden text-center mb-8">
              <div className="text-[24px] font-semibold text-gray-900">What Our Customers Are Saying</div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 lg:p-12 items-center md:min-h-[700px] bg-white md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">

              <div className="relative flex justify-center md:justify-start w-full">

                <div className="hidden lg:block absolute -left-[80px] -top-[80px] text-gray-300/70 z-0" style={{width:'160px',height:'160px'}}>
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dotpatA" patternUnits="userSpaceOnUse" width="16" height="16"><circle cx="2" cy="2" r="2" fill="currentColor"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotpatA)"/></svg>
                </div>

                {/* Image */}
                <img src={testimonials[currentTestimonial].image} alt="testimonial" className="w-full max-w-[490px] h-[250px] md:h-[300px] object-cover shadow-xl relative z-10"/>

                {/* Dots bottom-right of image (behind image) */}
                <div className="hidden lg:block absolute -right-[80px] -bottom-[80px] text-gray-300/70 z-0" style={{width:'160px',height:'160px'}}>
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dotpatB" patternUnits="userSpaceOnUse" width="16" height="16"><circle cx="2" cy="2" r="2" fill="currentColor"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotpatB)"/></svg>
                </div>

                {/* quote badge */}
                <div className="absolute -right-4 -top-6 md:-right-6 md:-top-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#DC1F5F] text-white flex items-center justify-center shadow-lg z-20 pt-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 30" fill="none">
                  <path d="M10.0833 5.41667C10.0833 7.61655 10.0833 8.7165 9.39992 9.39992C8.7165 10.0833 7.61655 10.0833 5.41667 10.0833C3.21678 10.0833 2.11683 10.0833 1.43342 9.39991C0.75 8.7165 0.75 7.61655 0.75 5.41667C0.75 3.21678 0.75 2.11683 1.43342 1.43342C2.11683 0.75 3.21678 0.75 5.41667 0.75C7.61655 0.75 8.7165 0.75 9.39992 1.43342C10.0833 2.11684 10.0833 3.21678 10.0833 5.41667Z" fill="white" stroke="white" stroke-width="1.5"/>
                  <path d="M10.0834 4.25033L10.0834 9.47948C10.0834 14.1141 7.14838 18.0446 3.08337 19.417" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M24.0833 5.41667C24.0833 7.61655 24.0833 8.7165 23.3999 9.39992C22.7165 10.0833 21.6166 10.0833 19.4167 10.0833C17.2168 10.0833 16.1168 10.0833 15.4334 9.39991C14.75 8.7165 14.75 7.61655 14.75 5.41667C14.75 3.21678 14.75 2.11683 15.4334 1.43342C16.1168 0.75 17.2168 0.75 19.4167 0.75C21.6166 0.75 22.7165 0.75 23.3999 1.43342C24.0833 2.11684 24.0833 3.21678 24.0833 5.41667Z" fill="white" stroke="white" stroke-width="1.5"/>
                  <path d="M24.0834 4.25033L24.0834 9.47948C24.0834 14.1141 21.1484 18.0446 17.0834 19.417" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>

                {/* arrows */}
                <div className="absolute -bottom-12 md:-bottom-10 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 bg-white hover:bg-gray-50 pb-[4px] text-xl md:text-base">
                    ‹
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 bg-white hover:bg-gray-50 pb-[4px] text-xl md:text-base">
                    ›
                  </button>
                </div>
              </div>

              {/* Textual content inside the white box area */}
              <div className="md:pr-[40px] md:pl-[60px] flex flex-col items-center md:items-start justify-end mt-8 md:mt-0">
                <div className="md:mt-14 lg:mt-20 text-[18px] md:text-[22px] font-semibold text-gray-800 text-center md:text-left w-full md:w-[380px]">
                  {testimonials[currentTestimonial].title}
                </div>
                <p className="mt-5 text-gray-600 leading-relaxed text-[12px] md:text-[12px] text-justify">
                  {testimonials[currentTestimonial].description}
                </p>
                <div className="mt-8 text-center md:text-left">
                  <div className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <BottomNavbar />
    </>
  );
}

export default LandingPage;