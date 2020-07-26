import React, { Fragment, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';

    function MenuComp () {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);

    const {state, dispatch} = useContext(AuthContext)


    return (
       
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand to="/">Toko Buku</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  


                </Nav>

                    <NavbarText>
                        <Button color="default"
                            onClick={()=>
                            dispatch({
                                type:"LOGOUT"
                            })}>
                                {state.isAuthenticated && (
                                    <NavLink>LOGOUT</NavLink>
                                )}

                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MenuComp