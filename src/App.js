import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import ProductContext from './Contexts/ProductContext'
import CartContext from './Contexts/CartContext';
import NavigationContext from './Contexts/NavigationContext';

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useState([]);

    const addItem = item => {
        setCart([...cart, item])
    };

    return (
        <div className="App">
            <ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={cart}>
				<NavigationContext.Provider>
                <Navigation/>
				</NavigationContext.Provider>
				
                {/* Routes */}
                <Route exact path="/">
                    <Products />
                </Route>

                <Route path="/cart">
                    <ShoppingCart/>
                </Route>
			
			</CartContext.Provider>
            </ProductContext.Provider>
        </div>
    );
}

export default App;