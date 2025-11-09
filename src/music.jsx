import spotify from '/assets/spotify_white.svg'


function Music() {
    return (
        <div className="music-container fade-in">
            <h2 className="sub-header">Music</h2>
            <div className="music-box">
              <a href="https://open.spotify.com/artist/5tibIorGHUrWe3Jxjo2N4i?si=ig8uBWO4TKynGoRHQWxhjw" target="_blank"><img className="music-icon" src={spotify}/></a>
              <span className="music-service">Spotify</span>
            </div>
            
        </div>
    )
}

export default Music;