import React from "react";
import Togglable from "../components/Togglable";

const RaceInfo = ({race}) => {

    const abilityScoreIncreases = {
        "dragonborn" : "Your Strength score increases by 2, and your Charisma score increases by 1.",
        "dwarf" : "Your Constitution score increases by 2",
        "elf" : "Your Dexterity score increases by 2.",
        "gnome" :  "Your Intelligence score increases by 2.",
        "half-elf" : " Your Charisma score increases by 2, and two other ability scores of your choice each increase by 1.",
        "halfling" : "Your Dexterity score increases by 2.",
        "half-orc" : " Your Strength score increases by 2, and your Constitution score increases by 1.",
        "human" : "Your ability scores each increase by 1.",
        "tiefling" : "Your Charisma score increases by 2."
    }


    return (
    <Togglable buttonLabel = 'Show Ability score increases'>
        {abilityScoreIncreases[race]}
    </Togglable>

    )
}

export default RaceInfo