import React from 'react'

type NameTagProps = {
  name: string
}

const App = () => {
  return (
    <div>

      <NameTag name="Evergreen" />
    </div>
  )
}


const NameTag = ({name}:NameTagProps) => {
  return (
    <div>


      <h2> {name} </h2>
    </div>
  )
}

export default App
