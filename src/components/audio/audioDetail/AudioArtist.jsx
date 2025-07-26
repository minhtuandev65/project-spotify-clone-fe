import { Typography, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentMusic } from "@/store/slice/musicSlice";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
const { Text } = Typography;

function AudioArtist({ album }) {
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <div className="w-1/12">
          <Text className="text-gray-500 text-[12px] custom-span sm:text-[16px]">
            #
          </Text>
        </div>
        <div className="w-4/12">
          <Text className="text-gray-500 text-[12px] custom-span sm:text-[16px]">
            Name
          </Text>
        </div>
        <div className="w-3/12">
          <Text className="text-gray-500 text-[12px] custom-span sm:text-[16px]">
            Album
          </Text>
        </div>
        <div className="w-2/12">
          <Text className="text-gray-500 text-[12px] custom-span sm:text-[16px]">
            Dated
          </Text>
        </div>
        <div className="w-2/12 text-center">
          <Text className="text-gray-500 text-[12px] custom-span sm:text-[16px]">
            Play
          </Text>
        </div>
        <div className="w-2/12 text-center">
          <Text className="text-gray-500 text-[12px] custom-span sm:text-[16px]">
            Install
          </Text>
        </div>
      </div>

      {/* Content */}
      {album?.map((item, index) => (
        <div key={item.id} className="custom-artist-main">
          <div className="w-1/12">
            <Text className="text-gray-700">{index + 1}</Text>
          </div>

          {/* Name + Thumbnail */}
          <div className="w-4/12 flex items-center gap-3">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-10 h-10 object-cover rounded-md sm:w-12 sm:h-12"
            />
            <Text className="text-gray-800 font-medium custom-span text-[12px] sm:text-[16px]">
              {item.name}
            </Text>
          </div>

          {/* Album */}
          <div className="w-3/12 min-w-0">
            <Text className="text-gray-600 truncate overflow-hidden whitespace-nowrap custom-span text-[10px] sm:text-[16px]">
              {item.albumName}
            </Text>
          </div>

          {/* Dated add */}
          <div className="w-2/12">
            <Text className="text-gray-600 custom-span text-[10px] sm:text-[16px]">
              {item.datedAt}
            </Text>
          </div>
          {/* Play */}
          <div className="w-2/12 text-center">
            <Button
              type="text"
              icon={<PlayCircleOutlined style={{ fontSize: "20px" }} />}
              onClick={() => dispatch(setCurrentMusic(item))}
              className="icon"
            />
          </div>
          {/* Install */}
          <div className="w-2/12 text-center">
            <Button
              type="text"
              icon={<ArrowCircleDownOutlinedIcon className="icon" />}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AudioArtist;
