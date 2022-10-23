import "./Checkout.scss"

function Checkout () {

    return (
        <form className="form">
            <p>Ingrese sus datos para crear la orden</p>
            <div className="campo">
                <label>Nombre</label>
                <input type="text" />
            </div>
            <div className="campo">
                <label>Correo electrónico</label>
                <input type="email" />
            </div>
            <div className="campo">
                <label>Número de celular</label>
                <input type="text" />
            </div>
            <div className="campo">
                <label>Dirección</label>
                <input type="text" />
            </div>
            <button>Confirmar compra</button>
        </form>
    )
}

export default Checkout