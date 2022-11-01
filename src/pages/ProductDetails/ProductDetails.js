import { useState } from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {

    const {_product_id} = useParams()
    const [product, setProduct] = useState([])
    const loadProductDetail = () =>{
        fetch(`http://localhost:3030/api/details/${_product_id}`)
        .then(response => response.json())
        .then(product => setProduct(product))
    }
    loadProductDetail()
    return (
        <main>
            <hr />
            <h1>Detalle de producto {product.title}</h1>
            <hr />
            <center>
            <img src={product.imageUrl} className="img" alt="" width='50%'></img>
            <hr />
            <h3>{product.description}</h3>
            <hr/>
            <h5>Precio: {product.length}</h5>
            </center>
            <hr />
            <a type='button' className="btn btn-primary" href="/productos">Volver</a>
            <a type='button' className="btn btn-success" href="/registro">Añadir al carrito</a>
            <p>{}</p>
        </main>
    )
}

export default ProductDetails;