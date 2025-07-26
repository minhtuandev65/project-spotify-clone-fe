import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Slider } from "antd";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  SoundOutlined,
  ExpandOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import { formatTime } from "@/constants";
import { CloseOutlined } from "@ant-design/icons";

function AudioPlayer() {
  const audioRef = useRef(null);
  const { currentMusic } = useSelector((state) => state.music);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlayer, setShowPlayer] = useState(true);
  useEffect(() => {
    if (audioRef.current && currentMusic?.music) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
      setShowPlayer(true);
    }
  }, [currentMusic]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const toggleExpand = () => {
    setIsExpanded(true);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };
  const handleClosePlayer = () => {
    audioRef.current?.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setIsExpanded(false);
    setShowPlayer(false);
  };

  if (!currentMusic) return null;

  const PlayerContent = (
    <div className="flex items-center gap-4 w-full relative">
      <button
        onClick={handleClosePlayer}
        className="absolute top-0 right-0 text-gray-500 hover:text-black text-lg"
        title="Close player"
      >
        <CloseOutlined />
      </button>
      <img
        src={currentMusic.thumbnail}
        alt={currentMusic.name || "thumbnail"}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{currentMusic.name}</h4>
        <p className="text-sm text-gray-500">{currentMusic?.user?.artist}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-500">
            {formatTime(currentTime)}
          </span>
          <Slider
            className="flex-1"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <span className="text-xs text-gray-500">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xl">
        <button onClick={togglePlay}>
          {isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        </button>
        <button onClick={toggleMute}>
          {isMuted ? <VolumeOffOutlinedIcon /> : <SoundOutlined />}
        </button>
        <button onClick={toggleRepeat} title="Repeat">
          <RedoOutlined style={{ color: isRepeat ? "#1890ff" : "#999" }} />
        </button>
        <button onClick={toggleExpand} title="Expand">
          <ExpandOutlined />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t-2">
          {PlayerContent}
        </div>
      )}

      <Modal
        open={isExpanded}
        onCancel={() => setIsExpanded(false)}
        footer={null}
        centered
        width={700}
        title={currentMusic.name}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <img
              src={currentMusic.thumbnail}
              alt={currentMusic.name || "thumbnail expanded"}
              className="w-48 h-48 object-cover rounded"
            />
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-semibold">{currentMusic.name}</h2>
              <p className="text-gray-500">
                Artist: {currentMusic?.user?.artist}
              </p>
              <Slider
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        className="hidden"
      >
        <source src={currentMusic.music} type="audio/mp3" />
      </audio>
    </>
  );
}

export default AudioPlayer;
