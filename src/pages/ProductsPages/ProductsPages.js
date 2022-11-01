import { useState } from 'react';
import {Link} from 'react-router-dom';

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    const loadProducts = () =>{
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(allProducts => setProducts(allProducts))
    }

    loadProducts();

    return (
        <div>
            <center>
                <hr />
                <h1>Menú Fukusuke</h1>
            </center>
            <hr />
            {products.map(eachProduct =>{
                return (
                    <Link to={`/detalles/${eachProduct._id}`}>
                        <article className="product-card">
                            <h3>{eachProduct.title}</h3>
                            <img src={eachProduct.imageUrl} className="product-card-img"  alt=""></img>
                        </article>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsPage;