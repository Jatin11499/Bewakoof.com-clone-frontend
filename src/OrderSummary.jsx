import React from 'react';
import Navbar from './Navbar';
import './styles/OrderSummary.css';
import SubTotalBill from './SubTotalBill';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
});

function OrderSummary() {
    const classes = useStyles();
    const [{ bag, user }, dispatch] = useStateValue();
    
    const clearBag = () => {
        dispatch({
            type: 'CLEAR_BAG'
        });
    }

    return (
        <>
            <Navbar />
            <div className="bill-main container">
                <h5 className="bill-main-title">Order Summary</h5>

                <div className="row">
                    <div className="col-md-8 bill-form">
                        <Card className={classes.root} variant="outlined">
                            <CardHeader title="DELIVERY ADDRESS" />
                            <CardContent>
                            
                            <form method="POST">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="mobile" placeholder="Mobile Number" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="ad1" placeholder="Address Line 1" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="ad2" placeholder="Address Line 2" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="city" placeholder="City" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="state" placeholder="State" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="pin" placeholder="Pin code" required />
                                </div>
                                <Fab className="btn-order" variant="extended" type="submit"><NavLink exact to={!user ? "/login" : "/success"} onClick={clearBag}>Place Order</NavLink></Fab>
                            </form> 
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <SubTotalBill />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary;