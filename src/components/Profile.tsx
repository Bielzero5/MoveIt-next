import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return(
        <div className={ style.profileContainer}>
            <img src="https://github.com/Bielzero5.png" alt="Gabriel Ferreira"/>
            <div>
                <strong>Gabriel Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
} 