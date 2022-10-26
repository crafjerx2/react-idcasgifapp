import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const IdcasGifApp = () => {
  
  const [categories, setCategories] = useState([]);

  return ( 
    <>
      <h2>Idcas Gift App</h2>
      <AddCategory setCategories={setCategories} />
  
      <ol>
        {
          categories.map( (category, i) => (
            <GifGrid
              key={i}
              category={category}
            />
          ))
        }
      </ol>
    </>
   );
}
 
export default IdcasGifApp;