import { Outlet } from 'react-router-dom'
import Nav from './componets/Nav/Nav'
const App = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
