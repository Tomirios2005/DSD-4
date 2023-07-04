
import './Carrito.css'

function Carrito({ carrito, setCarrito }) {


  function eliminarProducto(index) {
    const newCarrito = [...carrito]
    
    if (newCarrito[index].cantidad > 1) {
      newCarrito[index].cantidad--
      setCarrito(newCarrito)
    } else {
      newCarrito.splice(index, 1)
      setCarrito(newCarrito)
    }
  
  }

  return (
    <>
      <h1 className='title_carrito'>Carrito</h1>
      <div className="container_cart">
        <div className="cart_add_container">
          {carrito.map((item, index) => {
            return (
              <div className='card' key={index}>
                <img src={item.img} alt="img" />
                <h3>{item.title}</h3>
                <p>{item.descripcion}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '50%'
                }}>
                  <p>{item.price}
                    <span
                      style={{
                        fontSize: '1.2rem',
                        color: '#00D8FF',
                        marginLeft: '2px'
                      }}
                    >$</span>
                  </p>
                  <p>cant: {item.cantidad}</p>
                </div>
                <button
                  onClick={()=> eliminarProducto(index)}>
                  Eliminar del carrito
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Carrito;

