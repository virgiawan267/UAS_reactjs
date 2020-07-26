
import React, { Fragment, useContext, useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from 'reactstrap';


import { Jumbotron, Button } from 'reactstrap';
import { AuthContext } from '../App';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuComp from './MenuComp';

const items = [
    {
        src: 'https://i0.wp.com/februarian.id/wp-content/uploads/2019/11/Toko-Buku-Online-Favorit.jpg?resize=1170%2C500&ssl=1',
        altText: 'Slide 1'
    },
    {
        src: 'https://www.iac.or.id/wp-content/uploads/2018/05/Graphic-Designer-1170x500.jpg',
        altText: 'Slide 2'
    },
    {
        src: 'https://s3-ap-southeast-1.amazonaws.com/jurnal-blog-assets/wp-content/uploads/2018/12/23114026/Jurnal_Blog_Jurnal_Blog_Branding-Unsur-Jenis-Tujuan-dan-Manfaatnya-yang-Harus-Anda-Ketahui-1170x500.jpg',
        altText: 'Slide 3'
    }
];


function HomeComp() {
    const { state, dispatch } = useContext(AuthContext)
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const token = localStorage.getItem('token')
    if (!token) {
        return <Redirect to="/" />
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (


            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });


    return (

        <Container>
            <Jumbotron>
                <h2 className="display-3">Selamat Datang, {state.user}</h2>
                <hr className="my-2" />
                <p className="lead">
                    <h3>Pilih Halaman</h3>
                </p>
                <Link to="/produk"><Button color="primary">Buku</Button>{' '}</Link>
                <Link to="/barang"><Button color="primary">Data Buku</Button>{' '}</Link>
            </Jumbotron>

            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </Container>

    )
}


export default HomeComp