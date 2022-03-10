import React, {useEffect} from 'react'
import { useStateValue } from '../../StateProvider';
import "./Product.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    
    const [item, setItem] = useLocalStorage("item", basket);
    console.log("item", item);
    console.log("basket", basket);

    const addToBasket = () => {
        // setItem(basket);
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
        // window.localStorage.setItem("data", JSON.stringify(basket));
    }

    // save info falta
    // useEffect(() => {
    //     setItem(basket);
    // }, [basket])
    

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => 
                        <p key={i}>⭐</p>
                    )}
                </div>
            </div>
            <img src={image} alt="product" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product
