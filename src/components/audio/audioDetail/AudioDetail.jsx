import { AudioArtist, MoreAudios } from "@/components";
import { getMusicDetailById } from "@/utils/filterData";
import { Avatar, Typography } from "antd";
import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Link } from "react-router-dom";
import { setCurrentMusic } from "@/store/slice/musicSlice";
import { useDispatch } from "react-redux";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
const { Title, Text } = Typography;

function AudioDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = getMusicDetailById(id);
  const { fetchAudio } = useOutletContext();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-5 p-10">
      {/* Left Column - 70% */}{" "}
      <div className="flex-[3] min-w-0">
        <div className="rounded-xl w-full relative group bg-white">
          <img
            src={data.thumbnail}
            alt={data.name}
            className="w-full object-contain rounded-xl max-h-[500px]"
          />
          <button
            onClick={() => dispatch(setCurrentMusic(data))}
            className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                   w-[80px] h-[80px] rounded-full bg-black bg-opacity-30 
                   hover:bg-opacity-50 transition duration-300 
                   opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <PlayCircleFilledWhiteIcon className="text-red-500 !text-[80px]" />
          </button>
        </div>

        <Title level={3} className="mt-4">
          {data.name}
        </Title>
        <div className="flex items-center justify-between w-full">
          {/* Bên trái: Avatar + Tên + Icon */}
          <div className="flex items-center gap-2">
            <Avatar
              size="large"
              src={
                data.avatar ||
                "https://tse4.mm.bing.net/th/id/OIP.kQyrx9VbuWXWxCVxoreXOgHaHN?pid=Api&P=0&h=180"
              }
            />
            <div className="flex flex-col justify-center">
              <Text className="text-gray-500 text-sm custom-span">
                {data.user.artist}
                <CheckCircleOutlineRoundedIcon className="!w-[16px] text-blue-400" />
              </Text>
            </div>
          </div>

          {/* Bên phải: Nút Link */}
          <div>
            <Link className="!no-underline">
              <AddCircleOutlineOutlinedIcon />
            </Link>
            <Link className="!no-underline">
              <ArrowCircleDownOutlinedIcon />
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-sm mt-2">
          <div className="flex items-center gap-2 mb-2">
            <Text className="font-bold text-xs">{data.listener} Listener</Text>
          </div>

          <div className="max-h-[250px]">
            <Text className="text-sm whitespace-pre-wrap">
              {showMore
                ? data.description
                : `${data.description.slice(0, 100)}...`}
            </Text>
            {data.description.length > 100 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-blue-500 text-sm mt-2 hover:underline block"
              >
                {showMore ? "View Less" : "View More"}
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-3 pr-4">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
              <ThumbUpOutlinedIcon />
              <Text className="custom-span">{data.like}</Text>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
              <ThumbDownAltOutlinedIcon />
              <Text className="custom-span">{data.disLike}</Text>
            </div>
          </div>
        </div>
        {/* Mobile scrollable version */}
        <div className="sm:hidden overflow-auto">
          <div className="flex gap-4 w-max px-2">
            <AudioArtist album={data?.album} isMobile />
          </div>
        </div>

        {/* Desktop grid version */}
        <div className="mt-5 border-t-2 hidden sm:block">
          <AudioArtist album={data?.album} isMobile={false} />
        </div>
      </div>
      {/* Right Column - 30% */}
      <div className="sm:hidden overflow-auto">
        <MoreAudios fetchAudio={fetchAudio} isHorizontal />
      </div>
      <div className="flex-[1] border-t-2 md:border-t-0 md:border-l-2 pl-4 hidden sm:block">
        <MoreAudios fetchAudio={fetchAudio} />
      </div>
    </div>
  );
}

export default AudioDetail;
