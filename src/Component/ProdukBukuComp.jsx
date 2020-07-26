import React from 'react'
import { Row, Container, Col, Button } from 'reactstrap';
import BukuComp from './BukuComp';
import MenuComp from './MenuComp';
import { Link } from 'react-router-dom';

const ProdukBukuComp = (props) => {

    return (
        <div>
            <Container>
                <hr />
                <h2>Buku </h2>
                <Row>
                    <Col><BukuComp id="1" src="https://cdn.gramedia.com/uploads/items/9786024814151_Emboss_Kartun_Statistik_FINAL_-1.jpg" judul="Kartun Statistik (2020)" pengarang="Larry Gonick" harga="Rp. 60.000" deskripsi="Mengutip Benjamin Disraeli, Mark Twin menyatakan, ada tiga macam kebohongan: lies, damned lies, and statisctics. Karena disebut terakhir, pernyataan itu mengesankan, statistik yang paling parah. Akan tetapi, bukankah memang banyak orang menggunakan statistik untuk menggertak lawan diskusi? Opini kosong disulap menjadi berbobot dengan bumbu angka atau metode statistik?
Statistik sebagai ilmu dan juga metode sesungguhnya netral dan bermata ganda. Memahami statistik bisa membantu kita, antara lain, membaca data dan melihat pola serta peluang, yang sangat vital saat ini ketika dusta susah dipisahkan dari fakta. Kartun Statistik membahas hampir semua konsep dasar statistik, mulai dari menyarikan dan menyajikan data, probabilitas, mengambil sampel, intervat keyakinan, menguji hipotesis, sampai desain eksperimen. Semua konsep itu dipaparkan dengan sederhana, jernih, tentu dengan ilustrasi yang kocak. Setelah membaca Kartun Statistik kamu tak bakal lagi meminta maaf atas kesalahan standar.
Larry Gonick ialah kartunis dengan gelar Master di bidang Matematika dari Harvard University. Woollcott Smith ialah profesor statistik yang aktif di bidang penelitian dan konsultasi statistik."/></Col>
                    <Col><BukuComp id="2" src="https://cdn.gramedia.com/uploads/items/9786024813987_Ragam_Akalbudi_Emboss_FINAL_-1.jpg" judul="Ragam Akalbudi" pengarang="DANIEL C. DENNETT" harga="Rp. 80.000" deskripsi="Manusia dikatakan istimewa karena memiliki akalbudi (mind). Namun apakah hanya manusia yang punya akalbudi? Daniel C. Dennett memadukan filsafat, ilmu biologi saraf, evolusi, dan gagasan kecerdasan buatan untuk membahas banyak pertanyaan menarik terkait akalbudi: Apakah kita bisa yakin semua manusia punya akalbudi? Mungkinkah hewan, tumbuhan, bahkan mesin punya akalbudi? Apa hubungan akalbudi dengan pengetahuan, bahasa, penderitaan? Barangkali, apa yang kita pikir kita ketahui mengenai akalbudi layak ditinjau kembali, berdasarkan gagasan sains dan filsafat terbaru, agar kita bisa mempertajam pertanyaan-pertanyaan besar mengenai akalbudi." /></Col>
                    <Col><BukuComp id="3" src="https://cdn.gramedia.com/uploads/items/9786230013546_Cover_Good_is_Not_Enough.jpg" judul="Good Is Not Enough" pengarang="FRANS GOLDENA" harga="Rp. 60.000" deskripsi="Menjadi baik itu memang baik. Tapi menjadi baik saja itu artinya Anda sedang membatasi diri atau dalam bahasa yang lebih ekstrem, menutup peluang Anda untuk sesuatu yang jauh lebih luar biasa dari yang sedang Anda rencanakan, pikirkan dan nikmati saat ini." /></Col>
                    <Col><BukuComp id="4" src="https://cdn.gramedia.com/uploads/items/9786024813130_gen.jpg" judul="Siddhartha Mukherjee" pengarang="Gen" harga="Rp. 150.000" deskripsi="Apa yang membentuk diri, kehidupan, sifat, bahkan nasib manusia? Pencarian selama ribuan tahun menunjukkan adanya unsur pembawa pewarisan sifat antargenerasi makhluk hidup, termasuk manusia. Ternyata unsur itu bukan sesuatu yang gaib, bukan bintang-bintang jauh, melainkan ada dalam diri kita, berwujud fisik sehingga bisa ditemukan upaya sains: gen, instruksi pembentukan dan pengoperasian tubuh yang tertulis di molekul asam deoksiribonukleat (DNA) di seluruh sel kita.
Sejarah gen, mulai dari gagasan awal, perumusan prinsip, penemuan struktur, sampai rekayasanya, disampaikan melalui kisah para pencarinya, dari Aristoteles dan Mendel, Watson dan Crick, hingga saintis abad ke-21. Dan sesudah mengetahui mengenai gen dan pengaruhnya bagi hidup, kepribadian, dan nasib, kita menghadapi tantangan sekaligus peluang: apa jadinya jika kita bisa mengetahui kecenderungan fisik bawaan gen? Bisakah kehidupan diperbaiki dengan rekayasa gen? Siapkah kita memegang kemampuan mengubah nasib genetis umat manusia?"/></Col>
                </Row>
                <Row>
                    <Col><BukuComp id="5" src="https://cdn.gramedia.com/uploads/items/9786024813444_pohon_Sesawi_edisi2020.jpg" judul="Pohon-Pohon Sesawi (2020)" pengarang="Y.b. Mangunwijaya" harga="Rp. 60.000" deskripsi="Sebelum meninggal, Romo Mangun pernah bercerita bahwa ia sedang mengerjakan sebuah novel. Mungkin novel inilah yang dimaksud. Semula, naskah novel ini berupa berkas-berkas yang ditulis dengan mesin ketik, tercerai-berai, penuh coretan, sehingga tidak mudah dibaca. Setelah diketik ulang dan disunting seperlunya oleh orang-orang yang dekat dengan Romo Mangun, KPG (Kepustakaan Populer Gramedia) menerbitkannya sebagai buku.
Membaca novel ini kita menangkap kesan kuat bahwa lewat karyanya ini Romo Mangun ingin merefleksikan perjalanannya sebagai imam dengan romantika dan konflik-konflik batinnya. Ditulis dengan bahasa yang segar, jenaka, dan penuh sindiran khas Romo Mangun."/></Col>
                    <Col><BukuComp id="6" src="https://cdn.gramedia.com/uploads/items/9786024526986_Sebuah-Seni-Untuk-Bersikap-Bodo-Amat.jpg" judul="Sebuah Seni untuk Bersikap Bodo Amat" pengarang="Mark Manson" harga="Rp. 58.000" deskripsi="Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer—telah membantu mengoreksi harapan-harapan delusional kita, baik mengenai diri kita sendiri maupun dunia. Ia kini menuangkan buah pikirnya yang keren itu di dalam buku hebat ini.

Dalam hidup ini, kita hanya punya kepedulian dalam jumlah yang terbatas. Makanya, Anda harus bijaksana dalam menentukan kepedulian Anda. Manson menciptakan momen perbincangan yang serius dan mendalam, dibungkus dengan cerita-cerita yang menghibur dan kekinian, serta humor yang cadas. Buku ini merupakan tamparan di wajah yang menyegarkan untuk kita semua, supaya kita bisa mulai menjalani kehidupan yang lebih memuaskan, dan apa adanya."/></Col>
                    <Col><BukuComp id="7" src="https://cdn.gramedia.com/uploads/items/mindset.jpg" judul="Mindset" pengarang="Carol S. Dweck, Ph.d." harga="Rp. 100.000" deskripsi="Buku ini menjelaskan dengan gamblang bagaimana keyakinan atas kemampuan yang kita miliki amat berpengaruh terhadap cara kita belajar dan menentukan pilihan di dalam kehidupan" /></Col>
                    <Col><BukuComp id="8" src="https://cdn.gramedia.com/uploads/items/9786020639536_nebula_cov.jpg" judul="Nebula" pengarang="Tere Liye" harga="Rp. 68.000" deskripsi="SELENA dan NEBULA adalah buku ke-8 dan ke-9 yang menceritakan siapa orangtua Raib dalam serial petualangan dunia paralel. Dua buku ini sebaiknya dibaca berurutan. Kedua buku ini juga bercerita tentang Akademi Bayangan Tingkat Tinggi, sekolah terbaik di seluruh Klan Bulan. Tentang persahabatan tiga mahasiswa, yang diam-diam memiliki rencana bertualang ke tempat-tempat jauh. Tapi petualangan itu berakhir buruk, saat persahabatan mereka diuji dengan rasa suka, egoisme, dan pengkhianatan. Ada banyak karakter baru, tempat-tempat baru, juga sejarah dunia paralel yang diungkap. Di dua buku ini kalian akan berkenalan dengan salah satu karakter paling kuat di dunia paralel sejauh ini. Tapi itu jika kalian bisa menebaknya. Dua buku ini bukan akhir. Justru awal terbukanya kembali portal menuju Klan Aldebaran." /></Col>


                </Row>
                
                <Col><Link to="homepage"><Button>Kembali</Button></Link></Col>

            </Container>
        </div>
    )
}

export default ProdukBukuComp