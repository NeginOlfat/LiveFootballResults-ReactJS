import React,{ useState, useEffect } from 'react';
import styles from './WeekPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchWeeks } from '../../api';

const WeekPicker= ({ handleWeekChange }) => {

    const [fetchedWeeks , setfetchedWeeks] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () => {
            setfetchedWeeks(await fetchWeeks());
        }

        fetchAPI();
    },[setfetchedWeeks]);
   
    if(!fetchedWeeks){
        return 'loading..';
    }
    return (
        
            <FormControl  >
                <NativeSelect className={styles._combo} defaultValue="" onChange={(e) => handleWeekChange(e.target.value)}>
                    <option value="test">Test</option>
                    {fetchedWeeks.map((utcDate, i) => <option key={i} value={utcDate}>{new Date({utcDate}).toDateString()}</option> )};
                </NativeSelect>
            </FormControl>
        
    )
}

export default WeekPicker
