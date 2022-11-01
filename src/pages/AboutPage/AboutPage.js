

const AboutPage = () => {
    return (
        <div>
            <center>
                <hr />
                <h1>Sobre Nosotros</h1>
                <hr />
                <div className="card" style={{"height" : "100%", "width" : "50%"}}>
                <p className="card-text">
                    Somos una tienda dedicada el rubro de sushi y delivery, nos caracterizamos por nuestro sabor unico y especial
                    materia prima de calidad y la elavoración personalizada a los clientes.
                    Nos ubicamos en la comuna de maipú, nuestro local permite consumo al interior y para pedir delivery de manera
                    presencial. 
                </p>
                </div>
                <p>
                    <img className="img" src="cocinero.jpg" alt=""></img>
                </p>
            </center>
        </div>
    )
}

export default AboutPage;