import React, { useContext, createContext, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, Row, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,  Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'




function BukuComp  (props) {
    
    return (
        <div>
            
              
                    <Card>
                        <CardImg top width="100%" src={props.src} alt=""Card image cap/>
                        <CardBody>
                            <h4><CardTitle>{props.judul}</CardTitle></h4>
                            <p><CardSubtitle>{props.pengarang}</CardSubtitle></p>
                            <Button color="success">{props.harga}</Button>
                            <Button color="white"><Link to = {
                                {
                                    pathname : `/detail/${props.id}`,
                                    state : {
                                        judul: props.judul,
                                        src: props.src,
                                        pengarang: props.pengarang,
                                        harga: props.harga,
                                        deskripsi: props.deskripsi
                                    }
                                }
                            }>Detail</Link></Button>
                            
                        </CardBody>
                    </Card>
           

        </div>
    )
}

export default BukuComp