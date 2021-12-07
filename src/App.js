import React,{ useState , useEffect } from "react"
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";



function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading]=useState(true);
  const [term, setTerm] = useState("");


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=24698460-819fa8c8112c3ee592dadfb33&q=${term}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits)
      // console.log(data.hits)
      setIsLoading(false) 
    })
    .catch(err => console.log(err))
  },[term])

  
  return (
    <div className="container mx-auto ">
    <ImageSearch searchText={(text) => setTerm(text)} />

   {/* check for images loading */}

   {!isLoading && images.length === 0  && 
   <h1 className="text-center text-6xl mx-auto mt-32">No Images Found..</h1>
   }

   {isLoading ? <h1>Loading......</h1> : 
    <div className="grid grid-cols-3 gap-4 ">
      {images.map(image => (
        <ImageCard key={image.id} imageData = {image} />
      ))}
      
    </div>
    }

    
    </div>
  );
}

export default App;

