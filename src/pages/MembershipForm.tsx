import Logo from "/logo.png";

export default function MembershipForm() {
  return (
    <>
    <div className="w-full h-[80px] md:h-[100px] bg-[#DC1F5F]/60 flex lg:gap-[225px] items-center justify-center md:gap-[40px] lg:justify-start">
        <div className="w-[60px] h-[60px] lg:w-[120px] lg:h-[100px] flex justify-center items-center lg:ml-[80px]"><img src={Logo} alt="" className="w-full h-full object-cover" /></div>

        <div className="flex flex-col items-center lg:translate-x-1/6">

        <div className="w-fit">

            <div className="flex justify-between text-white text-[18px] lg:text-[40px] font-light uppercase leading-tight">
            {"Membership Form".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
            </div>

            <div className="text-white text-[12px] lg:text-[20px] font-light leading-tight"> LEO Club Sabaragamuwa University of Sri Lanka </div>

        </div>
        </div>


    </div> 

    <div className="px-[20px] md:px-[40px] lg:px-[100px] py-[40px] md:py-[60px]">

        <div className="text-[20px] underline text-end">Personal Information</div>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="md:flex-1 md:text-[18px] lg:text-[20px]">Full Name </div>
            <input type="text" className="md:flex-6 bg-[#D9D9D9] w-full h-[40px] flex items-center pl-[20px] text-[16px]" placeholder="Enter Your Name Here" />
        </div>

        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="flex-1 md:text-[18px] lg:text-[20px]">Date of Birth </div>
            <input type="date" className="md:flex-6 bg-[#D9D9D9] w-full h-[40px] flex items-center pl-[20px] text-[16px]"  />
        </div>

        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="flex-1 md:text-[18px] md:text-[18px] lg:text-[20px]">Address </div>
            <input type="text" className="md:flex-6 bg-[#D9D9D9] w-full h-[40px] flex items-center pl-[20px] text-[16px]" placeholder="Enter Privare Address" />
        </div>

        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="flex-1 text-[20px]">Email </div>
            <input type="email" className="md:flex-6 bg-[#D9D9D9] w-full h-[40px] flex items-center pl-[20px] text-[16px]" placeholder="Enter Valid Email"  />
        </div>

        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="flex-1 md:text-[18px] lg:text-[20px]">Phone Number </div>
            <input type="text" className="md:flex-6 bg-[#D9D9D9] w-full h-[40px] flex items-center pl-[20px] text-[16px]" placeholder="Enter Mobile Number (WhatsApp)" />
        </div>



        <div className="text-[20px] underline mt-[50px] text-end">University Information</div>

        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="md:flex-1 md:text-[18px] lg:text-[20px]">University </div>
            <div className=" relative md:flex-6 ">
                <input type="text" className="w-full bg-[#D9D9D9] h-[40px] flex items-center pl-[20px] text-[16px] cursor-not-allowed text-[#767474]" value="Sabaragamuwa University of Sri Lanka" disabled />
                <img src="https://img.icons8.com/?size=100&id=wOIqJRXQc1Jn&format=png&color=000000" alt="" className="absolute w-[16px] h-[16px] md:w-[20px] md:h-[20px] right-[5px] md:right-[20px] top-1/2 -translate-y-1/2 opacity-70 pointer-events-none"/>
            </div>
        </div>


        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="md:flex-1 md:text-[18px] lg:text-[20px]">Batch</div>

            <select className="md:flex-6 bg-[#D9D9D9] h-[40px] pl-[20px] r-[20px] text-[16px] cursor-pointer"  defaultValue=""  >
                <option value="" disabled >Select Your Batch</option>
                <option value="2019/2020">2019 / 2020</option>
                <option value="2020/2021">2020 / 2021</option>
                <option value="2021/2022">2021 / 2022</option>
                <option value="2022/2023">2022 / 2023</option>
                <option value="2023/2024">2023 / 2024</option>
            </select>
        </div>

        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="md:flex-1 md:text-[18px] lg:text-[20px]">Faculty</div>

            <select className="md:flex-6 bg-[#D9D9D9] h-[40px] pl-[20px] text-[16px] cursor-pointer" defaultValue="" >
                <option value="" disabled>Select Your Faculty</option>
                <option value="Applied Sciences">Faculty of Applied Sciences</option>
                <option value="Computing">Faculty of Computing</option>
                <option value="Management">Faculty of Management Studies</option>
                <option value="Agriculture">Faculty of Agricultural Sciences</option>
                <option value="Social Sciences"> Faculty of Social Sciences & Languages</option>
            </select>
        </div>


        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] mt-[40px]  lg:items-center justify-center">
            <div className="md:flex-1 md:text-[18px] lg:text-[20px]">Department </div>
            <input type="email" className="md:flex-6 bg-[#D9D9D9] h-[40px] flex items-center pl-[20px] text-[16px]" placeholder="Your Department.." />
        </div>



        <div className="text-[20px] underline mt-[50px] text-end mb-[20px]">Term and Conditions</div>


        <div className="flex flex-col gap-[20px]">

            <div className="flex items-center gap-[20px] text-[16px]">
                <input type="checkbox" className="w-[20px] h-[20px]"/>
                <div className="text-[10px] md:text-[18px] font-light">I hereby declare that all information I have provided is accurate, complete, and truthful to the best of my knowledge.</div>
            </div>

            <div className="flex items-center gap-[20px] text-[16px]">
                <input type="checkbox" className="w-[20px] h-[20px]"/>
                <div className="text-[10px] md:text-[18px] font-light">I confirm that I am currently a registered student of Sabaragamuwa University of Sri Lanka.</div>
            </div>

            <div className="flex items-center gap-[20px] text-[16px]">
                <input type="checkbox" className="w-[20px] h-[20px]"/>
                <div className="text-[10px] md:text-[18px] font-light">I hereby agree to abide by all the terms and conditions set forth by the Leo Club of Sabaragamuwa University of Sri Lanka.</div>
            </div>

        </div>

       <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] mt-[20px] md:mt-[40px]">
            <button className=" bg-[#D1CFCD] text-white w-full h-[30px] text-[12px] md:w-[200px] md:h-[50px] rounded-[5px] md:text-[16px] hover:bg-[#969593] transition-colors duration-300 cursor-pointer">Cancel</button> 
            <button className=" bg-[#DC1F5F] text-white w-full h-[30px] text-[12px] md:w-[200px] md:h-[50px] rounded-[5px] md:text-[16px] hover:bg-[#b71c4a] transition-colors duration-300 cursor-pointer">Send Message</button> 
       </div> 

    </div>
    </>
  )
}
