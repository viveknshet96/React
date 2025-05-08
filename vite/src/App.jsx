import { useState } from 'react'
import Mycomponent from './Mycomponent'
import Mycompo from './mycompo'
import { Props, ClassComponent } from './props';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Motivational Quote</h1>
      <Mycomponent/>
      <Mycompo/>
      <Props name="vivek Nagesh shet" age={21} />
      <ClassComponent name="soughata" role="student in MSRIT"/>
    </>
  )
}

export default App
