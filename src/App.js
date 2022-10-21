import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailCotainer from "./components/ItemDetailContainer/ItemDetailCotainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { CartProvider } from "./context/CartContext"
import { NotificationProvider } from "./Notification/NotificationService"

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/detail/:productId" element={<ItemDetailCotainer />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
      
    </div>
  )
}

export default App;
