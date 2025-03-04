import { Page } from "@/types/page";
import Image from "next/image";

interface HeroProps {
  data: Page["banner_title"];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const icons = ["/svg/mountain.svg", "/svg/whale.svg", "/svg/aim.svg"];
  return (
    <div className="relative 2xl:h-[1080px] h-[700px]">
      <div className="absolute w-full h-full inset-0">
        <video
          controls={false}
          autoPlay={true}
          loop
          className="w-full h-full object-cover"
          muted
          poster="/images/hero-poster.png"
          playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute lg:bottom-10 lg:right-20 bottom-5 right-5 z-20">
        <button className="bg-main-orange p-3 flex items-center justify-center lg:size-[56px] size-[40px] rounded-full">
          <Image src="/svg/chat.svg" width={32} height={32} alt="chat" />
        </button>
      </div>
      <div className="relative z-10 h-full w-full lg:p-20 p-10 pb-16 bg-gradient-to-t from-[rgba(0,0,0,0.30)_14.5%] to-[rgba(0,0,0,0.00)_27%]">
        <div className="flex flex-col justify-end size-full">
          <div className="flex justify-around items-center">
            {data?.map((item, index) => (
              <div key={item} className="flex flex-col gap-2 items-center">
                <Image
                  src={icons[index]}
                  width={28}
                  height={28}
                  alt="mountain"
                />
                <p className="text-white text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
