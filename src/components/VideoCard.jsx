const VideoCard = ({ info }) => {
  const {title, channelTitle, publishedAt} = info.snippet;
  const {medium} = info.snippet.thumbnails;

  return (
    <li key={info.id} className='p-2 overflow-x-hidden'>
      <img src={medium.url} alt={title} />
      <p>{title}</p>
      <p>{channelTitle}</p>
      <p>{publishedAt}</p>
    </li>
  )
}

export default VideoCard;