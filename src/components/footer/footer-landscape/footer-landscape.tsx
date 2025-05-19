import { FooterNavList } from "@/components/navbar/navbar-element/navbar-list";
import { InstagramIcon, LinkedInIcon, WhatsappIcon } from "@/svg/contact-icon";
import ContactList from "./element/contact-list";
import Link from "next/link";
import Image from "next/image";

const FooterLandscape = () => {
  const listofNavbar = [
    { nav: "Home", link: "/" },
    { nav: "My Service", link: "/service" },
    { nav: "About Me", link: "/about" },
    { nav: "My Project", link: "/project" },
    { nav: "Contact", link: "/contact" },
  ];

  const listofContact = [
    {
      icon: <WhatsappIcon />,
      link: "https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda.",
      text: "+62 811 1167 867",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/anthonylog.id?igsh=MWRjYzBrZnFxYW8yZg==",
      text: "@anthonylog.id",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/anthonyliemm",
      text: "Anthony Liem",
    },
  ];
  return (
    <footer className="bg-[#F3F4F6]">
      <div className="w-full h-[10vh]">
        <div className=" flex-centered flex-col pt-[1vh] ">
          <h2 className="montserrat-font font-bold text-[2vw]">
            Anthony&apos;s Portfolio
          </h2>
          <span className="inter-font text-[1vw] text-[#6B7280]">
            Frontend Developer & UI Enthusiast
          </span>
        </div>
      </div>
      <div className="w-full h-[40vh] grid grid-cols-3">
        <div className="w-full border-r-6 border-white pl-[5vw] pt-[5vh]">
          <ul className="w-full flex justify-center flex-col gap-y-[2vh]">
            {listofNavbar.map((nav) => (
              <FooterNavList
                key={nav.nav}
                nav={nav.nav || ""}
                link={nav.link || ""}
              />
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col items-center pt-[3vh] gap-y-[5vh]">
          <h5 className="poppins-font font-semibold text-[1vw]">
            Hubungi Saya via:
          </h5>
          <ul className="w-[50%] flex flex-col gap-y-[2vh]">
            {listofContact.map((contact) => (
              <ContactList
                key={contact.text}
                icon={contact.icon}
                text={contact.text}
                link={contact.link}
              />
            ))}
          </ul>
        </div>
        <div className="w-full border-l-6 border-white pt-[5vh] flex items-center flex-col gap-y-[5vh]">
          <div className="flex-centered">
            <Link
              target="_blank"
              href="https://www.instagram.com/tavralabs?igsh=MXBtbzkwa2dqMDA2cg=="
              className="text-[1vw] text-[#3B82F6] underline inter-font"
            >
              Lihat apa yang kami bangun di Tavra
            </Link>
          </div>
          <div className="flex-centered gap-[1vw]">
            <Image
              src="/assets/TAVRA LOGO.png"
              alt="logo perusahaan tavra"
              className="w-[20%] rounded-full"
              width={1024}
              height={1024}
            />
            <Image
              src="/assets/TAVRA LOGO B.png"
              alt="logo perusahaan tavra"
              className="w-[20%] rounded-full"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLandscape;
