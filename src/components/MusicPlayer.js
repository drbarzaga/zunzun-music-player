import React from 'react'
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
// import { tracks } from '../data'
import Header from './Header'
import PlayList from './PlayList'
import 'animate.css';
import './MusicPlayer.css'
import { useTrack } from '../context/TrackContext'
import { useTheme } from '../context/ThemeContext'

const MusicPlayer = () => {
    const { isDarkMode } = useTheme()
    const { trackIndex, handlePlayListItemClick, showPlayList } = useTrack()

    const playerStyles = {
        background: isDarkMode ? '#1e1e1e' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
    };

    return (
        <div className='music-player' style={playerStyles}>
            <Header onClickPlayList={showPlayList} />
            <div className='music-player-body'>
                <div className='player'>
                    <DisplayTrack />
                    <ProgressBar />
                    <Controls />
                </div>
                <div className='animate__animated animate__slideInLeft'>
                    <PlayList trackIndex={trackIndex} onClick={handlePlayListItemClick} />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer