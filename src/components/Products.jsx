import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { product } from "./Product";

 export default function Products(){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const producto = product.map(prod => 
        <div className="card" key={prod.id}>
            <img src={prod.img} alt={prod.name} />
            <h2>{prod.name}</h2>
            <div className="info__general">
            <p className="rebaja">{prod.rebaja}</p>
            <p className="precio">{prod.precio}</p>
            <a href="#" className="enlace">Ver más</a>
            </div>
        </div>
        )
      
      return(
        
        <>
        <section className="content__product" id="productos">
        <p className="main__product">Tus postres favoritos.</p>
        <h1 className="main__section">Postres<span>.</span></h1>
        <Carousel className="slider" responsive={responsive}>
            {producto}
        </Carousel>
        </section>
        </>
      )


 }