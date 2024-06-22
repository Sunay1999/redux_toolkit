// import logo from './logo.svg';
import './App.css';
// import Product from './component/Product'
import 'bootstrap/dist/css/bootstrap.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import DashBoard from './component/DashBoard';
import RootLayout from './component/RootLayout';
import Cart from './component/Cart';

function App() {

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<DashBoard/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Route>
))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
