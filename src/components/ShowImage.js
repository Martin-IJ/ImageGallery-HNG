import React from 'react'
import Image from './Image';
import { useGlobalContext } from '../Context';

const ShowImage = () => {
    const { images } = useGlobalContext();

    const show = (image) => {
        return <Image image={image} />;
      };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        {images.map(show)}
    </div>
  )
}

export default ShowImage