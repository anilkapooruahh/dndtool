import React, { useState, useEffect } from "react";
import RaceSelector from "./components/RaceSelector";
import HalfElf from "./edge-cases/Half-Elf";
import RaceInfo from "./info/raceInfo";


function App() {
  //state management
  const [attributeArray, setArrayAttributes] = useState([0,0,0,0,0,0])
  const [raceBonus, setRaceBonus] = useState([0,0,0,0,0,0])
  const [specialRaceBonus1, setSpecialRaceBonus1] = useState([0,0,0,0,0,0])
  const [specialRaceBonus2, setSpecialRaceBonus2] = useState([0,0,0,0,0,0])
  const [Race, setRace] = useState("R")
  const [Class, setClass] = useState("")
  const [atr1, setAtr1]  = useState("")
  const [atr2, setAtr2] = useState("")
  const test = event => {
    event.preventDefault()
    setArrayAttributes([0,0,0,0,0,0])
  }
  //In Dnd, Attributes follow the standard order of strength, dexterity, constitution, intelligence, wisdom and charisma
  //or str, dex, cons, int, wis, chr
  const raceBonusTable = {
    "": [0,0,0,0,0,0],
    "dragonborn" : [2,0,0,0,0,1],
    "dwarf" : [0,0,2,0,0,0],
    "elf": [0,2,0,0,0,0],
    "gnome" : [0,0,0,2,0,0],
    "half-elf" : [0,0,0,0,0,2],
    "halfling" : [0,2,0,0,0,0],
    "half-orc" : [2,0,1,0,0,0],
    "human" : [1,1,1,1,1,1],
    "tiefling" : [0,0,0,0,0,2]
  }
  const zipadd = (a,b) => a.map((k,i) => k + b[i])
  const handleRaceChange = ({target}) => {
    setRaceBonus(raceBonusTable[target.value])
    setRace(target.value)    
  }


  const handleAtr1 =  ({target}) => {
    setSpecialRaceBonus1([0,0,0,0,0,0].map((atr, i) => atrtonum[target.value] === i ? 1 : 0))
  }
  const handleAtr2 =  ({target}) => {
    setSpecialRaceBonus2([0,0,0,0,0,0].map((atr, i) => atrtonum[target.value] === i ? 1 : 0))
  }
  const atrtonum = {
    "strength" : 0,
    "dexterity": 1,
    "constitution" :2,
    "intelligence" :3,
    "wisdom" : 4,
    "charisma": 5
  }
   
  return (
    <div className="App">
      <h1>Create a level 1 Dnd Character</h1>
      <p>Dnd can be confusing and rule-heavy for new players. Since most online resources tend to lock features behind a paywall. 
         I made this to make the process easier.
      </p>
      {/*Race Selection*/}
      <RaceSelector setRace = {({target}) => handleRaceChange({target})} race = {Race}/>
      <RaceInfo race = {Race} />
      {Race === "half-elf" ? <HalfElf atr1={atr1} atr2={atr2} setAtr1={handleAtr1} setAtr2={handleAtr2}/>
                           : <p></p>}
      {/* Class Selection*/}
      <button onClick={test}>test</button>
      {/*Attribute Selection*/}

    {Race}

    <h2>Breakdown of Attributes</h2>
    <p>Racial bonuses</p>
    {raceBonus}
    <p>Other bonuses granted via race</p>       
    {specialRaceBonus1} <br></br>
    {specialRaceBonus2} <br></br>
    {raceBonus.map((atr, i) => atr + specialRaceBonus1[i] + specialRaceBonus2[i])}

  
    </div>
  
  );
}

export default App;
