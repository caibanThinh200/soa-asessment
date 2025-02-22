import dynamic from "next/dynamic";
import { getPageLang } from "@/lib/api/lang";
import Slider from "@/components/blocks/Slider";
import { Carousel } from "@/components/blocks/Carousel";
import Explore from "@/components/blocks/Explore";
import Content from "@/components/blocks/Content";

const Booking = dynamic(() => import("@/components/blocks/Booking"));
const Hero = dynamic(() => import("@/components/blocks/Hero"));
const Cards = dynamic(() => import("@/components/blocks/Cards"));
const Map = dynamic(() => import("@/components/blocks/Map"));

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageData = await getPageLang(locale as "en" | "fr");
  return (
    <main>
      <Hero data={pageData?.banner_title} />
      <Cards data={pageData?.bloc_1} />
      <Map mark={pageData?.carte_point} data={pageData?.bloc_2} />
      <Booking data={pageData?.bloc_2_2} />
      <Slider data={pageData?.bloc_3} />
      <Carousel data={pageData?.bloc_4} />
      <Explore data={pageData?.bloc_5} />
      <Content data={pageData?.bloc_6} />
    </main>
  );
}
