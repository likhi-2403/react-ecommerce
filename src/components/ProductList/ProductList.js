import { useEffect, useState } from "react";
import API from "../../services/api";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(){

    const [products,setProducts]=useState([]);

    useEffect(()=>{

        API.get("/products")

        .then((res)=>{

            setProducts(res.data);

        });

    },[]);

    return(

        <div className="products">

            {

                products.map((item)=>(

                    <ProductCard
                        key={item.id}
                        product={item}
                    />

                ))

            }

        </div>

    )

}

export default ProductList;