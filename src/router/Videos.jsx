import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

const Videos = () => {
  const {data: videos} = useQuery(
    ['videos'], async () => 
      axios
      .get('/videos/popular.json')
      .then(data => data.data.items)
  );

  console.log(videos);

  return (
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {videos?.map(video => {
        return (
          <VideoCard key={video.id} info={video} />
        )
      })}
    </ul>
  );
}

export default Videos;