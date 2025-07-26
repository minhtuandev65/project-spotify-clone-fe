export const formatTime = (time) => {
  const mins = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};
