import React from 'react'

const Component1 = ({ onClickButton1, onClickButton2, button1Text, button2Text, xxx, reducer1State, reducer2State }) => {

  return (
    <div>
      {/* onClick ist ein Property des <a>-Elementes
      //onClickToLink ist die Funktion aus dem Container FilterLInk */}
      <button
        onClick={onClickButton1}
      >
        {button1Text}
      </button>
      <button
        onClick={onClickButton2}
      >
        {button2Text}
      </button>
      <p>{xxx}</p>
      <p>reducer1State: {reducer1State}</p>
      <p>reducer2State: {reducer2State}</p>
    </div>
  )
}

export default Component1