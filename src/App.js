import React, { useState }  from 'react';
import './App.css';
import ReactH265Player from './ReactH265Player'

function App() {
  const [playerRef, setPlayerRef] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <ReactH265Player 
          width="500" height="500"
          url="h265_high.mp4"
          bufferSize={512 * 1024}
          isStream={false}
          errorHandler={e => {
            console.log("play error " + e.error + " status " + e.status + ".");
            if (e.error === 1) {
              // finish
            }
          }}
          passRef={ref => setPlayerRef(ref)} />

          <div>
            <button onClick={() => {
              playerRef.resume();
            }}>play</button>
            <button onClick={() => {
              playerRef.pause();
            }}>pause</button>
            <button onClick={() => {
              playerRef.stop()
            }}>stop</button>
          </div>
      </header>
    </div>
  );
}

export default App;
