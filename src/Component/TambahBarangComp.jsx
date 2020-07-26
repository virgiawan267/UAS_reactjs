import React, {Component} from 'react';
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahBarangComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama_barang: '',
            pengarang: '',
            harga_barang: '',
            response: '',
            display: 'none'
            
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addbarang = () => {
        axios.post(api+ '/tambahbarang', {
            nama_barang: this.state.nama_barang,
            pengarang: this.state.pengarang,
            harga_barang: this.state.harga_barang,
        }).then(json => {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Nama Buku</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan Nama Buku"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Pengarang</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="pengarang" value={this.state.pengarang} onChange={this.handleChange} placeholder="Masukan Pengarang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga Buku</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="harga_barang" value={this.state.harga_barang} onChange={this.handleChange} placeholder="Masukan Harga Buku"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button color ="success" type="button" onClick={this.Addbarang}>Submit</Button>
                            </Col>
                            <Col>
                            <Link to="/barang"><Button color="warning">kembali halaman barang</Button></Link>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahBarangComp;