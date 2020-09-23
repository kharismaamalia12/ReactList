import React from 'react';
import './components.css';
import Profile from '../images/profile.jpeg';

class TentangSaya extends React.Component{
    render(){
        return(
            <selection className="hollo">
                <img src={Profile} alt="masker" className="gambar2"></img>
                    <div className="ping">
                        <h2 className="display-4">
                            ABOUT ME
                        </h2>
                        <h3>Perkenalkan saya Kharisma Amalia Putri biasa dipanggil Risma. Saya
                            berumur 17 tahun. Saya anak pertama dari tiga bersaudara dan saya 
                            perempuan sendiriHobby saya memasak dan bersepeda. Saya berasal dari 
                            Kota Tulungagung. Saya dari jurusan Rekayasa Perangkat Lunak. Saya 
                            lulusan dari Madrasah Tsanawiyah Negeri 3 Tulungagung. 
                            <br/><br/>
                            Makanan favorit saya adalah nasi goreng krengsengan. Saya suka pedas dan
                            manis. Saya suka travelling ke jogja karena dijogja biaya nya murah. Saya 
                            juga suka makan dan minum yang berbau coklat. Saya termasuk orang yang penyabar,
                            penakut, dan saling membantu.
                        </h3>
                        <a className="btn btn-dark" href="https://corona.jakarta.go.id/id/faq">Learn More</a>
                    </div>
                    <br/><br/><br/>
                </selection>
        );
    }
}

export default TentangSaya;