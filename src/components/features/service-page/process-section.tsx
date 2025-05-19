"use client";

import CTAButton from "@/components/button/cta-header-button";
import ProcedureList from "./elements/procedure-list";
import useScreenSize from "@/hook/useScreenSize";
import Image from "next/image";
import useScreenOrientation from "@/hook/useScreenOrientation";

const ProcessSection = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();
  const procedure = [
    {
      no: 1,
      headings: "Hubungi Kami",
      text: "Hubungi kami di 08111167867 untuk mulai mendiskusikan kebutuhan website atau konsultasi Anda.",
    },
    {
      no: 2,
      headings: "Konsultasi",
      text: "Setelah terhubung, kami akan mendengarkan kebutuhan Anda, memberi arahan awal, dan membantu menyusun strategi yang tepat untuk proyek Anda.",
    },
    {
      no: 3,
      headings: "Perencanaan & Rancangan Awal",
      text: "Di tahap ini, kami menyusun strategi yang sesuai dengan tujuan Anda dan merancang tampilan awal (prototype) sebagai gambaran awal solusi yang akan dibangun.",
    },
    {
      no: 4,
      headings: "Pengembangan Website",
      text: "Kami mulai membangun website sesuai desain dan rencana yang disetujui. Tanpa feedback lanjutan, kami langsung lanjut ke tahap pengembangan penuh untuk memastikan proyek selesai tepat waktu.",
    },
    {
      no: 5,
      headings: "Penyerahan Website & Support Document",
      text: "Setelah pengembangan selesai, kami serahkan website siap pakai dengan semua fitur berjalan baik. Dukungan tambahan akan dijelaskan saat konsultasi untuk disesuaikan dengan audiens Anda.",
    },
    {
      no: 6,
      headings: "Jaminan Kualitas",
      text: "Setelah peluncuran, kami memberikan garansi selama 1 bulan untuk memastikan website berjalan secara optimal. Ketentuan garansi akan dijelaskan lebih lanjut dalam sesi konsultasi.",
    },
  ];
  if (width < 1024 && orientation === "portrait") {
    return (
      <main className="w-full h-[130vh] sm:h-[150vh] md:h-[150vh] grid grid-rows-[20vh_70vh_30vh] sm:grid-rows-[30vh_70vh_40vh] md:grid-rows-[30vh_70vh_40vh]">
        <div className="w-full flex justify-center items-end ">
          <div className="w-[90%] flex-centered flex-col gap-y-[2vh]">
            <div className=" w-[30%] h-[25px] sm:h-[40px] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex-centered">
              <h4 className="poppins-font font-semibold text-[2.2vw]">
                PROSES KAMI
              </h4>
            </div>
            <h2 className="poppins-font font-semibold text-center text-[5vw]">
              <span className="text-[#3B82F6] ">Tahapan</span> Layanan Kami
            </h2>
            <h4 className="inter-font text-center text-[2.5vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
              Kami mengikuti alur kerja yang terstruktur untuk memastikan hasil
              terbaik di setiap proyek.
            </h4>
          </div>
        </div>
        <div className="w-full h-full pt-[3vh] sm:pt-[8vh] md:pt-[8vh]">
          <ol className="flex flex-col flex-centered gap-y-[3vh] sm:gap-y-[3vh] md:gap-y-[3vh] ">
            {procedure.map((procedure) => (
              <ProcedureList
                key={procedure.no}
                no={procedure.no}
                headings={procedure.headings}
                text={procedure.text}
              />
            ))}
          </ol>
        </div>
        <div className="flex-centered ">
          <CTAButton
            width="w-[160px] sm:w-[250px]"
            height="h-[35px] sm:h-[60px]"
            textSize="text-[10px] sm:text-[18px]"
            text="Hubungi Kami Sekarang!"
            link="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
          />
        </div>
      </main>
    );
  } else if (width >= 1024) {
    return (
      <main className="h-[140vh] grid grid-cols-[45%_55%]">
        <div className="flex flex-col pt-[25vh] lg:gap-y-[2vh] lg:pl-[15%]">
          <div>
            <div className=" lg:w-[30%] h-[30px]  shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex-centered">
              <h4 className="poppins-font font-semibold lg:text-[1vw]">
                PROSES KAMI
              </h4>
            </div>
            <h2 className="poppins-font font-semibold text-[4vw]">
              <span className="text-[#3B82F6] ">Tahapan</span> <br />
              Layanan Kami
            </h2>
          </div>
          <h4 className="inter-font text-[1.5vw]">
            Kami mengikuti alur kerja yang terstruktur untuk memastikan hasil
            terbaik di setiap proyek.
          </h4>
          <div className="lg:mt-[3vh]">
            <CTAButton
              width="w-[160px] sm:w-[250px] lg:w-[200px]"
              height="h-[35px] sm:h-[60px] lg:h-[50px]"
              textSize="text-[10px] sm:text-[18px] lg:text-[15px]"
              text="Hubungi Kami Sekarang!"
              link="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
            />
          </div>
          <div>
            <Image
              src="/assets/sop-avatar.png"
              alt="my-avatar"
              className="lg:w-[50%] object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="lg:pt-[22vh]">
          <ol className="flex flex-col flex-centered gap-y-[3vh] sm:gap-y-[28vh] md:gap-y-[3vh] lg:gap-y-[5vh] xl:gap-y-[7vh] ">
            {procedure.map((procedure) => (
              <ProcedureList
                key={procedure.no}
                no={procedure.no}
                headings={procedure.headings}
                text={procedure.text}
              />
            ))}
          </ol>
        </div>
      </main>
    );
  } else if (width < 1024 && orientation === "landscape") {
    return (
      <main className="w-full h-[130vh] sm:h-[430vh] md:h-[400vh] grid sm:grid-rows-[90vh_250vh_30vh] md:grid-rows-[80vh_210vh_40vh]">
        <div className="w-full flex justify-center items-end ">
          <div className="w-[90%] flex-centered flex-col gap-y-[2vh]">
            <div className=" w-[30%] h-[25px] sm:h-[40px] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex-centered">
              <h4 className="poppins-font font-semibold text-[2.2vw]">
                PROSES KAMI
              </h4>
            </div>
            <h2 className="poppins-font font-semibold text-center text-[5vw]">
              <span className="text-[#3B82F6] ">Tahapan</span> Layanan Kami
            </h2>
            <h4 className="inter-font text-center text-[2.5vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
              Kami mengikuti alur kerja yang terstruktur untuk memastikan hasil
              terbaik di setiap proyek.
            </h4>
          </div>
        </div>
        <div className="w-full h-full pt-[3vh] sm:pt-[20vh] md:pt-[8vh]">
          <ol className="flex flex-col flex-centered gap-y-[3vh] sm:gap-y-[28vh] md:gap-y-[25vh] ">
            {procedure.map((procedure) => (
              <ProcedureList
                key={procedure.no}
                no={procedure.no}
                headings={procedure.headings}
                text={procedure.text}
              />
            ))}
          </ol>
        </div>
        <div className="flex-centered ">
          <CTAButton
            width="w-[160px] sm:w-[250px]"
            height="h-[35px] sm:h-[60px]"
            textSize="text-[10px] sm:text-[18px]"
            text="Hubungi Kami Sekarang!"
            link="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
          />
        </div>
      </main>
    );
  }
};

export default ProcessSection;
