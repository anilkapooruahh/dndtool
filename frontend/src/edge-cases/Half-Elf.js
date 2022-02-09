import React from "react";

const HalfElf = ({ atr1, atr2, setAtr1, setAtr2 }) => {
    const atrArray = ["", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma" ]
    return (
        <>
        <div>
        <label>
          First upgrade
          <div>
          <select name = "raceSelector" value = {atr1} id = "raceSelector" onChange={setAtr1}>
            {atrArray.map(race => (
              <option key = {race} value = {race}>
                {race}
              </option>
            ))}
          </select>
          </div>
        </label>
        </div>
        <div>
            <select name = "atr2Selector" value = {atr2} id onChange={setAtr2}>
            {atrArray.map(atr => (
              <option key = {atr} value = {atr}>
                {atr}
              </option>
            ))}
            </select>
        </div>
        </>
    )
}

export default HalfElf