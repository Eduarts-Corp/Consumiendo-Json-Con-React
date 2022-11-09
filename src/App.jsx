import './App.css'
import { ProductContainer } from "./components/ProductContainer"
import { Product } from "./components/Product"
import data from './products.json'


export const App = () => {
    return (
      <>
        <ProductContainer>
        {/* Quitamos los demas que teniamos y vamos a recorrer el arreglo con .map (Recordar ponerlo entre llaves*/}

          {data.map((dato,id)=>{
            return <Product key={id}
              name={dato.name}
              old={dato.price}
              discount={dato.discount}
              price={ dato.price - dato.discount } // Cuenta matematica comun( precio actual menos el discount)
              image={dato.url } />
          })}

          
          
        </ProductContainer>
      </>
    );

}