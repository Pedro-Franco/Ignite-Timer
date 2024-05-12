import { Routes, Route  } from 'react-router-dom'
import { Home } from './pages/Home';
import { History } from './pages/History';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/Ignite-Timer/' element={<DefaultLayout/>}>
        <Route path='/Ignite-Timer/home' element={<Home/>}/>
        <Route path='/Ignite-Timer/history' element={<History/>}/>
      </Route>
    </Routes>
  );
}