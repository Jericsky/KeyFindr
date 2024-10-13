import HomePage from './pages/HomePage/HomePage'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import ListPage from './pages/ListPage/ListPage'
import Layout from './pages/Layout/Layout'
import Navbar from './components/navbar/Navbar'
import SinglePage from './pages/SinglePage/SinglePage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/listing',
          element: <ListPage/>
        },
        {
          path: '/:id',
          element: <SinglePage/>
        }
      ]
    }
    
  ])

  return (
    // <div className="layout">
    //   <div className='navbar'>
    //     <Navbar/>
    //   </div>

    //   <div className='content'>
    //     <HomePage/>
    //   </div>
      
      
    // </div>

    <RouterProvider router={router}/>
  )
}

export default App