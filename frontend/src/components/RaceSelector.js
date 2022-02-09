import React from "react";

const RaceSelector = ({race, setRace}) => {
  const raceArray = ['', 'dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'tiefling']
  return (
    <div>
        <label>
          Selection of race
          <select name = "raceSelector" value = {race} id = "raceSelector" onChange={setRace}>
            {raceArray.map(race => (
              <option key = {race} value = {race}>
                {race}
              </option>
            ))}
          </select>
        </label>
    </div>
    )
}

export default RaceSelector