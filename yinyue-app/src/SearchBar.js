import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useCallback} from 'react';
import './SearchBar.css';
import {DropdownMenu} from './DropdownMenu';

const CLIENT_ID = 'd15c16ff3a5540d38fd74e93eeced281';
const CLIENT_SECRET = 'bc9b30632c154b158e3d49008fc63296';

export function SearchBar(){
    const [isDropdown, setDropdown] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [songs, setSongs] = useState(null);

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
    }, [])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const enteredValue = event.target.value;
            setSearchInput(enteredValue);
            setDropdown(true);
        }
    };
    
    const search = useCallback(async () => {
        if (!searchInput) {
            console.log('Search input is empty');
            return;
        }
        console.log('search for ' + searchInput);
        var artistParameters = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            },
        };
        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
            .then((response) => response.json())
            .then((data) => data.artists.items[0].id);
        var songs = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?market=US', artistParameters)
            .then((response) => response.json())
            //.then((data) => console.log(data));
            setSongs(songs);
        }, [searchInput, accessToken]);
      

    useEffect(() => {
        if (searchInput) {
            search();
        }
        }, [searchInput, search]);

    return (
        <div className="input-group">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder='Search' onKeyPress={handleKeyPress}/>
            </div>
            {isDropdown && <DropdownMenu songs={songs}/>}
        </div>    
    );
}