import '../main.css'


export default function Card(){
    return(
        <>
        <section className="content__product">
        <p className="main__product">Encuentra las ultimas novedades.</p>
        <h1 className="main__section">Novedades<span>.</span></h1>

        <div className="content__main">
        <div className="info__content">
        <h2 className='space'>Nuevos productos.</h2>
        <p className='space'>Encuentra nuestros nuevos productos y disfruta de un espacio seguro y agradable.</p>
        <ul>
            <li>Precios accesibles</li>
            <li>Nuevos productos</li>
            <li>Espacios seguros</li>
            <li>Calidad producto</li>
        </ul>
        </div>
        <div className="image">
            <img src="/coffee.jpg" alt="coffee" />
        </div>
        </div>
        </section>
        </>
    )
}