import React from 'react';
import Fab from '@material-ui/core/Fab';
import { useStateValue } from './StateProvider';

function ProductCard(props) {
    const [{ bag }, dispatch] = useStateValue();

    const addToBag = () => {
        dispatch({
            type: 'ADD_TO_BAG',
            item: {
                pid: props.pid,
                image: props.imgUrl,
                name: props.name,
                price: props.np
            }
        });
    }

    return (
        <>
            <div className="card item-card">
                <img src={props.imgUrl} className="card-img-top" alt="card-image" />
                <div className="card-body cards">
                    <h5 className="card-title item-title">{props.name}</h5>
                    <p className="card-text item-text"><b>₹{props.np}</b> <strike style={{color:"gray"}}>₹{props.op}</strike></p>
                </div>
                <Fab className="btn-add-to-cart mx-auto" variant="extended" color="primary" onClick={addToBag}>Add to Cart</Fab>
            </div>
        </>
    )
}

export default ProductCard;
