import Logo from "/logo.png";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <section className="w-full h-auto bg-[#ffffff]">
      <div className="flex flex-col lg:flex-row justify-between items-between gap-2 px-4 lg:pl-20 lg:pr-20 py-5">
        <div className="w-full lg:w-auto items-start">
          <div className="w-[100px] h-[100px]">
            <img src={Logo} alt="" />
          </div>
          <div>LEO Club</div>
          <div>Sabaragamuwa University of Sri Lanka</div>

          <div className="w-[320px] text-[12px] text-[#bababa] text-justify pt-[10px]">
            LEO Club is a youth service organization that develops leadership skills through community service.
            "LEO" stands for Leadership, Experience, and Opportunity empowering young people to serve their
            communities while growing as leaders.
          </div>
        </div>

        <div className="w-full lg:w-auto pt-[30px] md:pt-[60px]">
          <div className=" text-[16px] mb-3 flex gap-2">
            <span className="text-[#DC1F5F]">|</span>LINK
          </div>

          <div className="text-[13px] font-normal flex flex-row md:flex-row md:gap-10 lg:gap-2 lg:flex-col gap-4 md:pl-10 lg:pl-0">
            <Link
              to="/"
              className="flex items-center gap-3 hover:text-[#DC1F5F] cursor-pointer"
            >
              <div className="text-[14px] font-light text-[#767474]">HOME</div>
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-3 hover:text-[#DC1F5F] cursor-pointer"
            >
              <div className="text-[14px] font-light text-[#767474]">ABOUT US</div>
            </Link>

            <Link
              to="/projects"
              className="flex items-center gap-3 hover:text-[#DC1F5F] cursor-pointer"
            >
              <div className="text-[14px] font-light text-[#767474]">PROJECTS</div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 hover:text-[#DC1F5F] cursor-pointer"
            >
              <div className="text-[14px] font-light text-[#767474]">CONTACT</div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto pt-[30px] md:pt-[60px]">
          <div className="text-[16px] mb-3 flex gap-2">
            <span className="text-[#DC1F5F]">|</span> OTHER
          </div>
          <div className="flex flex-col gap-1 lg:gap-2 pl-0 md:pl-10 lg:pl-0">
            <div className="text-[14px] font-ligh text-[#767474]">TERMS OF SERVICE</div>
            <div className="text-[14px] font-light text-[#767474]">PRIVACY POLICY</div>
          </div>
        </div>

        <div className="w-full lg:w-auto pt-[30px] md:pt-[60px]">
          <div className="text-[16px] mb-3 flex gap-2">
            <span className="text-[#DC1F5F]">|</span> LINK
          </div>
          <div className="text-[12px] text-[#767474]">Follow us on Social Media</div>

          <div className="flex gap-[20px] pt-[10px] ">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=bbCdIvHZ3OjJ&format=png&color=000000"
                className="w-[30px] h-[30px]"
                alt=""
              />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                className="w-[30px] h-[30px]"
                alt=""
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                className="w-[30px] h-[30px]"
                alt=""
              />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                className="w-[30px] h-[30px]"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[0.1px] bg-[#bababa]" />

      <div className="text-[#bababa] text-center text-[10px] pt-[5px] pb-[5px] ">
        Copyright © 2025 Vertex IT. All rights reserved.
      </div>
    </section>
  );
}
