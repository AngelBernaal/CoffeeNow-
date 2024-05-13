import '../main.css'

export default function Ubicacion(){
    return(
        <>
        <section className="content__product" id='ubicacion'>
        <p className="main__product">Encuentranos.</p>
        <h1 className="main__section">Ubicación<span>.</span></h1>

        <div className="ubicacion" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0583539483796!2d-99.665515!3d19.2798284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89ba5a98b59f%3A0x49640dfa7ee5260c!2sFelipe%20Villanueva%20%26%20Calle%20General%20Venustiano%20Carranza%2020%20Poniente%2C%20Federal%2C%2050120%20Toluca%20de%20Lerdo%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1715563769481!5m2!1ses-419!2smx" loading="lazy"  referrerPolicy="noReferrer-when-downgrade"></iframe>
        </div>
        </section>
        </>
    )
}
