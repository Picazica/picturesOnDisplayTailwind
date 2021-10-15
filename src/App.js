import React, { useState, useEffect } from "react";
import "./assets/main.css";
import ImageCard from "./components/ImageCard";
import Form from "./components/Form";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("welcome");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=23840670-d51c2f7323e4e5e18a6c197ba&q=${term}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setImages(data.hits);
      setIsLoading(false);
    };
    getData();
  }, [term]);

  return (
    <div className="container mx-auto">
      <Form search={setTerm} />
      <h2 className="font-bold text-center text-lg	">
        Images related to the word {term}
      </h2>
      <div className="grid justify-items-center grid-cols-3 gap-4 m-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          images.map(image => <ImageCard key={image.id} img={image} />)
        )}
      </div>
    </div>
  );
}

export default App;
