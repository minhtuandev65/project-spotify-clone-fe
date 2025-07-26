import { Avatar, Card, Typography } from "antd";
import React from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Link } from "react-router-dom";
import { setCurrentMusic } from "@/store/slice/musicSlice";
import { useDispatch } from "react-redux";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const { Title, Text } = Typography;
function MoreAudios({ fetchAudio, isHorizontal = false }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="pl-3 sm:pl-0 mb-2">
        <Title level={3} className="text-lg sm:text-2xl">
          Other Music
        </Title>
      </div>

      <div className={`${isHorizontal ? "flex gap-4 w-max pr-4" : "pr-2"}`}>
        {fetchAudio.map((audio) => (
          <div
            className={`${
              isHorizontal ? "min-w-[250px] max-w-[250px]" : "p-3 w-full"
            }`}
            key={audio.id}
          >
            <Link to={`/music/${audio.id}/detail`} className="!no-underline">
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
                <div className="flex gap-3 mt-2">
                  <Avatar
                    size="large"
                    src={
                      audio.avatar ||
                      "https://tse4.mm.bing.net/th/id/OIP.kQyrx9VbuWXWxCVxoreXOgHaHN?pid=Api&P=0&h=180"
                    }
                  />
                  <div className="flex flex-col justify-between">
                    <Text className="font-semibold truncate">{audio.name}</Text>
                    <div className="flex items-center gap-1">
                      <Text className="text-gray-500 text-sm truncate">
                        {audio?.user?.fullName}{" "}
                        <CheckCircleOutlineRoundedIcon className="!w-[16px] text-blue-400" />
                      </Text>
                      <Text className="text-gray-400 text-xs">
                        {audio.view} Views
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreAudios;
