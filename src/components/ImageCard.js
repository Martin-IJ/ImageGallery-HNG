import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageCard = () => {
  const { filteredImages, errorMessage, setFilteredImages } =
    useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const _filteredImages = [...filteredImages];
      const draggedItemContent = _filteredImages.splice(dragItem.current, 1)[0];
      _filteredImages.splice(dragOverItem.current, 0, draggedItemContent);

      dragItem.current = null;
      dragOverItem.current = null;

      setFilteredImages(_filteredImages);
    }
  };

  return (
    <div className="px-4 my-5">
      <h1 className="text-3xl font-semibold uppercase tracking-wider">
        iCe Image Gallery
      </h1>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <Skeleton width={310} height={320} />
            </div>
          ))}
        </div>
      ) : filteredImages.length === 0 ? (
        <p className="m-auto mt-10 text-3xl">{errorMessage}</p>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
          onDragOver={(e) => e.preventDefault()}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="cursor-grab dragging"
              draggable
              onDragStart={(e) => (dragItem.current = index)}
              onDragEnter={(e) => (dragOverItem.current = index)}
              onDragEnd={handleSort}
            >
              <img
                src={image.image}
                alt="ImageCard"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
