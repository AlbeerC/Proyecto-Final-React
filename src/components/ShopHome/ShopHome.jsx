import "./ShopHome.scss"
import ps5 from "../../assets/ps5.png"

function ShopHome() {
  return (
    <section>
      <div className="home">
        <img src={ps5} alt="ps5" />
        <div className="home-titles">
          <h1>Gamer Shop</h1>
          <h2>Juegos físicos originales y con garantía</h2>
        </div>
      </div>

      <div className="info">

        <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="92" height="92" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#26acee" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
                <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                <line x1="3" y1="9" x2="7" y2="9" />
            </svg>
            <div className="shipments-titles">
                <h3>Envíos a todo el país</h3>
                <p>Gratis en compras de más de $20000</p>
            </div>
        </div>

        <div className="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="92" height="92" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#26acee" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="7.01" y2="15" />
                <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
            <div className="cards-titles">
                <h3>Tarjetas de débito y crédito</h3>
                <p>Hasta 6 cuotas sin interés</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default ShopHome
