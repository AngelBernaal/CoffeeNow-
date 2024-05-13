import '../main.css'

export default function Hero(){
    return(
        <>
        <section className="hero" id='inicio'>
            <div className="info__main">
            <p className="parrafo__main">Despierta tus sentidos con el café perfecto sin vaciar tu bolsillo. ¡Calidad y sabor que te harán bailar de alegría sin arruinar tu día!</p>
            <h1>DRINK COFFEE</h1>
            <h2>TIME<span>.</span></h2>
            </div>

            <div className="imagenes">
            <img src="/main.png" alt="logo" />
            <div className="imagenes__info"><p>20% OFF</p></div>
            </div>
        </section>
        </>
    )
}