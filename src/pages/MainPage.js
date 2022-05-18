import { useState } from 'react';

import '../App.css';
import Header from '../components/Header';
import TrackerContainer from '../containers/TrackerContainer';
import UserContext from '../context/UserContext'
import {useToggleModal} from '../hooks.js'

const MainPage = () => {

    const [name, setName] = useState('Stranger');
    const [goal, setGoal] = useState(1);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
  
    const handleGoalChange = (e) => {
        setGoal(parseInt(e.target.value))
    }

   

    return (
        <>
        
        {useToggleModal}

            <UserContext.Provider value={{name, goal}}>
                <Header />
                <TrackerContainer />
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
