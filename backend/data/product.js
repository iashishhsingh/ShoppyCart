const products = [
  {
    name: "Apple iPhone 16",
    description: "Latest Apple smartphone with A18 chip, 128GB storage and Super Retina XDR display.",
    price: 79999,
    category: "Mobiles",
    stock: 15,
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    ratings: 4.8,
    numReviews: 325
  },
  {
    name: "Samsung Galaxy S25",
    description: "Flagship Android smartphone with AMOLED display and Snapdragon processor.",
    price: 74999,
    category: "Mobiles",
    stock: 20,
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    ratings: 4.7,
    numReviews: 289
  },
  {
    name: "Sony WH-1000XM5",
    description: "Premium wireless noise cancelling headphones.",
    price: 27999,
    category: "Electronics",
    stock: 30,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    ratings: 4.9,
    numReviews: 512
  },
  {
    name: "Dell XPS 15 Laptop",
    description: "Intel Core i7, 16GB RAM, 512GB SSD, RTX Graphics.",
    price: 145999,
    category: "Laptops",
    stock: 10,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    ratings: 4.8,
    numReviews: 154
  },
  {
    name: "Apple MacBook Air M4",
    description: "Powerful Apple laptop with M4 chip and Retina display.",
    price: 114999,
    category: "Laptops",
    stock: 12,
    imageUrl: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D",
    ratings: 4.9,
    numReviews: 431
  },
  {
    name: "Nike Air Max 270",
    description: "Comfortable lifestyle sneakers for daily wear.",
    price: 9999,
    category: "Footwear",
    stock: 40,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    ratings: 4.6,
    numReviews: 186
  },
  {
    name: "Adidas Ultraboost",
    description: "Running shoes with responsive Boost cushioning.",
    price: 12999,
    category: "Footwear",
    stock: 35,
    imageUrl: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    ratings: 4.7,
    numReviews: 241
  },
  {
    name: "Puma Sports T-Shirt",
    description: "Dry-fit polyester t-shirt for workouts.",
    price: 1499,
    category: "Clothing",
    stock: 100,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    ratings: 4.5,
    numReviews: 98
  },
  {
    name: "Levi's Men's Jeans",
    description: "Slim fit stretch denim jeans.",
    price: 2499,
    category: "Clothing",
    stock: 80,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    ratings: 4.4,
    numReviews: 203
  },
  {
    name: "Casio G-Shock Watch",
    description: "Shock resistant digital sports watch.",
    price: 6999,
    category: "Accessories",
    stock: 50,
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    ratings: 4.8,
    numReviews: 344
  },
  {
    name: "Logitech MX Master 3S",
    description: "Advanced wireless productivity mouse.",
    price: 8999,
    category: "Electronics",
    stock: 25,
    imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    ratings: 4.9,
    numReviews: 415
  },
  {
    name: "Mechanical RGB Keyboard",
    description: "Gaming keyboard with RGB lighting and blue switches.",
    price: 4999,
    category: "Electronics",
    stock: 45,
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    ratings: 4.6,
    numReviews: 278
  },
  {
    name: "Samsung 55-inch 4K Smart TV",
    description: "Crystal UHD Smart TV with HDR support.",
    price: 52999,
    category: "Electronics",
    stock: 8,
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    ratings: 4.7,
    numReviews: 165
  },
  {
    name: "Canon EOS R50 Camera",
    description: "24.2MP mirrorless camera with 4K recording.",
    price: 69999,
    category: "Cameras",
    stock: 7,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    ratings: 4.8,
    numReviews: 119
  },
  {
    name: "Boat Rockerz 550",
    description: "Wireless Bluetooth headphones with 20-hour battery.",
    price: 1999,
    category: "Electronics",
    stock: 60,
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    ratings: 4.4,
    numReviews: 502
  },
  {
    name: "OnePlus Nord Buds 3",
    description: "True wireless earbuds with ANC support.",
    price: 2999,
    category: "Electronics",
    stock: 75,
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    ratings: 4.5,
    numReviews: 196
  },
  {
    name: "HP LaserJet Printer",
    description: "Fast monochrome laser printer for office use.",
    price: 11999,
    category: "Electronics",
    stock: 18,
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
    ratings: 4.3,
    numReviews: 84
  },
  {
    name: "Amazon Kindle Paperwhite",
    description: "6.8-inch glare-free display with adjustable warm light.",
    price: 14999,
    category: "Books",
    stock: 22,
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    ratings: 4.8,
    numReviews: 318
  },
  {
    name: "Wildcraft Backpack",
    description: "35L waterproof laptop backpack.",
    price: 2199,
    category: "Bags",
    stock: 55,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    ratings: 4.5,
    numReviews: 132
  },
  {
    name: "Mi Smart Band 9",
    description: "Fitness tracker with AMOLED display and heart-rate monitoring.",
    price: 3499,
    category: "Wearables",
    stock: 48,
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    ratings: 4.6,
    numReviews: 267
  }
];

module.exports = products;