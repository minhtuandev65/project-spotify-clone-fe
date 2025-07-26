import { setCurrentMusic } from "@/store/slice/musicSlice";
import { Avatar, Card, Col } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
function RenderCardAudio(audio) {
  const dispatch = useDispatch();
  return (
    <Col key={audio.id} xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        className="custom_card group relative"
        cover={
          <div className="relative">
            <img
              className="h-[200px] object-cover w-full"
              src={audio.thumbnail}
              alt={audio.name}
            />
            <button
              onClick={() => dispatch(setCurrentMusic(audio))}
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                   w-[80px] h-[80px] rounded-full bg-black bg-opacity-30 
                   hover:bg-opacity-50 transition duration-300 
                   opacity-0 group-hover:opacity-100 flex items-center justify-center"
            >
              <PlayCircleFilledWhiteIcon className="text-red-500 !text-[80px]" />
            </button>
          </div>
        }
      >
        <Link to={`/music/${audio.id}/detail`} className="!no-underline">
          <div className="flex gap-3 mt-2">
            <Avatar
              size="large"
              src={
                audio.avatar ||
                "https://tse4.mm.bing.net/th/id/OIP.kQyrx9VbuWXWxCVxoreXOgHaHN?pid=Api&P=0&h=180"
              }
              alt=""
            />
            <div className="flex flex-col justify-between">
              <p className="font-semibold">{audio.name}</p>
              <div className="flex items-center gap-1">
                <p className="text-gray-500 text-sm">
                  {audio?.user?.artist}{" "}
                  <CheckCircleOutlineRoundedIcon className="!w-[16px] text-blue-500" />
                </p>
                <p className="text-gray-400 text-xs">
                  {audio.listener} Listener
                </p>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </Col>
  );
}

export default RenderCardAudio;
