import '../main.css'
import Hero from './Hero'

export default function Header(){
    return(
        <>
        <section className="contenedor__main">
            <header className="encabezado">

            <div className="logo">
                <h1>CoffeeNow<span>!</span></h1>
            </div>

            <nav className='menu__main'>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Ubicación</a>
            </nav>

        </header>


        <Hero/>
        </section>
        </>
    )
}