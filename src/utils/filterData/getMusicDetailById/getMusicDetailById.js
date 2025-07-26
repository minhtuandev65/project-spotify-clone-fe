import { useFetchAudioDetail } from "@/hooks";

export const getMusicDetailById = (id) => {
  return useFetchAudioDetail.find((audio) => audio.id === Number(id));
};
