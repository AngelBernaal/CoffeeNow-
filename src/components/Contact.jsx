import '../main.css'

export default function Contact(){
    return(
        <>
        <section className="content__product">
        <p className="main__product">Contacto.</p>
        <h1 className="main__section">Contactanos<span>.</span></h1>

        <div className="contact">
            <div className="logo__contact">
                <h1>CoffeeNow<span>!</span></h1>
            </div>

            <nav className='menu__contact'>
                <a href="#inicio">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#ubicacion">Ubicación</a>
            </nav>

            <nav className='menu__contact'>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Telefono</a>
                <a href="">Mail</a>
            </nav>
        </div>
        
        </section>
        </>
    )
}