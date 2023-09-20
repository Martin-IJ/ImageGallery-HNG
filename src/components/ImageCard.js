import React, {useState, useEffect} from "react";
import { useGlobalContext } from "../Context";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ImageCard = () => {
  const { filteredImages, errorMessage, setFilteredImages } =
    useGlobalContext();
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedimages = [...filteredImages];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedImages] = reorderedimages.splice(sourceIndex, 1);
      reorderedimages.splice(destinationIndex, 0, removedImages);

      return setFilteredImages(reorderedimages);
    }
  };

  return (
    <div className="px-4 my-5">
      <DragDropContext onDragEnd={handleDragDrop}>
        <h1 className="text-3xl font-semibold uppercase tracking-wider">
          iCe Image Gallery
        </h1>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {filteredImages.map((image, index) => (
                    <Draggable
                      draggableId={image.id.toString()}
                      index={index}
                      key={image.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={snapshot.isDragging ? "dragging" : ""}
                        >
                          <img
                            src={image.image}
                            alt="ImageCard"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ImageCard;
