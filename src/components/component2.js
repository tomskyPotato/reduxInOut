import React from 'react'

const Component2 = ({ onClickButton, name, reducer2State }) => {

  return (
    <div>
      <button
        onClick={() => onClickButton(0)}
      >
        Button1
      </button>
      <button
        onClick={() => onClickButton(1)}
      >
        Button2
      </button>
      <p>reducer1State: {name}</p>
    </div>
  )
}

export default Component2