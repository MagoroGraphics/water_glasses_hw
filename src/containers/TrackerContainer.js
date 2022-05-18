import { useContext, useState } from 'react';
import TrackerDisplay from "../components/TrackerDisplay";
import UserContext from '../context/UserContext';
import FormContainer from "./FormContainer";

const TrackerContainer = () => {

    const {name} = useContext(UserContext);
    const {goal} = useContext(UserContext)



    const [glasses, setGlasses] = useState(0);

    const handleUpdate = (updateAmount) => {
        if (glasses + updateAmount < 0) {
            setGlasses(0);
        }
        else {
            setGlasses(parseInt(glasses + updateAmount));
        }
    }

    const handleEmpty = () => {
        setGlasses(0);
    }

    return (
        <>
            <TrackerDisplay glasses={glasses} name={name} goal={goal} />
            <FormContainer handleUpdate={handleUpdate} handleEmpty={handleEmpty} />
        </>
    )
}

export default TrackerContainer;
