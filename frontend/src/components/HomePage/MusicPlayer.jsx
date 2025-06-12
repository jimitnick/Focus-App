import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicPlayer = () => {
  const [accessToken, setAccessToken] = useState('');
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState("lofi");

  useEffect(() => {
    axios.get("http://localhost:4000/api/token").then(res => {
      setAccessToken(res.data.access_token);
    });
  }, []);

  useEffect(() => {
    if (accessToken) {
      searchSongs();
    }
  }, [accessToken]);

  const searchSongs = async () => {
    if (!accessToken) return;

    console.log("Access token:", accessToken);
    console.log("Query:", query);

    try {
      const result = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: "track",
          limit: 10,
        },
      });

      console.log("Tracks:", result.data.tracks.items);
      setTracks(result.data.tracks.items);
    } catch (err) {
      console.error("Search error", err?.response?.data || err.message);
    }
  };

  return (
    <div className='w-full h-[300px] bg-white flex flex-col p-4 rounded-xl shadow-md'>
      <div className='flex justify-between items-center border-b-1 p-3'> 
        <span className='text-black text-md font-bold'>Play your favourite music..</span>
      </div>
      <div className="w-full flex p-4 gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border p-2 w-full"
          placeholder="Search for a song"
        />
        <button onClick={searchSongs} className="p-2 bg-green-500 text-white cursor-pointer">
          Search
        </button>
      </div>
      <div className='overflow-y-auto'>
        <ul className="p-4">
          {tracks?.map((track) => (
            <li key={track.id} className="my-4">
              <p>{track.name} - {track.artists[0]?.name}</p>
              {track.preview_url ? (
                <audio controls src={track.preview_url} />
              ) : (
                <p className="text-gray-500 text-sm">No preview available</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default MusicPlayer;
