import {  Row, Typography } from "antd";
import React from "react";
import { useOutletContext, useParams } from "react-router";
import { RenderCardAudio } from "@/components";
import ArtistCard from "@/components/artist/artistCard/ArtistCard";

const { Title } = Typography;

function AudioCard() {
  const { fetchAudio, fetchArtist } = useOutletContext();
  const { types } = useParams();
  const lowerTypes = types?.toLowerCase();
  const filteredAudio = (() => {
    if (!types) return fetchAudio;

    if (lowerTypes === "trend") {
      return fetchAudio.filter((audio) => audio.trend === true);
    }

    if (lowerTypes === "popular") {
      return fetchAudio.filter((audio) => audio.popular === true);
    }
    if (lowerTypes === "like") {
      return fetchAudio.filter((audio) => audio.likeSong === true);
    }
    if (lowerTypes === "artist") {
      return [];
    }

    if (lowerTypes === "international") {
      const grouped = {};
      fetchAudio.forEach((audio) => {
        const cat = audio.categories || "Unknown";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(audio);
      });
      return grouped;
    }
    return fetchAudio;
  })();

  return (
    <div className="p-6">
      <div>
        <Title>
          {types ? (
            types.charAt(0).toUpperCase() + types.slice(1)
          ) : (
            <span>
              New <span className="text-red-600">Music</span>
            </span>
          )}
        </Title>
      </div>

      {lowerTypes === "artist" ? (
        <ArtistCard fetchArtist={fetchArtist} />
      ) : lowerTypes === "international" ? (
        Object.entries(filteredAudio).map(([category, audios]) => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className="sm:hidden overflow-x-auto">
              <div className="flex gap-4 w-max px-2">
                {audios.map((audio) => (
                  <div key={audio.id} className="min-w-[250px]">
                    {RenderCardAudio(audio)}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:block">
              <Row gutter={[24, 24]}>
                {audios.map((audio) => RenderCardAudio(audio))}
              </Row>
            </div>
          </div>
        ))
      ) : (
        <Row gutter={[24, 24]}>
          {filteredAudio.map((audio) => RenderCardAudio(audio))}
        </Row>
      )}
    </div>
  );
}

export default AudioCard;
