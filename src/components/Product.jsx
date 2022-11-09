import { AddCarBtn } from './AddCarBtn';
import Discount from './Discount';
import { Heart } from './Heart';
import './Product.css'


export const Product = ({name ,old ,price, discount} ) => {
  return (
    <div className="product">
      <Discount discount={discount} />
      <Heart/>
      <img className="product__img" src="https://picsum.photos/180" alt="Product"/>
      <h2 className="product__name">{name}</h2>
      <div className="product__detail">
        <p className="product__oldPrice">${old}</p>
        <p className="product__price">${price} </p>
        <AddCarBtn name={name} price={price} />
      </div>
    </div>
  )
}

// Hasta Aqui ya tenemos lo basico esto es 1 Hora 46 min, 20 seg, es lo que es la estructura y el paso de los props a los diferentes componentes, aunque son solo 2 hasta el momento. Pero a partir del esa hora y min empieza el tema del consumo de los datos Json