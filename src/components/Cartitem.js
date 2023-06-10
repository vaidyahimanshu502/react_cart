import React from 'react';

class CartItem extends React.Component {
    // constructor() {
    //     // calling super constructor for parent class [Component]
    //     super()
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    // }

//     increaseQuantity = () => {
//         // console.log("test")
// //accessing qty from constructor's object
//         this.props.product.qty += 1;
//         console.log("this", this.state);
// //updating qty in jsx==views
//         this.setState({
//             qty: this.props.product.qty
//         })
//         //this method
//     }

//     decreaseQuantity = () => {
//         const {qty} = this.props.product;
//         if(qty === 0) {
//             return
//         }
//         this.props.product.qty -= 1;
//         this.setState({
//             qty: this.props.product.qty
//         })
//     }
    // increaseQuantity = function() {            this generate errors due to lack of implicitaly
    //     console.log("this", this.state);       binding so we should use arrow function.
    // }
   
    render() {
        const {price, title, qty, img} = this.props.product;
        return (
             <div className='card-item' style={{marginLeft: 100}}>
                <div className='left-block'>
                    <img  style={style.image} src= {img} alt='img'/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25, color: 'red'}}>{title}</div>
                    <div  style={{color:'gray'}}>Rs. {price} </div>
                    <div  style={{color:'gray'}}>Qty: {qty} </div>

                    <div className='card-item-actions'>
                        {/* Buttoms */}
                        <img src=
                        "https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                         alt="decrease" className='action-icons' 
                         onClick={()=> this.props.onDecreaseQuantity(this.props.product)}
                         />
                        <img src=
                        "https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                         alt="increase" className='action-icons'
                         onClick= {()=> this.props.onIncreaseQuantity(this.props.product)}
                         />
                        <img src=
                        "https://as2.ftcdn.net/v2/jpg/00/98/26/11/1000_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                         alt="delete" className='action-icons'
                         onClick={()=> this.props.onDeleteProject(this.props.product.id)}
                         />
                    </div>
                </div>
             </div>
        )
    }
}
 const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'lightgray'
    }
 }

export default CartItem;


// int n = a.length;
// int mS= Integer.MIN_VALUE;
// sum=0;
// int si=0, ei=0;

// if(n<=1) return a;

// for(int i = 0; i<n; i++) {
//     sum += a[1];

//     if(sum<a[i]) {
//         sum = a[i];
//         si = i;
//     }

//     if(mS<sum) {
//         mS = sum;
//         end = i;
//     }
// }
// int arr[] = new int[n];
// for(int i=0;<arr.length;i++) {
//     for(int j=si;j<ei; j++) {
//         arr[i] =a[j];
//     }
// }
// return arr;

// return Arrays.copyOfRange(a, si, ei+1)