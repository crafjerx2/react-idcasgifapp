import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const {data, loading} = useFetchGifs(category);

  return ( 
    <>
      <h2 className="animate__animated animate__backInLeft">{ category }</h2>

      { loading && <div className="loading-wrap"><img className="loading"  src="./loading.gif" alt="loading"/></div> }
     
      <div className="grid-card">
        {
          data.map( img => (
            <GifGridItem 
            key={img.id}
            {...img }
            />
            ))
          }
      </div>
    </>
   );
}
 
export default GifGrid;