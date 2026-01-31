import TopNavbarBlack from "../components/TopNavbar copy";
import BgImage from '../assets/AboutMain.jpg'
import BottomNavbar from "../components/BottomNavbar";
import { useSEO } from "../hooks/useSEO";

export default function MagazinePage() {

    useSEO({
        title: "Magazine | SUSL LEO Club Publications & Articles",
        description:
            "Read SUSL LEO Club magazines and publications featuring our events, projects, stories, and achievements at Sabaragamuwa University.",
    });

  return (
    <>
      <div className="bg-white">

        <section className="relative min-h-screen flex flex-col">
            <TopNavbarBlack />

            <div className="px-4 sm:px-8 md:px-[40px] lg:px-[60px] py-6 sm:py-8 md:py-[40px]">

                {/* Main Heading */}
                <div className="text-3xl sm:text-4xl md:text-[50px] font-bold mb-6 sm:mb-8 md:mb-[40px]">
                Get{" "}
                <span className="bg-gradient-to-r from-[#DC1F5F] to-[#DC1F5F]/20 bg-clip-text text-transparent">
                    Inspired
                </span>
                </div>

                {/* Three Column Layout */}
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 sm:gap-8 lg:gap-[30px] mt-6 sm:mt-8 lg:mt-[40px]">

                {/* ================= LEFT COLUMN ================= */}
                <div className="flex-[1.5] flex flex-col gap-6 sm:gap-8 lg:gap-[20px] h-full">

                    {/* Mobile: 2 in a row | Desktop: unchanged */}
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-[20px]">

                    {/* Article 1 */}
                    <div className="flex flex-col gap-3">
                        <img
                        src="https://marketplace.canva.com/EAF6rH0f1No/1/0/1131w/canva-gren-and-white-simple-travel-magazine-cover-43s7e0xUVqU.jpg"
                        alt="Article"
                        className="w-full h-[200px] sm:h-[200px] md:h-[220px] object-fill rounded"
                        />
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full w-fit">
                        December Edition
                        </span>
                        <div className="text-[18px] font-bold leading-tight">
                        8 Reasons to Become A Design Preener This Days
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-black/20 hidden lg:block"></div>

                    {/* Article 2 */}
                    <div className="flex flex-col gap-3 lg:mt-[14px]">
                        <img
                        src="https://marketplace.canva.com/EAF6rH0f1No/1/0/1131w/canva-gren-and-white-simple-travel-magazine-cover-43s7e0xUVqU.jpg"
                        alt="Article"
                        className="w-full h-[200px] sm:h-[200px] md:h-[220px] object-fill rounded"
                        />
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full w-fit">
                        January Edition
                        </span>
                        <div className="text-[18px] font-bold leading-tight">
                        Review of the Best Roof Top Cars For This Year
                        </div>
                    </div>

                    </div>

                    <div className="w-full h-[1px] bg-black/20 mt-auto"></div>
                </div>

                {/* ================= CENTER COLUMN (NO CHANGE) ================= */}
                <div className="flex-[2.5] flex flex-col gap-3 h-full">
                    <img
                    src="https://img.freepik.com/premium-vector/fashion-magazine-cover-design-template_602747-267.jpg?w=740&q=80"
                    alt="Featured Magazine"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-fill rounded"
                    />

                    <div className="inline-flex items-center lg:pt-[25px]">
                    <span className="bg-white text-black border border-[#FF9BBD] text-[10px] sm:text-[14px] px-[6px] sm:px-[10px] py-[3px] sm:py-[4px] rounded-full font-light">
                        November Edition
                    </span>
                    </div>

                    <div className="text-xl sm:text-[30px] font-semibold text-black leading-tight">
                    Announcing Our First Magazine Blog Template on Web Flow
                    </div>

                    <div className="text-xs sm:text-sm text-black/70 font-bold">
                    By Adan Harris
                    </div>

                    <div className="w-full h-[1px] bg-black/20 mt-auto"></div>
                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="flex-[1.5] flex flex-col gap-6 sm:gap-8 lg:gap-[20px] h-full">

                    {/* Mobile: 2 in a row | Desktop: unchanged */}
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-[20px]">

                    {/* Article 1 */}
                    <div className="flex flex-col gap-3">
                        <img
                        src="https://marketplace.canva.com/EAF6rH0f1No/1/0/1131w/canva-gren-and-white-simple-travel-magazine-cover-43s7e0xUVqU.jpg"
                        alt="Article"
                        className="w-full h-[200px] sm:h-[200px] md:h-[220px] object-fill rounded"
                        />
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full w-fit">
                        December Edition
                        </span>
                        <div className="text-[18px] font-bold leading-tight">
                        8 Reasons to Become A Design Preener This Days
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-black/20 hidden lg:block"></div>

                    {/* Article 2 */}
                    <div className="flex flex-col gap-3 lg:mt-[14px]">
                        <img
                        src="https://marketplace.canva.com/EAF6rH0f1No/1/0/1131w/canva-gren-and-white-simple-travel-magazine-cover-43s7e0xUVqU.jpg"
                        alt="Article"
                        className="w-full h-[200px] sm:h-[200px] md:h-[220px] object-fill rounded"
                        />
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full w-fit">
                        January Edition
                        </span>
                        <div className="text-[18px] font-bold leading-tight">
                        Review of the Best Roof Top Cars For This Year
                        </div>
                    </div>

                    </div>

                    <div className="w-full h-[1px] bg-black/20 mt-auto"></div>
                </div>

                </div>
            </div>
        </section>


        <section className="relative flex flex-col h-auto py-[10px] lg:py-[40px] px-[16px] lg:px-[60px]">
            <div className="text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-tight">Explore <br /> <span className="bg-gradient-to-r from-[#DC1F5F] to-[#DC1F5F]/20 bg-clip-text text-transparent">Trending Topics</span></div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[40px] ">

                <div className="flex flex-col items-start">
                    <img src="https://illogicall-music.com/storage/images/image?remote=https%3A%2F%2Fillogicall-music.com%2FWebRoot%2FLaPoste%2FShops%2Fbox103452-190306%2F673C%2F7ED2%2F73AF%2FC279%2F9212%2F0A0C%2F05BC%2F555E%2Flady_gaga_boutique_vogue_2024.jpg&shop=box103452-190306&width=600&height=2560" alt="" className="h-[200px] md:h-[400px] lg:h-[400px] w-full object-fill" />
                    <div className="inline-flex items-center mt-[10px] lg:mt-[20px]">
                        <span className="bg-white text-black border-[1px] border-[#FF9BBD] text-[8px] sm:text-[10px] px-[6px] sm:px-[8px] py-[3px] sm:py-[4px] rounded-full font-light"> September Edition </span>
                    </div>

                    <div className="text-[15px] lg:text-[18px] mt-[15px] leading-tight">The Best Place to Learn About the Latest News About Cars</div>

                    <div className="flex mt-[15px] gap-[8px] items-center">

                        <div className="text-[12px] text-[#DC1F5F] font-bold ">View Topic </div>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1091_172)">
                        <path d="M9.33367 8.99988L-1.33301 8.99988" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.00051 12.3333C6.00051 12.3333 9.33381 9.87833 9.33382 8.99993C9.33383 8.12154 6.00049 5.66663 6.00049 5.66663" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        </g><defs><clipPath id="clip0_1091_172"><rect width="16" height="16" fill="white"/> </clipPath> </defs></svg>

                    </div>
                </div>


                <div className="flex flex-col items-start">
                    <img src="https://illogicall-music.com/storage/images/image?remote=https%3A%2F%2Fillogicall-music.com%2FWebRoot%2FLaPoste%2FShops%2Fbox103452-190306%2F673C%2F7ED2%2F73AF%2FC279%2F9212%2F0A0C%2F05BC%2F555E%2Flady_gaga_boutique_vogue_2024.jpg&shop=box103452-190306&width=600&height=2560" alt="" className="h-[200px] md:h-[400px] lg:h-[400px] w-full object-fill" />
                    <div className="inline-flex items-center mt-[10px] lg:mt-[20px]">
                        <span className="bg-white text-black border-[1px] border-[#FF9BBD] text-[8px] sm:text-[10px] px-[6px] sm:px-[8px] py-[3px] sm:py-[4px] rounded-full font-light"> September Edition </span>
                    </div>

                    <div className="text-[15px] lg:text-[18px] mt-[15px] leading-tight">The Best Place to Learn About the Latest News About Cars</div>

                    <div className="flex mt-[15px] gap-[8px] items-center">

                        <div className="text-[12px] text-[#DC1F5F] font-bold ">View Topic </div>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1091_172)">
                        <path d="M9.33367 8.99988L-1.33301 8.99988" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.00051 12.3333C6.00051 12.3333 9.33381 9.87833 9.33382 8.99993C9.33383 8.12154 6.00049 5.66663 6.00049 5.66663" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        </g><defs><clipPath id="clip0_1091_172"><rect width="16" height="16" fill="white"/> </clipPath> </defs></svg>

                    </div>
                </div>


                <div className="flex flex-col items-start">
                    <img src="https://illogicall-music.com/storage/images/image?remote=https%3A%2F%2Fillogicall-music.com%2FWebRoot%2FLaPoste%2FShops%2Fbox103452-190306%2F673C%2F7ED2%2F73AF%2FC279%2F9212%2F0A0C%2F05BC%2F555E%2Flady_gaga_boutique_vogue_2024.jpg&shop=box103452-190306&width=600&height=2560" alt="" className="h-[200px] md:h-[400px] lg:h-[400px] w-full object-fill" />
                    <div className="inline-flex items-center mt-[10px] lg:mt-[20px]">
                        <span className="bg-white text-black border-[1px] border-[#FF9BBD] text-[8px] sm:text-[10px] px-[6px] sm:px-[8px] py-[3px] sm:py-[4px] rounded-full font-light"> September Edition </span>
                    </div>

                    <div className="text-[15px] lg:text-[18px] mt-[15px] leading-tight">The Best Place to Learn About the Latest News About Cars</div>

                    <div className="flex mt-[15px] gap-[8px] items-center">

                        <div className="text-[12px] text-[#DC1F5F] font-bold ">View Topic </div>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1091_172)">
                        <path d="M9.33367 8.99988L-1.33301 8.99988" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.00051 12.3333C6.00051 12.3333 9.33381 9.87833 9.33382 8.99993C9.33383 8.12154 6.00049 5.66663 6.00049 5.66663" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        </g><defs><clipPath id="clip0_1091_172"><rect width="16" height="16" fill="white"/> </clipPath> </defs></svg>

                    </div>
                </div>


                <div className="flex flex-col items-start">
                    <img src="https://illogicall-music.com/storage/images/image?remote=https%3A%2F%2Fillogicall-music.com%2FWebRoot%2FLaPoste%2FShops%2Fbox103452-190306%2F673C%2F7ED2%2F73AF%2FC279%2F9212%2F0A0C%2F05BC%2F555E%2Flady_gaga_boutique_vogue_2024.jpg&shop=box103452-190306&width=600&height=2560" alt="" className="h-[200px] md:h-[400px] lg:h-[400px] w-full object-fill" />
                    <div className="inline-flex items-center mt-[10px] lg:mt-[20px]">
                        <span className="bg-white text-black border-[1px] border-[#FF9BBD] text-[8px] sm:text-[10px] px-[6px] sm:px-[8px] py-[3px] sm:py-[4px] rounded-full font-light"> September Edition </span>
                    </div>

                    <div className="text-[15px] lg:text-[18px] mt-[15px] leading-tight">The Best Place to Learn About the Latest News About Cars</div>

                    <div className="flex mt-[15px] gap-[8px] items-center">

                        <div className="text-[12px] text-[#DC1F5F] font-bold ">View Topic </div>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1091_172)">
                        <path d="M9.33367 8.99988L-1.33301 8.99988" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.00051 12.3333C6.00051 12.3333 9.33381 9.87833 9.33382 8.99993C9.33383 8.12154 6.00049 5.66663 6.00049 5.66663" stroke="#DC1F5F" stroke-linecap="round" stroke-linejoin="round"/>
                        </g><defs><clipPath id="clip0_1091_172"><rect width="16" height="16" fill="white"/> </clipPath> </defs></svg>

                    </div>
                </div>                

            </div>
        </section>

       <section className="relative h-auto flex flex-col px-[16px] lg:px-[60px] py-[40px]">

            {/* Heading */}
            <div className="text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-tight">Discover <br /><span className="bg-gradient-to-r from-[#DC1F5F] to-[#DC1F5F]/20 bg-clip-text text-transparent"> All Magazines </span> </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-[12px] sm:gap-[20px] mt-[40px]">
                <div className="w-[80px] h-[40px] flex items-center justify-center bg-[#DC1F5F] text-[16px] sm:text-[18px] text-white rounded-[6px] font-light"> All </div>
                <div className="w-[100px] h-[40px] flex items-center justify-center bg-[#F3F1EE] text-[16px] sm:text-[18px] text-black rounded-[6px] font-light"> 2025 </div>
                <div className="w-[100px] h-[40px] flex items-center justify-center bg-[#F3F1EE] text-[16px] sm:text-[18px] text-black rounded-[6px] font-light"> 2026 </div>
            </div>

            {/* Magazine Grid */}
            <div className="lg:flex lg:gap-[40px] mt-[40px]">

                {/* LEFT COLUMN */}
                <div className="lg:flex-1 flex flex-col gap-[40px] w-full">

                {/* CARD */}
                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://i.ebayimg.com/images/g/yxUAAOSw-RhkxXVH/s-l400.png"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>
                                          
                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://signedbysuperstars.com/cdn/shop/products/2023-01-11-13-20-15-01.jpg?v=1674000791"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://signedbysuperstars.com/cdn/shop/products/2023-01-11-13-20-15-01.jpg?v=1674000791"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://i.ebayimg.com/images/g/yxUAAOSw-RhkxXVH/s-l400.png"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:flex-1 flex flex-col gap-[40px] w-full mt-[40px] lg:mt-0">

                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://signedbysuperstars.com/cdn/shop/products/2023-01-11-13-20-15-01.jpg?v=1674000791"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://i.ebayimg.com/images/g/yxUAAOSw-RhkxXVH/s-l400.png"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://i.ebayimg.com/images/g/yxUAAOSw-RhkxXVH/s-l400.png"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
                    </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full bg-[#F3F1EE] lg:h-[240px]">

                    <div className="lg:flex-1 w-full">
                    <img
                        src="https://signedbysuperstars.com/cdn/shop/products/2023-01-11-13-20-15-01.jpg?v=1674000791"
                        alt=""
                        className="w-full h-[220px] sm:h-[240px] object-cover lg:object-fill"
                    />
                    </div>

                    <div className="lg:flex-2 flex flex-col p-[20px] sm:p-[30px]">
                    <div className="flex justify-between items-center">
                        <span className="bg-white text-black border border-[#FF9BBD] text-[10px] px-[6px] py-[3px] rounded-full">December Edition</span>
                        <div className="flex gap-[6px] items-center text-[14px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.34546 6.87054C2.08675 6.15455 1.9574 5.79655 2.01256 5.56714C2.07289 5.31622 2.25133 5.1206 2.47942 5.05535C2.68795 4.99568 3.01235 5.13986 3.66115 5.42822C4.23502 5.68328 4.52196 5.81081 4.79155 5.80371C5.08838 5.7959 5.37392 5.67686 5.60107 5.46625C5.80737 5.27495 5.94574 4.97012 6.22249 4.36046L6.8324 3.01687C7.34187 1.89454 7.5966 1.33337 8 1.33337C8.4034 1.33337 8.65813 1.89454 9.1676 3.01687L9.77751 4.36047C10.0543 4.97013 10.1926 5.27495 10.3989 5.46625C10.6261 5.67686 10.9116 5.7959 11.2085 5.80371C11.478 5.81081 11.765 5.68328 12.3388 5.42822C12.9876 5.13986 13.312 4.99568 13.5206 5.05535C13.7487 5.1206 13.9271 5.31622 13.9874 5.56714C14.0426 5.79655 13.9132 6.15455 13.6545 6.87054L12.5425 9.94816C12.0668 11.2647 11.829 11.923 11.3312 12.2948C10.8335 12.6667 10.1903 12.6667 8.90384 12.6667H7.09616C5.80973 12.6667 5.16651 12.6667 4.66877 12.2948C4.17102 11.923 3.93318 11.2647 3.45748 9.94816L2.34546 6.87054Z" stroke="#141B34"/>
                                <path d="M8 9.33337H8.00599" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.6665 14.6666H11.3332" stroke="#141B34" stroke-linecap="round"/>
                            </svg>
                            <span>2025</span>
                        </div>
                    </div>

                    <div className="text-[18px] sm:text-[21px] font-bold pt-[10px] leading-tight">
                        The Best Place to Learn About the Latest News About Cars
                    </div>

                    <div className="text-[13px] sm:text-[14px] font-light text-justify mt-[10px] lg:mt-[0px]">
                        For the most current information and in-depth analysis on automotive
                        developments, widely regarded as a leading source for the latest news
                        about cars, including reviews, and industry trends.
                    </div>

                    <div className="text-[14px] font-bold text-[#DC1F5F] underline mt-[10px] lg:mt-[5px] self-end">
                        View Full Magazine
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

      </div>
    </>
  );
}
