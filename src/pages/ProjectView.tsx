import TopNavbarBlack from "../components/TopNavbar copy";
import BgImage from '../assets/AboutMain.jpg'
import BottomNavbar from "../components/BottomNavbar";

export default function ProjectView() {
  return (
    <>
      <section className="relative flex flex-col min-h-screen">
        <TopNavbarBlack />

        <div className="px-0 lg:px-[60px] pt-[40px] pb-[35px] lg:py-[35px] lg:flex gap-[20px]">

            <div className="flex-5 flex flex-col bg-white  h-[100%] pb-[20px] lg:pb-0">
                <img src="https://www.attractionsinsrilanka.com/wp-content/uploads/2020/04/Wangedigala-1.jpg" alt=""  className="w-full h-[200px] md:h-[400px] object-fill"/>
                <div className="pt-[30px] pl-[20px] lg:pl-[30px] text-[20px] lg:text-[30px] font-bold leading-tight">Mountain Conservation Drive</div>
                <div className="pt-[10px] pl-[20px] lg:pl-[30px] pr-[30px] text-[12px] lg:text-[16px] text-justify">Hiking is walking in natural environments like forests, mountains, or parks, often on trails, for recreation, fitness, or adventure, offering a way to connect with nature, improve physical/mental health, and explore scenic areas, ranging from easy strolls to challenging multi-day treks.  It involves uneven terrain, elevation changes, and can be done solo or in groups, providing exercise and mental rejuvenation away from daily life. </div>
                <div className="flex  gap-[10px] py-[20px] px-[20px] lg:px-[30px] max-w-svw flex-wrap">
                    <div className="bg-[#E5E5E5] w-auto px-[10px] h-[30px] flex items-center text-[14px]">ENTERTAINMENT</div>
                    <div className="bg-[#E5E5E5] w-auto px-[10px] h-[30px] flex items-center text-[14px]">EVENT</div>
                    <div className="bg-[#E5E5E5] w-auto px-[10px] h-[30px] flex items-center text-[14px]">MEETUP</div>
                    <div className="bg-[#E5E5E5] w-auto px-[10px] h-[30px] flex items-center text-[14px]">ADVENTURE</div>
                </div>
            </div>

            <div className="flex-2 flex flex-col bg-white pb-[20px] lg:pb-0 ">
                <div className="pt-[30px] pl-[30px] text-[20px] font-bold leading-tight text-[#DC1F5F]/60">Event Details</div>

                <div className="h-[1px] w-full bg-[#F3F1EE] my-[30px]" />

                <div className="px-[30px]">
                    
                        <div className="flex gap-[24px]  items-stretch ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[5px]"> <path d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18 2V4M6 2V4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 8H21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <div className="flex flex-col justify-center">
                                <div className="text-[16px] font-bold">Date</div>
                                <div className="text-[16px] font-light">28 December 2025</div>
                            </div>
                            
                        </div>


                        <div className="h-[1px] w-full bg-[#F3F1EE] my-[20px]" />
                        

                        <div className="flex gap-[24px]  items-stretch ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5"/><path d="M12 8V12L14 14" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <div className="flex flex-col justify-center">
                                <div className="text-[16px] font-bold">Time</div>
                                <div className="text-[16px] font-light">7.30 AM </div>
                            </div>
                            
                        </div>


                        <div className="h-[1px] w-full bg-[#F3F1EE] my-[20px]" />


                        <div className="flex gap-[24px]  items-stretch ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="#141B34" stroke-width="1.5"/><path d="M9.3881 7.83138C10.3267 7.28308 11.1459 7.50404 11.638 7.856C11.8398 8.00032 11.9406 8.07248 12 8.07248C12.0594 8.07248 12.1602 8.00032 12.362 7.856C12.8541 7.50404 13.6733 7.28308 14.6119 7.83138C15.8437 8.55098 16.1224 10.925 13.2812 12.9278C12.74 13.3093 12.4694 13.5 12 13.5C11.5306 13.5 11.26 13.3093 10.7188 12.9278C7.8776 10.925 8.15632 8.55098 9.3881 7.83138Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/></svg>
                            <div className="flex flex-col justify-center">
                                <div className="text-[16px] font-bold">Location</div>
                                <div className="text-[16px] font-light">Wangedigala, Kalupahana</div>
                            </div>
                            
                        </div>


                        <div className="h-[1px] w-full bg-[#F3F1EE] my-[20px]" />



                        <div className="flex gap-[24px]  items-stretch ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#141B34" stroke-width="1.5"/></svg>
                            <div className="flex flex-col justify-center">
                                <div className="text-[16px] font-bold">Coordinator</div>
                                <div className="text-[16px] font-light">Mr. Nisal Wickramasinha</div>
                            </div>
                            
                        </div>


                        <div className="h-[1px] w-full bg-[#F3F1EE] my-[20px]" />



                        <div className="flex gap-[24px]  items-stretch ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/></svg>
                            <div className="flex flex-col justify-center">
                                <div className="text-[16px] font-bold">More Information</div>
                                <div className="text-[16px] font-light">076 - 345 2323</div>
                            </div>
                            
                        </div>


                        <div className="h-[1px] w-full bg-[#F3F1EE] my-[20px]" />


                        <div className="flex gap-[24px]  items-stretch ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" stroke="#141B34" stroke-width="1.5"/><path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="#141B34" stroke-width="1.5"/><path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" stroke="#141B34" stroke-width="1.5"/><path d="M8.72852 10.7498L15.2285 7.75031M8.72852 13.2503L15.2285 16.2498" stroke="#141B34" stroke-width="1.5"/></svg>

                            <div className="flex flex-col justify-center">
                                <div className="text-[16px] font-bold">Network</div>
                                <div className="flex gap-[20px] mt-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="#141B34" stroke-linejoin="round"/></svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#141B34" stroke-linejoin="round"/><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#141B34"/><path d="M17.5078 6.5L17.4988 6.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#141B34" stroke-linejoin="round"/><path d="M10.4292 11.5304C10.7026 11.5695 10.9559 11.3796 10.995 11.1062C11.0341 10.8329 10.8442 10.5796 10.5708 10.5405L10.5 11.0354L10.4292 11.5304ZM17.5 10C17.7761 10 18 9.77614 18 9.5C18 9.22386 17.7761 9 17.5 9V9.5V10ZM14 6C14 5.72386 13.7761 5.5 13.5 5.5C13.2239 5.5 13 5.72386 13 6H13.5H14ZM13.5 14.5H13C13 16.1569 11.6569 17.5 10 17.5V18V18.5C12.2091 18.5 14 16.7091 14 14.5H13.5ZM10 18V17.5C8.34315 17.5 7 16.1569 7 14.5H6.5H6C6 16.7091 7.79086 18.5 10 18.5V18ZM6.5 14.5H7C7 12.8431 8.34315 11.5 10 11.5V11V10.5C7.79086 10.5 6 12.2909 6 14.5H6.5ZM10 11V11.5C10.146 11.5 10.2893 11.5104 10.4292 11.5304L10.5 11.0354L10.5708 10.5405C10.3841 10.5138 10.1935 10.5 10 10.5V11ZM17.5 9.5V9C16.6615 9 15.7727 8.65662 15.0956 8.09111C14.4189 7.52596 14 6.78107 14 6H13.5H13C13 7.15193 13.6146 8.15704 14.4546 8.85864C15.2943 9.55988 16.4055 10 17.5 10V9.5ZM13.5 6H13V14.5H13.5H14V6H13.5Z" fill="#141B34"/></svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#141B34" stroke-linejoin="round"/><path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#141B34"/></svg>
                                </div>
                            </div>
                            
                        </div>




                </div>



            </div>
        </div>
      </section>

      <section className='relative w-full h-[460px] flex flex-col bg-cover bg-center bg-no-repeat justify-center items-center text-white ' style={{backgroundImage: `url(${BgImage})`}}>
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
