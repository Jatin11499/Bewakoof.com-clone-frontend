import React from 'react';
import Fab from '@material-ui/core/Fab';
import './styles/Cart.css';
import { useStateValue } from './StateProvider';

function BagItem(props) {
    const [{ bag }, dispatch] = useStateValue();

    const removeFromBag = () => {
        dispatch({
            type: 'REMOVE_FROM_BAG',
            pid: props.pid
        });
    }

    return (
        <>
            <div className="bag-product">
                <img src={props.image} alt="first" className="bag-image"/>
                <div className="bag-info">
                    <p className="bag-title">{props.name}</p>
                    <p className="bag-price"><b>₹{props.price}</b></p>
                    <Fab variant="extended" onClick={removeFromBag} className="btn-remove">REMOVE</Fab>
                </div>
            </div>
        </>
    )
}

export default BagItem;
