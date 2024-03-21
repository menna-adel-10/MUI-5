import './App.css'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import { Container, } from '@mui/material'

function App() {
  

  return (
    <>
        <Container>
            <Sidebar />
            <Feed />
            <Rightbar />
        </Container>
    </>
  )
}

export default App
