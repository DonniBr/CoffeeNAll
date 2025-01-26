import React, { useEffect, useState } from 'react';
import { getProducts } from './api';
import { Link } from 'react-router-dom';


const ProductsList = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const data = await getProducts();
                setProducts(data);
            }
            catch (err){
                setError("Fehler beim Laden der Produkte");
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [])

    if (loading) {
        return <p> Lade Produkte </p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Produkte</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Preis: {product.price}</p>
                        <Link to={`/products/${product.id}`}>Details anzeigen</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;