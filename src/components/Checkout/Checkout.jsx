import "./Checkout.scss"

function Checkout () {

    return (
        <form className="form">
            <p>Ingrese sus datos para crear la orden</p>
            <div className="campo">
                <label>Nombre</label>
                <input type="text" required />
            </div>
            <div className="campo">
                <label>Correo electrónico</label>
                <input type="email" required />
            </div>
            <div className="campo">
                <label>Número de celular</label>
                <input type="text" required />
            </div>
            <div className="campo">
                <label>Dirección</label>
                <input type="text" required />
            </div>
            <button>Confirmar compra</button>
        </form>
    )
}

export default Checkout