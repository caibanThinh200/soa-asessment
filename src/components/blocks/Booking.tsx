"use client";

import { useState } from "react";
import CalendarComponent from "../ui/Calendar";
import CustomEditor from "../ui/Editor";
import { Paperclip, Sent } from "../ui/Icons";
import Input from "../ui/Input";
import Link from "next/link";
import Button from "../ui/Button";
import { Page } from "@/types/page";
import axios from "axios";
import { Event } from "react-big-calendar";

interface BookingProps {
  data: Page["bloc_2_2"];
}

const Booking: React.FC<BookingProps> = ({ data }) => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({});
  const [events, setEvents] = useState<Event[]>([]);
  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", e?.target?.files?.[0]);

    try {
      const data = (await axios.post("/api/upload", formData)) as {
        url: string;
      };

      if (data.url) {
        setPreviewUrl(data.url);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-main-orange divider text-center lg:w-1/2 mx-auto mb-10">
          <span>{data?.title}</span>
        </h2>
        <CalendarComponent events={events} updateEvents={setEvents} />
        <form className="flex flex-col gap-10">
          <div className="flex gap-5 flex-col md:flex-row items-start lg:items-center">
            <label className="text-brown-coffee lg:w-[10%]">
              {data?.btn_1?.[0]}:
            </label>
            <Input className="w-full" placeholder={data?.btn_1?.[1]} />
          </div>
          <div className="flex gap-5 flex-col md:flex-row items-start lg:items-center">
            <label className="text-brown-coffee lg:w-[10%]">
              {data?.btn_2?.[0]}:
            </label>
            <Input className="w-full" placeholder={data?.btn_2?.[1]} />
          </div>
          <div className="flex gap-5 flex-col md:flex-row ">
            <label className="text-brown-coffee lg:w-[10%]">
              {data?.btn_3}:
            </label>
            <CustomEditor />
          </div>
          <div className="flex gap-5 flex-col md:flex-row ">
            <label className="text-brown-coffee lg:w-[10%]">
              {data?.btn_4?.[0]}:
            </label>
            <div>
              <input
                onChange={handleUploadFile}
                type="file"
                id="file"
                className="sr-only"
              />
              <div className="flex items-center gap-2 flex-col lg:flex-row">
                <label
                  className="text-[#1E88F9] flex items-center gap-2 cursor-pointer"
                  htmlFor="file"
                >
                  <Paperclip />
                  {uploading ? "Loading" : `${data?.btn_4?.[1]}`}
                </label>
                <span className="text-spanish-gray">(*{data?.btn_4?.[2]})</span>
              </div>
              {previewUrl && (
                <Link
                  className="text-main-orange mt-10"
                  href={previewUrl}
                  target="_blank"
                >
                  {previewUrl}
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-5 flex-col md:flex-row">
            <Button variant="outline" className="px-10">
              {data?.btn_5}
            </Button>
            <Button variant="primary" className="px-10 flex items-center justify-center gap-2 text-center">
              {data?.btn_6} <Sent />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
