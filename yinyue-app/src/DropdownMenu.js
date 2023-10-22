import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { handleItemClick } from 'react';
import { Row } from 'react-bootstrap';
import Song from './component/Song.js';
import { Lyrics } from './Lyrics.js';

export function DropdownMenu({songs}){
    return(
        <div>
        <Row className='row-cols-2'>
            {songs && songs.tracks.map((track) => (
                <Song track={track} onClick={() => handleItemClick}/>
            ))}
        </Row>
        
        </div>
    );       
}