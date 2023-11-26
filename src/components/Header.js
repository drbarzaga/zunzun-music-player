import React from 'react'
import { TbPlaylist } from "react-icons/tb";
import { MdNightlight, MdWbSunny } from "react-icons/md";


import './Header.css'
import { useTheme } from '../context/ThemeContext';

const Header = ({ onClickPlayList }) => {
    const { isDarkMode, toggleTheme } = useTheme()
    return (
        <div className='player-header'>
            <h3 className='player-title'>
                <img src='zunzun.png' alt='logo' />
                Zunzun Player
            </h3>

            <div className='player-header-actions'>
                <button onClick={toggleTheme}>
                    {isDarkMode ? <MdWbSunny /> : <MdNightlight />}
                </button>
                <button className='playlist-button' onClick={onClickPlayList}>
                    <TbPlaylist />
                </button>
            </div>
        </div>
    )
}

export default Header