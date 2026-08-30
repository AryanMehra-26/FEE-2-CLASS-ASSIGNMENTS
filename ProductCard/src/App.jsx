import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import {ShoppingCart,Sun,Moon} from "lucide-react";

function App() {
  const [cart, setCart] = useState({})
  const [darkMode, setDarkMode] = useState(false)
  const [filter, setFilter] = useState("all")
  const addToCart = (name) => {
    setCart({
        ...cart,
        [name]: (cart[name] || 0) + 1
    })
}

const increaseQuantity = (name) => {
    setCart({
        ...cart,
        [name]: cart[name] + 1
    })
}

const decreaseQuantity = (name) => {
    const newCart = { ...cart }
    if (newCart[name] > 1) {
        newCart[name] = newCart[name] - 1
    } else {
        delete newCart[name]
    }
    setCart(newCart)
}
const cartCount = Object.values(cart).reduce((total, quantity) => {
    return total + quantity
}, 0)

const products = [
  {
    name: "Gaming Mouse",
    description: "High precision mouse with adjustable DPI",
    price: "$35",
    available: true,
    buyNow: "Buy Now at $35",
    image: "/images/gaming-mouse.jpg"
  },
  {
    name: "Smartwatch",
    description: "Tracks fitness, heart rate, and sleep",
    price: "$120",
    available: true,
    buyNow: "Buy Now at $120",
    image: "/images/smartwatch.jpg"
  },
  {
    name: "USB-C Hub",
    description: "5-in-1 hub with HDMI and SD card reader",
    price: "$40",
    available: true,
    buyNow: "Buy Now at $40",
    image: "/images/usb-hub.jpg"
  },
  {
    name: "Wireless Charger",
    description: "Fast charging pad for compatible devices",
    price: "$30",
    available: true,
    buyNow: "Buy Now at $30",
    image: "/images/charger.jpg"
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit, blue switches",
    price: "$45",
    available: true,
    buyNow: "Buy Now at $45",
    image: "/images/keyboard.jpg"
  },
  {
    name: "Power Bank",
    description: "20000mAh portable power bank with fast charging",
    price: "$40",
    available: false,
    buyNow: "Buy Now at $40",
    image: "/images/power-bank.jpg"
  },
  {
    name: "Bluetooth Speaker",
    description: "Waterproof, 12-hour battery life",
    price: "$35",
    available: true,
    buyNow: "Buy Now at $35",
    image: "/images/speaker.jpg"
  },
  {
    name: "Laptop Stand",
    description: "Adjustable aluminum stand for laptops",
    price: "$45",
    available: true,
    buyNow: "Buy Now at $45",
    image: "/images/laptop-stand.jpg"
  },
  {
    name: "Gaming Headset",
    description: "Surround sound with noise-canceling mic",
    price: "$60",
    available: false,
    buyNow: "Buy Now at $60",
    image: "/images/headset.jpg"
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic design with 2.4GHz connectivity",
    price: "$15",
    available: true,
    buyNow: "Buy Now at $15",
    image: "/images/mouse.jpg"
  },
  {
    name: "Webcam",
    description: "1080p HD webcam with built-in microphone",
    price: "$50",
    available: true,
    buyNow: "Buy Now at $50",
    image: "/images/webcam.jpg"
  },
  {
    name: "LED Desk Lamp",
    description: "Touch control with 3 brightness levels",
    price: "$25",
    available: false,
    buyNow: "Buy Now at $25",
    image: "/images/desk-lamp.jpg"
  },
  {
    name: "Noise Cancelling Earbuds",
    description: "Wireless earbuds with charging case",
    price: "$75",
    available: true,
    buyNow: "Buy Now at $75",
    image: "/images/earbuds.jpg"
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum desk holder",
    price: "$10",
    available: true,
    buyNow: "Buy Now at $10",
    image: "/images/phone-stand.jpg"
  },
  {
    name: "Portable SSD",
    description: "1TB storage, USB-C interface",
    price: "$99",
    available: true,
    buyNow: "Buy Now at $99",
    image: "/images/ssd.jpg"
  }
  
];

const filteredProducts = products.filter((product) => {
    const price = parseInt(product.price.replace("$", ""))

    if (filter === "15") {
        return price < 15
    }

    if (filter === "30") {
        return price < 30
    }

    if (filter === "50") {
        return price < 50
    }

    if (filter === "50plus") {
        return price >= 50
    }

    return true
})

  return (
    <div className={darkMode ? "app dark" : "app light"}>
          <div className="top-controls">
    <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
    >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        <span>{darkMode ? "Light" : "Dark"}</span>
    </button>
    <div className="cart-display">
        <ShoppingCart strokeWidth={3} />
        <span>{cartCount}</span>
    </div>
</div>
    


        <h1 className="page-title">TECH-MART</h1>

        <div className="filter-bar">

    <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
    >
        Show All
    </button>

    <button
        className={filter === "15" ? "active" : ""}
        onClick={() => setFilter("15")}
    >
        Under $15
    </button>

    <button
        className={filter === "30" ? "active" : ""}
        onClick={() => setFilter("30")}
    >
        Under $30
    </button>

    <button
        className={filter === "50" ? "active" : ""}
        onClick={() => setFilter("50")}
    >
        Under $50
    </button>

    <button
        className={filter === "50plus" ? "active" : ""}
        onClick={() => setFilter("50plus")}
    >
        $50+
    </button>

</div>

        <div className="product-grid">

           {filteredProducts.map((product, index) => {
                return (
                    <Card
                        key={index}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        available={product.available}
                        buy={product.buyNow}
                        image={product.image}
                        quantity={cart[product.name] || 0}
                        onAddToCart={() => addToCart(product.name)}
                        onIncrease={() => increaseQuantity(product.name)}
                        onDecrease={() => decreaseQuantity(product.name)}
                    />
                )
            })}
        </div>
    </div>
)
}
export default App