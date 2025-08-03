import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import NoteDetails from './pages/NoteDetails';
import { Route,Routes } from 'react-router';



const App = () =>     {
  return (
    <div data-theme="bumblebee">
      <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreateNote/>}/>
      <Route path="/note/:id" element={<NoteDetails/>}/>
    </Routes>
    </div>
    
  )
}
export default App;