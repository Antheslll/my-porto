"use client";
import { InstagramIcon, LinkedInIcon, WhatsappIcon } from "@/svg/contact-icon";
import Link from "next/link";
import Image from "next/image";
import { FooterNavList } from "@/components/navbar/navbar-element/navbar-list";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const FooterPotrait = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  const listofNavbar = [
    { nav: "Home", link: "/" },
    { nav: "My Service", link: "/service" },
    { nav: "About Me", link: "/about" },
    { nav: "My Project", link: "/project" },
    { nav: "Contact", link: "/contact" },
  ];

  // const listofContact = [
  //   {
  //     icon: <WhatsappIcon />,
  //     link: "https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda.",
  //     text: "+62 811 1167 867",
  //   },
  //   {
  //     icon: <InstagramIcon />,
  //     link: "https://www.instagram.com/anthonylog.id?igsh=MWRjYzBrZnFxYW8yZg==",
  //     text: "@anthonylog.id",
  //   },
  //   {
  //     icon: <LinkedInIcon />,
  //     link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  //     text: "Anthony Liem",
  //   },
  // ];

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <div className="w-full md:h-[100vh] bg-[#F3F4F6] flex flex-col md:gap-y-[6vh] pt-[2vh]">
        <div className=" flex-centered flex-col pt-[1vh] ">
          <h2 className="montserrat-font font-bold text-[3vw]">
            Anthony&apos;s Portfolio
          </h2>
          <span className="inter-font text-[1.5vw] text-[#6B7280]">
            Frontend Developer & UI Enthusiast
          </span>
        </div>
        <ul className="w-full flex-centered flex-row gap-[5vw] ">
          {listofNavbar.map((nav) => (
            <FooterNavList
              key={nav.nav}
              nav={nav.nav || ""}
              link={nav.link || ""}
            />
          ))}
        </ul>
        <ul className="flex-centered flex-row gap-[5vw]">
          <li className="scale-[50%]">
            <Link href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda.">
              <WhatsappIcon />
            </Link>
          </li>
          <li className="scale-[50%]">
            <Link href="https://www.instagram.com/anthonylog.id?igsh=MWRjYzBrZnFxYW8yZg==">
              <InstagramIcon />
            </Link>
          </li>
          <li className="scale-[50%]">
            <Link href="https://www.linkedin.com/in/anthonyliemm">
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
        <div className="flex-centered">
          <Link
            target="_blank"
            href="https://www.instagram.com/tavralabs?igsh=MXBtbzkwa2dqMDA2cg=="
            className="text-[2.2vw] text-[#3B82F6] underline inter-font"
          >
            Lihat apa yang kami bangun di Tavra
          </Link>
        </div>
        <div className="flex-centered gap-[5vw]">
          <Image
            src="/assets/TAVRA LOGO.png"
            alt="logo perusahaan tavra"
            className="w-[10%] rounded-full"
            width={1024}
            height={1024}
          />
          <Image
            src="/assets/TAVRA LOGO B.png"
            alt="logo perusahaan tavra"
            className="w-[10%] rounded-full"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex-centered">
          <span className="underline inter-font text-[1.5vw]">
            © 2025 Anthony. All rights reserved.
          </span>
        </div>
      </div>
    );
  } else if (width > 640 && width < 768 && orientation === "portrait") {
    return (
      <div className="w-full sm:h-[45vh] bg-[#F3F4F6] flex flex-col sm:gap-y-[3vh] pt-[2vh]">
        <div className=" flex-centered flex-col pt-[1vh] ">
          <h2 className="montserrat-font font-bold text-[3vw]">
            Anthony&apos;s Portfolio
          </h2>
          <span className="inter-font text-[1.5vw] text-[#6B7280]">
            Frontend Developer & UI Enthusiast
          </span>
        </div>
        <ul className="w-full flex-centered flex-row gap-[5vw] ">
          {listofNavbar.map((nav) => (
            <FooterNavList
              key={nav.nav}
              nav={nav.nav || ""}
              link={nav.link || ""}
            />
          ))}
        </ul>
        <ul className="flex-centered flex-row gap-[5vw]">
          <li className="scale-[50%]">
            <Link href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda.">
              <WhatsappIcon />
            </Link>
          </li>
          <li className="scale-[50%]">
            <Link href="https://www.instagram.com/anthonylog.id?igsh=MWRjYzBrZnFxYW8yZg==">
              <InstagramIcon />
            </Link>
          </li>
          <li className="scale-[50%]">
            <Link href="https://www.linkedin.com/in/anthonyliemm">
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
        <div className="flex-centered">
          <Link
            target="_blank"
            href="https://www.instagram.com/tavralabs?igsh=MXBtbzkwa2dqMDA2cg=="
            className="text-[2.2vw] text-[#3B82F6] underline inter-font"
          >
            Lihat apa yang kami bangun di Tavra
          </Link>
        </div>
        <div className="flex-centered gap-[5vw]">
          <Image
            src="/assets/TAVRA LOGO.png"
            alt="logo perusahaan tavra"
            className="w-[10%] rounded-full"
            width={1024}
            height={1024}
          />
          <Image
            src="/assets/TAVRA LOGO B.png"
            alt="logo perusahaan tavra"
            className="w-[10%] rounded-full"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex-centered">
          <span className="underline inter-font text-[1.5vw]">
            © 2025 Anthony. All rights reserved.
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[40vh] sm:h-[100vh] md:h-[45vh] bg-[#F3F4F6] flex flex-col gap-y-[3vh] sm:gap-y-[5vh] md:gap-y-[3vh] pt-[2vh]">
        <div className=" flex-centered flex-col pt-[1vh] ">
          <h2 className="montserrat-font font-bold text-[3vw]">
            Anthony&apos;s Portfolio
          </h2>
          <span className="inter-font text-[1.5vw] text-[#6B7280]">
            Frontend Developer & UI Enthusiast
          </span>
        </div>
        <ul className="w-full flex-centered flex-row gap-[5vw] ">
          {listofNavbar.map((nav) => (
            <FooterNavList
              key={nav.nav}
              nav={nav.nav || ""}
              link={nav.link || ""}
            />
          ))}
        </ul>
        <ul className="flex-centered flex-row gap-[5vw]">
          <li className="scale-[50%]">
            <Link href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda.">
              <WhatsappIcon />
            </Link>
          </li>
          <li className="scale-[50%]">
            <Link href="https://www.instagram.com/anthonylog.id?igsh=MWRjYzBrZnFxYW8yZg==">
              <InstagramIcon />
            </Link>
          </li>
          <li className="scale-[50%]">
            <Link href="https://www.linkedin.com/in/anthonyliemm">
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
        <div className="flex-centered">
          <Link
            target="_blank"
            href="https://www.instagram.com/tavralabs?igsh=MXBtbzkwa2dqMDA2cg=="
            className="text-[2.2vw] text-[#3B82F6] underline inter-font"
          >
            Lihat apa yang kami bangun di Tavra
          </Link>
        </div>
        <div className="flex-centered gap-[5vw]">
          <Image
            src="/assets/TAVRA LOGO.png"
            alt="logo perusahaan tavra"
            className="w-[10%] rounded-full"
            width={1024}
            height={1024}
          />
          <Image
            src="/assets/TAVRA LOGO B.png"
            alt="logo perusahaan tavra"
            className="w-[10%] rounded-full"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex-centered">
          <span className="underline inter-font text-[1.5vw]">
            © 2025 Anthony. All rights reserved.
          </span>
        </div>
      </div>
    );
  }
};

export default FooterPotrait;
