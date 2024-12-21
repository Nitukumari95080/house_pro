import { Outlet } from 'react-router-dom'
import Nav from './componets/Nav/Nav'
import Footer from './componets/Footer/Footer'
const App = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
