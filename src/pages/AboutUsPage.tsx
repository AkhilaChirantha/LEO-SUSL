import TopNavbar from '../components/TopNavbar'
import BgImage from '../assets/AboutMain.jpg'
import About2 from '../assets/About2.jpg'
import Girl from "../assets/HeroGirl.jpg";
import BottomNavbar from '../components/BottomNavbar';



function AboutUsPage() {

  const teamMembers = [
  {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
  {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
    {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
    {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
    {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
    {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
    {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },
    {
    name: "K. W. A. Chirantha",
    role: "President",
    image: Girl,
    socials: {
      gmail: "mailto:chirantha@example.com",
      whatsapp: "https://wa.me/94771234567",
      facebook: "https://facebook.com/username",
      instagram: "https://instagram.com/username",
    }
  },

];


  return (
    <>
    <section  className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="absolute inset-0 bg-black/30" />

       <TopNavbar />


      <div className=' px-[20px] md:px-0 flex flex-col md:flex-row my-auto md:mb-[60px] items-end justify-center'>
       <div className='md:w-[670px] md:h-[230px] bg-black/30 rounded-[10px] md:mx-auto  md:ml-[60px] backdrop-blur-md p-[30px] text-white'>
       <div className='text-center md:text-left text-[20px] md:text-[24px] leading-snug'>ABOUT LEO CLUB <br />SABARAGAMUWA UNIVERSITY OF SRI LANKA</div>

       <div className='text-[12px] md:text-[18px] text-justify leading-tight pt-[25px] font-normal '>The story of passionate change makers at Sabaragamuwa University of Sri Lanka who transform communities through service, cultivate leadership through action, and create lasting impact that echoes far beyond campus borders</div>
       </div>

       <div className='hidden w-[60px] h-[60px] rounded-full md:flex justify-center items-center bg-white/30 mx-auto  mr-[30px] backdrop-blur-sm mb-[-40px]' style={{boxShadow:"0 0 20px 4px rgba(220, 31, 95, 0.4)"}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 22C7.49306 22 5.48959 22 4.2448 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.2448 3.46447C5.48959 2 7.49306 2 11.5 2C15.5069 2 17.5104 2 18.7552 3.46447C19.7572 4.64332 19.9527 6.40054 19.9908 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 8.00037H15M8 13.0004H11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.6092 18.1058C20.4521 17.4921 21 16.4977 21 15.3754C21 13.5114 19.489 12.0004 17.625 12.0004H17.375C15.511 12.0004 14 13.5114 14 15.3754C14 16.4977 14.5479 17.4921 15.3908 18.1058M19.6092 18.1058C19.0523 18.5112 18.3666 18.7504 17.625 18.7504H17.375C16.6334 18.7504 15.9477 18.5112 15.3908 18.1058M19.6092 18.1058L20.192 19.9408C20.4143 20.6407 20.5255 20.9906 20.4951 21.2086C20.4318 21.6621 20.0619 21.9988 19.6252 22.0004C19.4154 22.0011 19.101 21.8362 18.4723 21.5062C18.2027 21.3648 18.0679 21.294 17.93 21.2524C17.649 21.1677 17.351 21.1677 17.07 21.2524C16.9321 21.294 16.7973 21.3648 16.5277 21.5062C15.899 21.8362 15.5846 22.0011 15.3748 22.0004C14.9381 21.9988 14.5682 21.6621 14.5049 21.2086C14.4745 20.9906 14.5857 20.6407 14.808 19.9408L15.3908 18.1058" stroke="white" stroke-width="1.5"/>
          </svg>

       </div>

       <div className='flex md:hidden justify-center items-center bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] w-full h-[50px] rounded-[10px] mx-auto  mr-[30px] backdrop-blur-sm mt-[40px] text-white '>Get In Touch </div>

       </div>

    </section>

    <section className='relative w-full h-auto flex flex-col md:flex-row  mt-[60px] mb-[100px] gap-[80px]'>
      <div className='flex flex-col items-start px-[20px] md:px-[100px]'>
        <div className='text-[30px] md:text-[40px] max-w-[130px] leading-snug'>OUR STORY</div>
        <div className='w-[160px] h-[2px] md:w-[180px] md:h-[4px] bg-[#DC1F5F] mt-[15px] md:mt-[30px]'/>
        <div className='md:max-w-[580px] text-justify mt-[16px]'>Our charter was more than just paperwork - it was a promise. A promise to serve those who needed it most, to develop leaders who would shape tomorrow, and to create a legacy that would outlive our university years. With the support of our sponsoring Lions Club and the blessing of Sabaragamuwa University administration, LEO Club SUSL was born with a clear mission: to empower communities while empowering ourselves.</div>
        <div className='md:max-w-[580px] text-justify mt-[16px]'>It all started with a group of passionate students at Sabaragamuwa University who believed that education without service was incomplete. In [Year], inspired by the global LEO movement and driven by an unwavering commitment to community development, these visionary young minds came together to establish what would become one of the most impactful student organisations on campus.</div>
      </div>
      <div className="flex-1 flex justify-center relative">

          <div  className="hidden md:block absolute bg-[#DC1F5F] z-0 lg:w-[200px] lg:h-[200px] "
            style={{ width: '200px', height: '200px', bottom: '-14px', left: '78px' }}/>

          <div  className="hidden md:block absolute bg-[#DC1F5F] z-0 lg:w-[200px] lg:h-[200px] "
            style={{ width: '200px', height: '200px', top: '-14px', right: '78px' }}/>

          <img  src={About2}  alt=""  className="w-[380px] h-[500px] object-cover relative z-10"  />

        </div>
    </section>

    <section className='relative w-full h-auto flex flex-col  mb-[60px] '>
      <div className="text-[10px] text-[#DC1F5F] font-semibold tracking-widest text-center">OUR TEAM</div>
        <div className="text-[20px] md:text-[24px] font-bold mt-2 text-gray-800 text-center">Behind the Screens</div>
        <div className="px-4 md:px-[240px] text-[14px] md:text-[16px] text-center pt-[20px] text-gray-600 leading-relaxed">
          We are passionate students from diverse faculties united by one vision: creating positive change in our communities. Our leadership team combines fresh perspectives with proven commitment, leading by example while empowering every member to discover their potential for service.
        </div>


        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 mt-[60px] gap-[60px] px-[80px] md:px-[100px] '>

          {teamMembers.map((person, index) => (
            <div key={index} className='flex flex-col'>
              
              <img 
                src={person.image} 
                alt={person.name} 
                className='w-[240px] h-[240px] object-cover rounded-[10px]'
              />

              <div className='text-[20px] mt-[20px]'>{person.name}</div>
              <div className=''>{person.role}</div>

              {/* Social Media Icons */}
              <div className='flex gap-[14px] mt-[20px]'>
                <a href={person.socials.gmail} target="_blank">
                  <img 
                    src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" 
                    className='w-[30px] h-[30px]' 
                  />
                </a>

                <a href={person.socials.whatsapp} target="_blank">
                  <img 
                    src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" 
                    className='w-[30px] h-[30px]' 
                  />
                </a>

                <a href={person.socials.facebook} target="_blank">
                  <img 
                    src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" 
                    className='w-[30px] h-[30px]' 
                  />
                </a>

                <a href={person.socials.instagram} target="_blank">
                  <img 
                    src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" 
                    className='w-[30px] h-[30px]' 
                  />
                </a>
              </div>

            </div>
          ))}

        </div>

        <div className='w-[80%] h-[1px] bg-[#DC1F5F] mt-[60px] flex justify-center items-center mx-auto'></div>

    </section>

    <section className='relative w-full h-auto flex flex-col  px-[20px] md:px-[100px] mb-[80px] '>
      <div className='text-[30px] md:text-[40px]'>Our Vision & Our Mission</div>
      <div className='text-justify md:text-[20px] font-light'>Guided by our passion for service and leadership, our vision and mission define who we are and how we strive to create a positive impact.</div>

      <div className='flex mt-[50px] gap-[40px] flex-col md:flex-row justify-between '>
        <div className='flex flex-col '>
          <img src={BgImage} alt="" className='w-[500px] h-[280px] object-cover' />
          <div className='mt-[30px] bg-[#DC1F5F] text-white pl-[12px] py-[6px] max-w-[300px]'>WHAT WE DO</div>
          <div className='max-w-[500px] mt-[20px] font-light'>To inspire and engage young individuals to serve their communities through hands-on volunteer projects, develop leadership skills, and foster meaningful connections that enrich lives.</div>
        </div>

        <div className='flex flex-col '>
          <img src={BgImage} alt="" className='w-[500px] h-[280px] object-cover' />
          <div className='mt-[30px] bg-[#DC1F5F] text-white pl-[12px] py-[6px] max-w-[300px]'>WHAT WE ASPIRE TO BE</div>
          <div className='max-w-[500px] mt-[20px] font-light'>Empowering youth to create positive change in the world through service, leadership, and compassion.</div>
        </div>

      </div>
    </section>

    <section className='relative w-full h-[460px] flex flex-col bg-cover bg-center bg-no-repeat justify-center items-center text-white mb-[80px]' style={{backgroundImage: `url(${BgImage})`}}>
      <div className="absolute inset-0 bg-black/50" />

      <div className='text-[30px] text-center md:text-[40px] z-10'>Ready to Lead Join Our Movement</div>
      <div className='md:mx-[220px] text-center z-10 mt-[30px] font-light md:text-[20px]'>Become part of a legacy where your passion meets purpose, and together we create lasting change in communities across Sabaragamuwa Province.</div>

      <div className="mt-12 md:mt-6 flex flex-col md:flex-row gap-4 px-[20px] md:px-0 w-full md:w-auto z-10">
        <button className="w-full md:w-auto bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] text-white px-6 py-3 rounded-md border-none cursor-pointer">Get In Touch</button>
        <button className="w-full md:w-auto bg-white border text-black px-6 py-3 rounded-md border-none cursor-pointer">More Details</button>
        </div>
    </section>

    <BottomNavbar />

    </>
  )
}

export default AboutUsPage