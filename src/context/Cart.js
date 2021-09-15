import React, {createContext,useState,useContext,useEffect} from 'react'

const CartContext = createContext()

export default function CartProvider({children}){
    const [cart,setCart] = useState([])
    const [totalValue,setTotalValue] = useState(0)

    useEffect(()=>{
        let value = 0;
        cart.map(item=>{
            value = value + item.price
        })
        setTotalValue(value)
    },[cart])

    function add(item){
        const newCart = cart;
        newCart.push(item)
        setCart([...newCart])
    }

    const store = {
        add,
        cart,
        totalValue
    }

    return(
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)

    const {cart,add,totalValue} = context

    return {
        cart,add,totalValue
    }
}