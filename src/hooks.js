// Your custom hook goes here!
import { useState } from "react";
import Modal from 'react-modal';

export const useToggleModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      }

    return (
            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <br></br>
                <label htmlFor='goal'>Your goal: </label>
                <input type="number" min="1" name="goal" defaultValue={goal} onChange={handleGoalChange} />
                <button onClick={toggleModal}>OK</button>
            </Modal>
    )
}

export const useToggleDarkLightMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);}
        )
}