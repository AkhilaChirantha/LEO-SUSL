import TopNavbarBlack from "../components/TopNavbar copy";
import BgImage from '../assets/AboutMain.jpg'
import BottomNavbar from "../components/BottomNavbar";
import { useSEO } from "../hooks/useSEO";

export default function GalleryPage() {

  useSEO({
    title: "Gallery | SUSL LEO Club Photos & Highlights",
    description:
      "Browse photos and highlights from SUSL LEO Club projects, events, and memorable moments at Sabaragamuwa University of Sri Lanka.",
  });


  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat md:bg-none md:bg-transparent bg-[url('https://img.freepik.com/premium-photo/colorful-curve-frame-template-design-element_53876-1024352.jpg?semt=ais_hybrid&w=740&q=80')]">

        <TopNavbarBlack />

        {/* Main Content */}
        <div className="flex px-[60px] py-[40px] gap-[80px]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center items-center md:items-start md:absolute translate-y-3/5 md:translate-y-1/4 lg:translate-y-1/3   ">
            <div className="text-[30px] lg:text-[50px] font-semibold leading-tight md:max-w-[280px] lg:max-w-[400px] md:relative text-center md:text-start"> Photo Gallery of <span className="bg-gradient-to-r from-[#DC1F5F] to-[#DC1F5F]/20 bg-clip-text text-transparent">The LEO Club</span> </div>

            <div className="text-[12px] lg:text-[18px] mt-[20px] md:mt-[10px] lg:mt-[20px] md:relative md:max-w-[240px] lg:max-w-[370px] leading-tight font-light text-center md:text-start"> Memorable moments from our events and community service projects. </div>

            <div className="md:pt-[10px] lg:pt-[28px] mt-[20px] md:mt-6 w-auto md:w-auto px-[30px] md:px-0 md:relative"><button className="bg-gradient-to-r from-[#DC1F5F] to-[#FF9BBD] text-white px-6 py-3 rounded-md cursor-pointer w-auto"> Get In Touch</button></div>

          </div>

          {/* RIGHT IMAGE COLLECTION */}
          <div className="md:flex flex-col items-end gap-[20px] flex-1 hidden">

            {/* Row 1 */}
            <div className="w-[200px] h-[140px] lg:w-[300px] lg:h-[200px]">
              <img
                src="https://assets.dulwich-gallery.substrakt.net/images/Luca_Piffaretti_DPG_1_Print_0010.2e16d0ba.fill-2000x1200.jpg"
                alt=""
                className="object-fill w-full h-full"
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-[20px]">
              <div className="w-[200px] h-[140px] lg:w-[300px] lg:h-[200px]">
                <img
                  src="https://www.vanartgallery.bc.ca/wp-content/smush-webp/2019/06/1_Collecgtion-HeroImage-Collection-Page-Emily-Carr-Installation.jpg.webp"
                  alt=""
                  className="object-fill w-full h-full"
                />
              </div>
              <div className="w-[200px] h-[140px] lg:w-[300px] lg:h-[200px]">
                <img
                  src="https://images.stockcake.com/public/b/e/5/be562590-972b-497a-a013-44d18c4e7e21_large/art-gallery-interior-stockcake.jpg"
                  alt=""
                  className="object-fill w-full h-full"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-[20px]">
              <div className="w-[200px] h-[140px] lg:w-[300px] lg:h-[200px]">
                <img
                  src="https://sesnongalleries.ucsc.edu/files/2025/01/Mulenga-gallery.jpg"
                  alt=""
                  className="object-fill w-full h-full"
                />
              </div>
              <div className="w-[200px] h-[140px] lg:w-[300px] lg:h-[200px]">
                <img
                  src="https://cdn.sanity.io/images/juzvn5an/release-adp/5a60af7870e1cab1869d779b8c1b11285f6df9e6-2800x1576.jpg?w=3840"
                  alt=""
                  className="object-fill w-full h-full"
                />
              </div>
              <div className="w-[200px] h-[140px] lg:w-[300px] lg:h-[200px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Asia-Society-Gallery.jpg/960px-Asia-Society-Gallery.jpg"
                  alt=""
                  className="object-fill w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className="relative h-auto pt-[40px] pb-[40px] px-[60px]">
            <div className="text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-tight">Explore <br /> <span className="bg-gradient-to-r from-[#DC1F5F] to-[#DC1F5F]/20 bg-clip-text text-transparent">Project Gallery </span></div>

           <div className="flex flex-col gap-[20px] mt-[40px]">

                <div className="flex flex-col md:flex-row gap-[20px]">

                    <div className="flex-3 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    <div className="flex-2 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    <div className="flex-3 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    
                </div>

                <div className="flex flex-col md:flex-row gap-[20px]">

                    <div className="flex-2 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    <div className="flex-3 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    <div className="flex-3 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    
                </div>

                <div className="flex flex-col md:flex-row gap-[20px]">

                    <div className="flex-3 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    <div className="flex-3 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    <div className="flex-2 relative w-full h-[200px] lg:h-[300px] overflow-hidden">
                        <img src="https://patmoscleaningg.com/wp-content/uploads/2024/12/cleaning-service.jpeg"  alt="" className="w-full h-full object-fill" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute top-[10px] right-[10px] lg:top-[20px] lg:right-[20px]">
                            <div className="w-[80px] lg:w-[110px] bg-[#DC1F5F] h-[24px] flex items-center justify-center text-[10px] lg:text-[12px] text-white rounded-[5px] cursor-pointer">Full Gallery </div>
                        </div>
                        <div className="absolute bottom-[20px] left-[20px] text-white text-[14px] lg:text-[16px] font-medium">  Mountain Section </div>
                    </div>

                    
                </div>


            </div>

            <div className="w-full h-[30px] md:h-[40px] lg:h-[50px] flex items-center justify-center text-[12px] md:text-[14px] lg:text-[16px] font-light bg-[#F3F1EE] mt-[40px] rounded-[5px] lg:rounded-[10px]">Load More </div>
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
  );
}
