import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Videos = () => {
  const videos = useQuery(['videos'], () => {
      return axios
      .get('/video/popular.json')
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => console.log(err));
    }
  );

  console.log(videos);
   
  return (
    <ul>
      {videos.map(video => {
        return (
          <VideoCard key={video.id} info={video} />
        )
      })}
    </ul>
  );
}

export default Videos;