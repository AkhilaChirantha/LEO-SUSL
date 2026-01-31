import TopNavbarBlack from "../components/TopNavbar copy"
import BgImage from "../assets/Contact.jpg";
import BottomNavbar from "../components/BottomNavbar";
import { useSEO } from "../hooks/useSEO";

function ContactPage() {

  useSEO({
    title: "Contact | SUSL LEO Club – Feedback & Inquiries",
    description:
      "Contact SUSL LEO Club for collaborations, memberships, project information, and event updates. Reach our team at Sabaragamuwa University.",
  });

  return (
    <>

      <section  className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat object-fill"  style={{ backgroundImage: `url(${BgImage})`  }} >

        <div className="absolute inset-0 " />
    
        <div className="relative z-10 flex flex-col h-full">
          <TopNavbarBlack />

          <div className="text-[40px] md:text-[50px] text-center mt-[90px] md:mt-[120px] font-bold text-[#DC1F5F] font-[Gotu]">Contact Us</div>
          <div className="text-center md:text-[25px] text-black/60">Ready to Make a Difference? Let's Connect!</div>
    
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-[30px] md:px-[40px] lg:px-[60px] mt-[40px] md:mt-[60px] mb-[60px] gap-[40px]">

        <div className="lg:flex-5">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between ">

            <div className="flex  md:items-center gap-[10px] md:gap-[20px] ">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]"> <path d="M15 22.5L15 18.75" stroke="#141B34" stroke-width="2" stroke-linecap="round" /> <path d="M2.93924 16.5168C2.49796 13.6453 2.27733 12.2095 2.82021 10.9367C3.36309 9.6639 4.56753 8.79304 6.97642 7.05133L8.77624 5.75C11.7729 3.58333 13.2712 2.5 15 2.5C16.7288 2.5 18.2271 3.58333 21.2238 5.75L23.0236 7.05133C25.4325 8.79304 26.6369 9.6639 27.1798 10.9367C27.7227 12.2095 27.502 13.6453 27.0608 16.5168L26.6845 18.9655C26.0589 23.0362 25.7461 25.0715 24.2862 26.2857C22.8264 27.5 20.6921 27.5 16.4235 27.5H13.5765C9.30792 27.5 7.17363 27.5 5.71375 26.2857C4.25386 25.0715 3.94109 23.0362 3.31553 18.9655L2.93924 16.5168Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round" /> </svg>
              <div className="text-[14px] md:text-[20px] font-bold">Address</div>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=Sabaragamuwa+University+of+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="flex text-[14px] md:text-[20px] mt-[10px] md:mt-0">LEO Club Sabaragamuwa University of Sri Lanka</a>
          </div>
          <div className="h-[1px] bg-black/20 my-[20px] md:my-[40px]" />


          <div className="flex flex-col md:flex-row md:items-center md:justify-between">

            <div className="flex  md:items-center gap-[10px] md:gap-[20px] ">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]"><path d="M2.5 7.5L11.1413 12.3962C14.327 14.2013 15.673 14.2013 18.8587 12.3962L27.5 7.5" stroke="#141B34" stroke-width="2" stroke-linejoin="round"/><path d="M2.51971 16.8445C2.60143 20.6764 2.64229 22.5924 4.0562 24.0117C5.47011 25.431 7.43792 25.4804 11.3735 25.5793C13.7991 25.6402 16.2009 25.6402 18.6265 25.5793C22.5621 25.4804 24.5299 25.431 25.9438 24.0117C27.3577 22.5924 27.3986 20.6764 27.4803 16.8445C27.5066 15.6124 27.5066 14.3876 27.4803 13.1555C27.3986 9.32358 27.3577 7.40762 25.9438 5.98833C24.5299 4.56904 22.5621 4.5196 18.6265 4.42071C16.2009 4.35977 13.7991 4.35976 11.3735 4.4207C7.43791 4.51958 5.4701 4.56902 4.05619 5.98831C2.64228 7.4076 2.60142 9.32356 2.51971 13.1555C2.49343 14.3876 2.49343 15.6124 2.51971 16.8445Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round"/></svg>
              <div className="text-[14px] md:text-[20px] font-bold">G mail</div>
            </div>

            <a href="mailto:leoclubsabaragamuwa@gmail.com" className="flex text-[14px] md:text-[20px] mt-[10px] md:mt-0">leoclubsabaragamuwa@gmail.com</a>
          </div>
          <div className="h-[1px] bg-black/20 my-[20px] md:my-[40px]" /> 


          <div className="flex flex-col md:flex-row md:items-center md:justify-between ">

            <div className="flex  md:items-center gap-[10px] md:gap-[20px] ">
             <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]"><path d="M4.72203 14.9279C3.537 12.8616 2.96481 11.1743 2.6198 9.46402C2.10953 6.93447 3.27726 4.46351 5.21173 2.88684C6.02931 2.22048 6.96654 2.44815 7.45 3.3155L8.54148 5.27364C9.40661 6.82571 9.83918 7.60174 9.75338 8.42449C9.66758 9.24724 9.08421 9.91733 7.91747 11.2575L4.72203 14.9279ZM4.72203 14.9279C7.12063 19.1103 10.8848 22.8766 15.0721 25.278M15.0721 25.278C17.1384 26.463 18.8257 27.0352 20.536 27.3802C23.0655 27.8905 25.5365 26.7227 27.1132 24.7883C27.7795 23.9707 27.5519 23.0335 26.6845 22.55L24.7264 21.4585C23.1743 20.5934 22.3983 20.1608 21.5755 20.2466C20.7528 20.3324 20.0827 20.9158 18.7425 22.0825L15.0721 25.278Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round"/></svg>
              <div className="text-[14px] md:text-[20px] font-bold">Mobile</div>
            </div>

            <a href="https://wa.me/94767887587" target="_blank" rel="noopener noreferrer" className="flex text-[14px] md:text-[20px] mt-[10px] md:mt-0">076 - 788 7587 / 077 - 574 4738</a>
          </div>
          <div className="h-[1px] bg-black/20 my-[20px] md:my-[40px]" />



          <div className="mt-[20px] text-[40px] font-bold">Leave A Reply</div>

          <div className="mt-[10px] text-[22px]">Name</div>
          <input type="text" className="w-full h-[50px] bg-[#D9D9D9] pl-[20px] mt-[5px] rounded-[4px]" />

          <div className="mt-[40px] text-[22px]">Email</div>
          <input type="email" className="w-full h-[50px] bg-[#D9D9D9] pl-[20px] mt-[5px] rounded-[4px]" />

          <div className="mt-[40px] text-[22px]">Message</div>
          <textarea className="w-full h-[100px] bg-[#D9D9D9] pl-[20px] pt-[5px] mt-[5px] rounded-[4px] leading-tight" />  

          <button className="mt-[20px] md:mt-[30px] bg-[#DC1F5F] text-white w-full h-[30px] text-[12px] md:w-[200px] md:h-[50px] rounded-[5px] md:text-[16px] hover:bg-[#b71c4a] transition-colors duration-300">Send Message</button>        
                   
        </div>

        <div className="lg:flex-3 flex flex-col gap-[40px]">
          <div><img src="https://media.assettype.com/thequint%2F2024-03%2Fa1d030ae-1cf5-4043-bac0-6e001170ec20%2FWorld_Social_Work_Day_2024.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200" alt="" className="h-[300px] w-full object-fill" /></div>
          <div className="w-full h-[300px] rounded-md overflow-hidden">
            <iframe title="Sabaragamuwa University Map" src="https://www.google.com/maps?q=Sabaragamuwa+University+of+Sri+Lanka&output=embed"  className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

      </section>

      <BottomNavbar />
      
    </>
  )
}

export default ContactPage