"use client";
import Link from "next/link";

interface PortofolioButtonProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  bgColor: string;
}

const PortofolioButton = ({
  icon,
  text,
  bgColor,
  link,
}: PortofolioButtonProps) => {
  return (
    <Link href={link} target="_blank">
      <button
        className={`${bgColor} cursor-pointer w-full h-[40px] sm:h-[50px] lg:h-[70px] rounded-[5px] grid grid-cols-[1.5fr_4fr]`}
      >
        <span className="w-full h-full flex-centered">{icon}</span>
        <span className="w-full h-full text-white text-[2.3vw] lg:text-[1.7vw] xl:text-[1.5vw] flex items-center">
          {text}
        </span>
      </button>
    </Link>
  );
};

export default PortofolioButton;
