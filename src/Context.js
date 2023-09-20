import React, { useContext, useCallback, useState, useEffect } from "react";
import imageDb from "./components/ImageDb";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [imageLayout] = useState(imageDb);
  const [filteredImages, setFilteredImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value.trim()); 
  };

  useEffect(() => {
    const lowercaseSearchInput = searchInput.toLowerCase();
    const newFilteredImages = imageLayout.filter((image) =>
      image.tags.some((tag) => tag.toLowerCase().includes(lowercaseSearchInput))
    );
    
    if (newFilteredImages.length === 0) {
      setErrorMessage("No search results found"); 
    } else {
      setErrorMessage("");
    }

    setFilteredImages(newFilteredImages);
  }, [searchInput, imageLayout]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        images,
        onDrop,
        handleSearchInputChange,
        searchInput,
        filteredImages,
        errorMessage,
        setFilteredImages
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
