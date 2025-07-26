import { useFetchArtistDetail } from "@/hooks";


export const getArtistDetailById = (id) => {
  return useFetchArtistDetail.find((audio) => audio.id === Number(id));
};
