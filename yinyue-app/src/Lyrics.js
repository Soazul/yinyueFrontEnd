import { useEffect } from "react";
const CLIENT_ACCESS_TOKEN = 'IGIL_BeqhIOJpgGH6gSHVtDfxkHAEeJKxSSs0e6L9GOsK8ZWdoNy-hj4eE1Cfe5P';

export function Lyrics({track}){

    return (
        track && <div>
            <h1>{track.name}</h1>
            <h1>{track.artists[0].name}</h1>
        </div> 
    );
}