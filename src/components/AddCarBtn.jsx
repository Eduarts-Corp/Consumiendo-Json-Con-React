import './AddCarBtn.css'


export const AddCarBtn = ({name, price}) => {
  return (
    <button onClick={()=>alert(` Has Comprado el Producto ${name} a $${price} y ha sido Agregado al carro`)}>Comprar</button>
  )
}
