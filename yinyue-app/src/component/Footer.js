import { Navbar } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

export default function Footer ({track}) {
    if(!track){
        console.error('No track found');
        
    }

    return (
        
        <Navbar fixed='bottom' style={{width: '100%' , backgroundColor: "#fff"}}>
            <div>
                <div>
                    {track ? <img src={track.album.images[2].url} alt="Album Cover" style={{ maxWidth: '100px' }} /> : <></>}
                    <div className="d-flex">
                        <i className="bi bi-skip-start-fill"></i>
                        <i className="bi bi-play-fill"></i>
                        <i className="bi bi-skip-end-fill"></i>
                    </div>
                    <ProgressBar now={70}/>
                    <div>
                        Volume
                    </div>
                </div>
            </div>
        </Navbar>
    );
}
