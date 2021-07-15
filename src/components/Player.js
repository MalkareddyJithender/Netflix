import '../css/Player.css';
import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

function Player({itemFeature,category}) {
    const [showPlayer, setShowPlayer] = useState(false);
    const src= itemFeature.link;
      return (
      <>
        <button
            className="player__button"
            onClick={() =>
            {
                setShowPlayer(!showPlayer);
            }}
            >
                Play
            </button>
      {showPlayer && ReactDOM.createPortal(
        <div className="player">
            <div 
             className="player__overlay"
             onClick={() => setShowPlayer(false)}
             >
                <div className="player__inner">
                    <ReactPlayer
                     id="netflix-player"
                     width="100%"
                     height="380px"
                     url={src}
                     controls
                     />
                    
                </div>
            </div>
        </div>,
        document.body
    )}
    </>
    );
}

export default Player;

