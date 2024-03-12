
import { Outlet, createBrowserRouter } from 'react-router-dom'

import { useGetStudentsQuery } from './Feature/StudentSlices'
import Read from './component/Read'
import { Provider } from 'react-redux'
import { Store } from './App/Store'
import Header from './component/Header'
import Create from './component/Create'

export const router = createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        children :[
          {
            path:"",
            element:<Read/>,
          },
          {
            path:"/create",
            element:<Create/>,
          },
          {
            path:"/edit/:id",
            element:<Create/>,
          },
        ]
      }
]) 

function App() {
  

  return (
    <>
    <Provider store={Store}>
    <Header/>
    <Outlet/>
    </Provider>
    
    </>
  )
}

export default App
