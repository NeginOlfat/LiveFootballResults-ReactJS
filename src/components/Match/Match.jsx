import React,{ useState , useEffect } from 'react';
import styles from './Match.module.css';
import { fetchData } from '../../api';

const Match=( {data:{utcDate, status, homeTeam, awayTeam, score, referees} }) => {
    
    const [matches,setMatches]=useState({});

    useEffect(() => {

        const fetchAPI = async () => {
            setMatches(await fetchData());
        }

        fetchAPI();

    });
    if(!homeTeam){
        return 'loading..';
    }
    
    return (
        
        <div className={styles._match}>
            <p>{new Date({utcDate}).toDateString()}</p>
            <div className={styles._team}>
                <div className={styles._homeTeam}>
                    {homeTeam}
                </div>
                <h3>{score.fullTime.homeTeam}  -   {score.fullTime.awayTeam}</h3>
                <div className={styles._awayTeam}>
                    {awayTeam}
                </div>
            </div> 
            <p>{ matches.map({status}) }</p>
            <p>Referee:{matches.map({referees})}</p>
        </div>
    )
}

export default Match
