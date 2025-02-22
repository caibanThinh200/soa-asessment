"use client";

import { Page } from "@/types/page";
import Button from "../ui/Button";
import Image from "next/image";
import { Aim, Mountain, PinMountain, Whale } from "../ui/Icons";
import * as React from "react";
import MapBox, { Marker } from "react-map-gl/mapbox";

interface MapProps {
  data: Page["bloc_2"];
  mark: Page["carte_point"];
}

const Map: React.FC<MapProps> = ({ data, mark }) => {
  const [activities, setActivities] = React.useState<string[]>(data?.cases);

  const icons = [<Mountain />, <Whale />, <Aim />];

  React.useEffect(() => {
    setActivities(data?.cases);
  }, [data?.cases]);

  return (
    <div className="bg-floral-white relative">
      <div className="absolute w-full h-full inset-0 opacity-[0.03]">
        <Image
          src="/images/mountain.png"
          fill
          alt="map"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto lg:py-20 py-10 relative z-10">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-main-orange divider text-center w-full">
            <span>{data?.title}</span>
          </h2>
          <div className="flex justify-center flex-wrap gap-5 items-center">
            {activities.map((caseItem, idx) => (
              <Button
                variant="outline"
                className="bg-lotion border-main-orange/50 font-medium flex gap-2 items-center"
                key={caseItem}
              >
                {icons[idx]}
                <span>{caseItem}</span>
              </Button>
            ))}
          </div>
          <MapBox
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
              // longitude: 47.23965,
              // latitude: -69.6816,
              latitude: 47.4157316,
              longitude: -70.7700311,
              zoom: 6,
            }}
            style={{ width: "100%", height: 500, borderRadius: 20 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {mark?.map((item, idx) => (
              <Marker
                key={idx}
                className="z-[100]"
                onClick={() => {
                  setActivities(item?.activities);
                }}
                latitude={parseInt(item?.coordinates?.latitude as string) || 0}
                longitude={parseInt(item?.coordinates?.longitude || "") || 0}
              >
                <button
                  onClick={() => {
                    setActivities(item?.activities);
                  }}
                >
                  <PinMountain />
                </button>
              </Marker>
            ))}
          </MapBox>
        </div>
      </div>
    </div>
  );
};

export default Map;
