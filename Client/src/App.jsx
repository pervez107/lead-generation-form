import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { EmailForm } from './components/Emai-form';

function App() {
 
  return (
    <div className=" body-background">
      <div className='bg-shade'>
        <h1 className='text-center text-white pt-4'>Lead Generation Form</h1>
        <BrowserRouter>

            <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path='/email-form' element={<EmailForm/>} />
            </Routes>

        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
