import './DropdownMenu.css';
import { useEffect, useState } from 'react';
import {handleItemClick} from 'react';

export function DropdownMenu({songs}){
    function handleItemClick(track) {
        console.log(`Clicked on song: ${track.name}`);
        // You can add more actions here
      }
    return(
        <div>
            {songs && songs.tracks.map((track) => (
                <div
                key={track.id}
                className="song-item"
                onClick={() => handleItemClick(track)} 
              >
                <div className="album-image">
                    <img src={track.album.images[0].url} alt="Album Cover" />
                </div>
                <div className="song-details">
                    <div className="song-name">{track.name}</div>
                    <div className="artist-name">{track.artists[0].name}</div>
                    <div className="song-duration">
                    {convertTime(track.duration_ms)}
                    </div>
                </div>
                </div>
        ))}
        </div>
    );  
}

function convertTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


  