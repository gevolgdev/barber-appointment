import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Confirm, Home, MyAppointments, NewAppointment } from './routes/index.ts';
import store from './redux/store.ts';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/marcar',
        element: <NewAppointment/>
      },
      {
        path: '/confirmar',
        element: <Confirm/>
      },
      {
        path: '/meus-horarios',
        element: <MyAppointments/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
