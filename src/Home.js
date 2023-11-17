import React, { useState } from 'react';
import CardList from './CardList/CardList';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';
import ProductPage from './ProductPage/ProductPage';

const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const OpenHandler = () => {
        setisOpen(true)
    }

    const CloseHandler = () => {
        setisOpen(false)
    }
    const BackDropHandler = () => {
        if (isOpen == true) {
            return (<BackDrop CloseHandler={CloseHandler} />)

        }
    }

    //8GMrSwACBn1O6TtOVIrzpWDNqkeLaEGMyW5-A5Y6eZ0






    return (
        <div>
            <SideDrawer ISOPEN={isOpen} />
            <Toolbar OpenHandler={OpenHandler} />
            {BackDropHandler()}

            <main style={{ marginTop: '76px' }}>
                <CardList />
                

            
            </main>




        </div>
    )
}

export default Home



