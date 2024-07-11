import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'

const RoutesController = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default RoutesController
