import "./productpage.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <p className="desc">{product.description}</p>
      <p className="price">RS {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Blue Shirt",
      image: "./src/assets/shirt1.png",
      description: "Blue Shirt, 100% cotton by WH.",
      price: 3200,
    },
    {
      id: 2,
      name: "Sky Shirt",
      image: "./src/assets/shirt2.png",
      description: "Sky dotted Shirt by WH.",
      price: 2800,
    },
    {
      id: 3,
      name: "White Shirt",
      image: "./src/assets/shirt3.png",
      description: "White Shirt by WH.",
      price: 3000,
    },
    {
      id: 4,
      name: "Blue Shirt",
      image: "./src/assets/shirt4.png",
      description: "Blue check Shirt, 100% cotton by WH.",
      price: 3750,
    },
    {
      id: 5,
      name: "White Shirt",
      image: "./src/assets/shirt5.png",
      description: "White Shirt by WH.",
      price: 2900,
    },
    {
      id: 6,
      name: "Sky Blue Shirt",
      image: "./src/assets/shirt6.png",
      description: "Sky blue Shirt, 100% cotton by WH.",
      price: 2500,
    },
    {
      id: 7,
      name: "Maroon Shirt",
      image: "./src/assets/shirt7.png",
      description: "Maroon Shirt by WH.",
      price: 2500,
    },
    {
      id: 8,
      name: "Striped Shirt",
      image: "./src/assets/shirt8.png",
      description: "Striped blue Shirt by WH.",
      price: 3000,
    },
    {
      id: 9,
      name: "Light Blue Shirt",
      image: "./src/assets/shirt9.jpg",
      description: "Light Blue Shirt by WH.",
      price: 3750,
    },
    {
      id: 10,
      name: "Blue Shirt",
      image: "./src/assets/shirt10.png",
      description: "Blue Shirt, 100% cotton by WH.",
      price: 3500,
    },
    {
      id: 11,
      name: "Black Shirt",
      image: "./src/assets/shirt11.jpg",
      description: "Black Shirt by WH.",
      price: 4000,
    },
    {
      id: 12,
      name: "White Shirt",
      image: "./src/assets/shirt12.jpg",
      description: "White Shirt, 100% cotton by WH.",
      price: 3200,
    },
  ];

  return (
    <div className="product-page">
      <h1>Men's Shirts</h1>
      <img
        src="/src/assets/westernwear.jpg"
        alt="westernwear"
        className="ww-img"
      />
      <div className="line"></div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
