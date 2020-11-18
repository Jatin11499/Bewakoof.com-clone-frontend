import React,{ useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Products.css';
import ProductAccordian from './ProductAccordian';
import ProductCard from './ProductCard';
import instance from './Axios';

function Products(props) {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await instance.get('/product/card');
            setProds(req.data);
        }
        
        fetchData();
    }, []);

    const mProd = prods.filter((prod) => prod.gender === "men");
    const wProd = prods.filter((prod) => prod.gender === "women");

    return (
        <>
                <Navbar />
                <div className="container">
                    <div className="row row-path">
                        <p>Home / {props.path}</p>
                    </div>
                    <div className="row row-title">
                        <h4>{props.title} <span>({props.title === "Men's & Women's Top Wear" ? prods.length : (props.title === "Men's Clothing" ? mProd.length : wProd.length)})</span></h4>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-3 product-cat">
                            <p style={{fontSize:"0.8rem",color:"gray",fontWeight:"600"}}>FILTERS</p>
                            <ProductAccordian genderTitle={props.title}/>
                        </div>
                        <div className="col-lg-9 products">
                            <div className="row">
                                {
                                    props.title === "Men's & Women's Top Wear" ?
                                    prods.map((prod) => {
                                        return (
                                            <div className="col-lg-4 col-6 mobile-card">
                                                <ProductCard
                                                    key = {prod.pid}
                                                    pid = {prod.pid}
                                                    imgUrl = {prod.imgUrl}
                                                    name = {prod.productName}
                                                    op = {prod.oldPrice}
                                                    np = {prod.newPrice}
                                                />
                                            </div>  
                                        );
                                    }) : 
                                    props.title === "Men's Clothing" ? 
                                    prods.filter((prod) => prod.gender === "men")
                                    .map((prod) => {
                                        return (
                                            <div className="col-lg-4 col-6 mobile-card">
                                                <ProductCard
                                                    key = {prod.pid}
                                                    pid = {prod.pid}
                                                    imgUrl = {prod.imgUrl}
                                                    name = {prod.productName}
                                                    op = {prod.oldPrice}
                                                    np = {prod.newPrice}
                                                />
                                            </div>  
                                        );
                                    }) : 
                                    prods.filter((prod) => prod.gender === "women")
                                    .map((prod) => {
                                        return (
                                            <div className="col-lg-4 col-6 mobile-card">
                                                <ProductCard
                                                    key = {prod.pid}
                                                    pid = {prod.pid}
                                                    imgUrl = {prod.imgUrl}
                                                    name = {prod.productName}
                                                    op = {prod.oldPrice}
                                                    np = {prod.newPrice}
                                                />
                                            </div>  
                                        );
                                    })
                                }
                            </div> 
                        </div>
                    </div>
                </div>
                <Footer />
        </>
    )
}

export default Products;
