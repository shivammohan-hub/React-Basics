// 3. Product Listing Page

// Create a product listing page with at least 6 products. Store product details in an array of objects and use `.map()` to display each product through a reusable `ProductCard` component. Each card should display the product name, price, and category.



import product from "./product"

const Item = ({name, price, category}) => {
    return(
        <ul className="list-decimal ">
            <div className="px-10 py-3">
            <li>Product name: {name}</li>
            <li>Price: {price}</li>
            <li>Category: {category}</li>
            </div>
        </ul>
    )
}

const ProductCard = () => {
    return (
        <div className="p-10">
            <h1 className="font-bold underline text-2xl">Product Details</h1>
            <ul>
                {product.map((i) => (<Item name={i.name}  price={i.price} category={i.category}/>))}
            </ul>
        </div>
    )
}

export default ProductCard