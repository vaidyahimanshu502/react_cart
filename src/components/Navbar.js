import React from "react";

const Navbar = (props) => {
        return (
            <div style={style.nav}>
                <div style= {style.cartItemContainer}>
                    <img style={style.cartIcon} src="https://as1.ftcdn.net/v2/jpg/01/13/95/02/1000_F_113950213_2znQQrapC21FcNXfvqwjnXm5gs6jDi06.jpg" alt="cart-iem" />
                    <span style={style.cartCount}> {props.count} </span>
                </div>
            </div>
        )
    }

//styling our navbar by js
const style = {
    cartIcon : {
        height: 40,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 10
    },
    nav: {
        height: 70,
        background: 'blue',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItem: 'center',

    },
    cartItemContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        position: 'absolute',
        padding: '4px 8px',
        right: 0,
        top: 10
    }
}

export default Navbar;