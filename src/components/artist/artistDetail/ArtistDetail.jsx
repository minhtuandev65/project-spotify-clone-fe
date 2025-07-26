import { getArtistDetailById } from "@/utils/filterData";
import { Avatar, Button, Typography } from "antd";
import React from "react";
import { useParams } from "react-router";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useDispatch } from "react-redux";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import { PlayCircleOutlined } from "@ant-design/icons";
import { setCurrentMusic } from "@/store/slice/musicSlice";
const { Title, Text } = Typography;

function ArtistDetail() {
  const { id } = useParams();
  const data = getArtistDetailById(id);
  const dispatch = useDispatch();

  return (
    <div className="p-2 md:p-16 space-y-6">
      {/* Layout 1: Artist info */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-10 bg-gray-400 h-auto md:h-[400px] rounded-[30px] p-6 md:p-10">
        {/* Avatar */}
        <div>
          <Avatar
            src={data.avatar}
            className="mx-auto md:mx-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
        </div>

        {/* Info block */}
        <div className="flex flex-col items-center text-center gap-1">
          {data.verifyArtist && (
            <Text className="text-blue-500 font-semibold text-sm flex items-center justify-center">
              <CheckCircleOutlineRoundedIcon className="text-blue-400 mr-1" />
              Verified Artist
            </Text>
          )}

          <Title className="!mb-1 !mt-0 !text-[16px] md:!text-[28px]">
            {data.name}
          </Title>

          <div className="flex flex-col md:flex-row text-sm text-gray-700">
            <Text className="md:mr-4 !text-[14px] md:!text-[20px]">
              {data.followers} Followers
            </Text>
            <Text className="!text-[14px] md:!text-[20px]">
              {data.listeners} Listeners
            </Text>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {/* Nút Play - luôn hiển thị */}
        <button
          className="transform
               w-[80px] h-[80px] rounded-full bg-black bg-opacity-30 
               hover:bg-opacity-50 transition duration-300 
               flex items-center justify-center z-10"
        >
          <PlayCircleFilledWhiteIcon className="text-green-400 !text-[80px]" />
        </button>

        {/* Nút Follow */}
        <Button className="custom-button w-[100px] z-20">
          <AddCircleOutlineOutlinedIcon />
          Follow
        </Button>
      </div>

      <Title>Popular List</Title>
      {/* Popular list */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[768px]">
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
          {data.popularList
            .filter((item) => item.popular === true)
            .map((popular, index) => (
              <div key={popular.id} className="custom-artist-main">
                <div className="w-1/12">
                  <Text className="text-gray-700">{index + 1}</Text>
                </div>

                {/* Name + Thumbnail */}
                <div className="w-4/12 flex items-center gap-3">
                  <img
                    src={popular.thumbnail}
                    alt={popular.name}
                    className="w-10 h-10 object-cover rounded-md sm:w-12 sm:h-12"
                  />
                  <Text className="text-gray-800 font-medium custom-span text-[12px] sm:text-[16px]">
                    {popular.name}
                  </Text>
                </div>

                {/* Album */}
                <div className="w-3/12 min-w-0">
                  <Text className="text-gray-600 truncate overflow-hidden whitespace-nowrap custom-span text-[10px] sm:text-[16px]">
                    {popular.albumName}
                  </Text>
                </div>

                {/* Dated add */}
                <div className="w-2/12">
                  <Text className="text-gray-600 custom-span text-[10px] sm:text-[16px]">
                    {popular.datedAt}
                  </Text>
                </div>
                {/* Play */}
                <div className="w-2/12 text-center">
                  <Button
                    type="text"
                    icon={<PlayCircleOutlined style={{ fontSize: "20px" }} />}
                    onClick={() => dispatch(setCurrentMusic(popular))}
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
      </div>
    </div>
  );
}

export default ArtistDetail;
