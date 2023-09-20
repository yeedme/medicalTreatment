import React from 'react';

export default function Rvideo(props) {
    // 自动播放 进度条 视频源  样式
  const { autoPlay, controls, videoSrc, className } = props;

  return (
    <video autoPlay={autoPlay} controls={controls} className={className}>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
