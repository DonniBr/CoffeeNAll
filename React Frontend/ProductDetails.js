import { useState, useEffect } from "react";
import { getProductById } from './api';
import { useParams } from "react-router-dom";



const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const fetchProducts = async () => {
                try{
                    const data = await getProductById(id);
                    setProduct(data);
                    setLoading(false); 
                }
                catch (err){
                }
                finally {
                    setLoading(false);
                }
            };
            fetchProducts();
        }, [id]);

    if (loading) {
        return <div>Lädt...</div>
    }

    if (!product) {
        return <div> Produkt nicht gefunden </div>
    }

    return(
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Preis: {product.price}</p>
        </div>
    )
}

export default ProductDetails;