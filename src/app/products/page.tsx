import React, {useEffect, useState} from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { div } from "framer-motion/client";

const sanity = sanityClient({
  projectId: "u15rxwv2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imgUrl: string;
    prodcutImage: {
       assest: {
        _ref: string
       };
    };
    tags:string[];
}

const ProductCarts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `*[_type == "product"]{
                _id,
                title,
                price,
                description,
                discountPercentage,
                "imageUrl": productImage.assest->url,
                tags
            }
            `;

       const data = await sanity.fetch(query);
       setProducts(data);
    } catch (error) {
        console.error("Error Fetching Products:", error);
    }
  };
  
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title}Product added to cart!`);
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return(
    <div className="p-4">
        <h2 className="text-center text-slate-900 mt-4 mb-4">Products From API's DATA</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product)  => (
                <div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}