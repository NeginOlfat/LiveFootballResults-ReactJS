import axios from 'axios';

const url='https://api.football-data.org/v2/competitions/2021/matches';
const token='ea7cb0230e764362aef72269a19ed9d5';

const header={ 
                'X-Auth-Token' : token,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Credentials' : true

             };

export const fetchData = async (week) =>{
    try{
        
        let changeableUrl = url;

        if (week) {
            changeableUrl = `${url}?utcDate=${week}`;
        }

        const { data  } = await axios.get(changeableUrl, header);
        
        const modifiedData=data.map((matches) =>({
            utcDate: matches.utcDate, 
            status : matches.status, 
            homeTeam : matches.homeTeam.name, 
            awayTeam : matches.awayTeam.name, 
            score : matches.score, 
            referees : matches.referees.name
        }));
        return modifiedData;

    }catch (error){
        console.log(error);
    }
}

export const fetchWeeks = async () => {

    try {
        
        const { data : {utcDate} } = await axios.get(url, header);
       
        return utcDate.map((utcDate) => utcDate);

        } catch (error) {
        console.log(error);
    }

}