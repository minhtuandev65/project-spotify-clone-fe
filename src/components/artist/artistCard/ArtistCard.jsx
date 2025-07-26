import React from "react";
import { Link } from "react-router-dom";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

function ArtistCard({ fetchArtist = [] }) {
  return (
    <div className="p-4">
      {/* Scroll ngang mobile */}
      <div className="block lg:hidden overflow-x-auto">
        <div className="flex space-x-4 w-max">
          {fetchArtist.map((artist) => (
            <Link className="!no-underline" to={`/artist/${artist.id}/detail`}>
              <div
                key={artist.id}
                className="min-w-[200px] bg-white rounded-xl shadow-md p-4 flex-shrink-0"
              >
                <img
                  src={artist.thumbnail}
                  alt={artist.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
                <p className="text-center mt-2 font-semibold text-black">
                  {artist.name}
                  <CheckCircleOutlineRoundedIcon className="ml-[1px] !text-[16px] text-blue-400" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Grid desktop */}
      <div className="hidden lg:grid grid-cols-4 gap-4 mt-4">
        {fetchArtist.map((artist) => (
          <Link className="!no-underline" to={`/artist/${artist.id}/detail`}>
            <div
              key={artist.id}
              className="bg-white rounded-xl shadow-md p-4 custom_card"
            >
              <img
                src={artist.thumbnail}
                alt={artist.name}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <p className="text-center mt-2 font-semibold">
                {artist.name}{" "}
                <CheckCircleOutlineRoundedIcon className="ml-[1px] !text-[16px] text-blue-400" />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtistCard;
