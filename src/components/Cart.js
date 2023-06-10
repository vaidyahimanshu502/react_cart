import React from 'react';
import CartItem from './Cartitem';


const Cart = (props) => {

        const {products} = props;
        return (
            <>
              <div className='cart'>
               
               {products.map((product) => {
                      return  <CartItem product= {product} key={product.id} 
                       onIncreaseQuantity= {props.onIncreaseQuantity}
                       onDecreaseQuantity = {props.onDecreaseQuantity}
                       onDeleteProject = {props.onDeleteProject}
                       />
               })}
              </div>
            </>
        )       
    }

export default Cart;