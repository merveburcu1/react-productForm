import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import AddProduct from './components/AddProduct';
import UpdateForm from './components/UpdateForm';

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>

    },
    {
      path:"/add",
      element:<AddProduct/>
    },
    {
      path:"update/:id",
      element:<UpdateForm/>
    }
  ])

  return (
    <div className="App">

      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
