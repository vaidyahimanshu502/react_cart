import './App.css';
import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import firebase from 'firebase/compat/app'

class App extends React.Component {

  constructor(name, age) {
    // calling super constructor for parent class [Component]
    super()
    this.state ={
    // products: [
    //         {
    //             price: 99,
    //             title: 'Watch',
    //             qty: 1,
    //             img: 'https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=',
    //             id : 1
    //         },
    //         {
    //             price: 999,
    //             title: 'Mobile Phone',
    //             qty: 4,
    //             img: 'https://c8.alamy.com/comp/AHA83R/series-object-on-white-old-mobile-phone-AHA83R.jpg',
    //             id:2
    //         },
    //         {
    //             price: 1999,
    //             title: 'Laptop',
    //             qty: 1,
    //             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwHf9XMOU9sbajT_Fz59ScYd3dxnKrFTu2Qaqb1az&s',
    //             id: 3
    //         },
    //         {
    //             price: 999,
    //             title: 'T-shirt',
    //             qty: 5,
    //             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyeu0CtOVyPG7Pq_Y9xW61FsfwQQvpmz-AtqvKJL&s',
    //             id: 4
    //         }
    //     ]
    products : [],
    loading: true
    }
    this.db = firebase.firestore();
}


//getting data from firebase -----> GET REQUEST of http 'R' of CRUD
componentDidMount() {
  // firebase
  //    .firestore()
  //    .collection('products')
  //    .get()
  //    .then((snapshot) => {
  //     // console.log('Snapshot',snapshot)
  //          snapshot.docs.map((doc) => {
  //           // console.log(doc.data());
  //          })
  
  //          const products = snapshot.docs.map((doc) => {
  //               const data = doc.data();
  //               data['id'] = doc.id;
  //               return data;
  //          })

  //          this.setState({
  //           products: products,
  //           loading: false
  //          })

  //    })

     //detecting and reflecting the changes from firebase
  // firebase
  // .firestore()
  this.db
  .collection('products')
  // .where('price', '>', '1999')    // firebase queries works like this 
  // .orderBy('price')                // for Filtering data 
  .onSnapshot((snapshot) => {
    // console.log('Snapshot',snapshot)
         snapshot.docs.map((doc) => {
           return console.log(doc.data());
         })
 
         const products = snapshot.docs.map((doc) => {
              const data = doc.data();
              data['id'] = doc.id;
              return data;
         })
 
         this.setState({
          products: products,
          loading: false
         })
  })
}

//updating quantity in firebase ------> PUT || PATCH REQUEST  'U' of CRUD
handleIncreaseQuantity = (product) => {
   const {products} = this.state;
   console.log('this product', product)
   const index = products.indexOf(product);
  //  products[index].qty += 1;

  //  this.setState({
  //   products: products
  //  })

     //updating quantity in firebase ------> PUT || PATCH REQUEST   'U' of CRUD
     const docRef = this.db.collection('products').doc(products[index].id);
     docRef
        .update({
          qty: products[index].qty  + 1
        })
        .then(() => {
          console.log('Updated Successfuly!')
        })
        .catch((error) => {
          console.log('Error :', error)
        })
}

//   'U' of CRUD
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    console.log('this product', product)
    const index = products.indexOf(product);

    // if(products[index].qty === 0) {
    //     return;
    //    }
    // products[index].qty -= 1;

    // this.setState({
    //  products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    if(products[index].qty !== 0) {

      docRef
        .update({
          qty: products[index].qty  - 1
        })
        .then(() => {
          console.log('Updated Successfuly!')
        })
        .catch((error) => {
          console.log('Error :', error)
        })

    }
 }

 // Deleting data in firebase-----> DELETE REQUEST   'D' of CRUD
 handleDeleteProject = (id) => {
    // const {products} = this.state;

    // const items = products.filter((item) => 
    //    item.id !== id
    // )
    // this.setState({
    //     products: items
    // })
    const docRef = this.db.collection('products').doc(id);
    docRef
       .delete()
       .then(() => {
        console.log('Deleted Successfully!')
       })
       .catch((error) => {
        console.loh('Errorrrrrrr :', error)
       })
 }

  countCartItem = () => {
   let count = 0;
    const {products} =this.state;

    products.forEach((product) => {
      count += product.qty
    })
    return count;
 }

 getTotalPrice = () => {
  const {products} = this.state;
  let totalPrice = 0;
  products.map((product) => {
   return totalPrice += product.qty * product.price;
  })
  return totalPrice;
 }

 // Adding data into firebase------> POST REQUEST http  'C' of CRUD
 addProduct = () => {
  this.db
  .collection('products')
  .add({
     img: 'https://media.istockphoto.com/id/172485535/photo/washing-machine.jpg?s=612x612&w=0&k=20&c=heH0vH2hfuP7QLt4lGQvILj61sD5iuzs8sZk_izSazc=',
     price: 9999,
     qty: 3,
     title: 'Washing Machine'
  })
  .then((docRef) => {
    console.log('Added data is :', docRef)
  }).catch((error) => {
    console.log('Errorrrr :', error)
  })
 }

  render() { 
    const {products, loading} = this.state
    return (
      <div className="App">
        <Navbar count = {this.countCartItem()} />
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add Product</button> */}
        <Cart 
        products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProject = {this.handleDeleteProject}
        />
        {loading && <h1>Loading Products...</h1>}
        <div>
         <h1 style={{padding: 10, marginLeft:250}}> TOTAL: Rs.{this.getTotalPrice()}</h1>
        </div>
      </div>
    );
  }
}

export default App;
