import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import Footer from './Footer.js'
function Song({track}) {    
    const [selectedTrack, setSelectedTrack] = useState('');
    function handleClick() {
        console.log(track);
        
    }

    return (
        <>

        <div>
            <Card key={track.id} style={{backgroundColor: '#6E6F78',marginBottom: '0.3rem', marginTop: "0.3rem"}} onClick={handleClick}>
                <Card.Body className='d-flex'>
                    <div>
                        <img src={track.album.images[0].url} alt="Album Cover" style={{ maxWidth: '100px', paddingRight: '1rem'}} />
                        <div></div>
                            <Card.Title style={{ color: '#DCDEE1'}}>{track.name}</Card.Title>
                            <Card.Text style={{ color: '#DCDEE1'}}>{track.artists[0].name}</Card.Text>
                        
                        <div>
                            <Card.Text style={{ color: '#DCDEE1'}}>{convertTime(track.duration_ms)}</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Footer track={selectedTrack} />
        </div>
                </>
        
    );
}

export default Song;

function convertTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
} 