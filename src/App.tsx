import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import DashboardPage from './pages/DashboardPage'
// import ServiceProviderPage from './pages/ServiceProviderPage'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Bounce, ToastContainer } from 'react-toastify'
// import CustomerPage from './pages/CustomerPage'
// import PaymentPage from './pages/PaymentPage'
// import RechargePage from './pages/RechargePage'
import LockScreen from './pages/LockScreen'
import LoginScreen from './pages/LoginScreen'
// import AppSettings from './pages/AppSettings'
// import Notifications from './pages/Notifications '
// import DevicesPages from './pages/DevicesPages'
// import Template from './pages/Template'
import SmsUserForm from './components/SmsUserForm'
import SmsUserPage from './pages/sms/User'
import SentSmsPage from './pages/sms/SentSms'
import FileExplorer from './pages/imageSever/Files'
import ChequeCreate from './pages/cheque'
import LeaveRequest from './pages/leave'
import KanBanBoardMain from './pages/kanbanboard/KanBanBoardMain'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='lock-screen' element={<LockScreen />} />
          <Route element={<AdminLayout />}>
            <Route path='/' element={<DashboardPage />} />
            {/* <Route path='service-provider' element={<ServiceProviderPage />} >
              <Route path=':service_provider_id'>
                <Route path='edit' />
              </Route>
            </Route> */}
            <Route path='sms/user' element={<SmsUserPage />} >
              <Route path=':user_id'>
                <Route path='view' />
                <Route path='edit' />
              </Route>
            </Route>
            <Route path='sms/sent' element={<SentSmsPage />} >
              {/* <Route path=':sms_id'>
                <Route path='view' />
                <Route path='edit' />
              </Route> */}
            </Route>
            <Route path='image/files' element={<FileExplorer />} >
              {/* <Route path=':customer_id'>
                <Route path='edit' />
              </Route> */}
            </Route>
            <Route path='cheque/create' element={<ChequeCreate />} >
              {/* <Route path=':payment_id'>
                <Route path='edit' />
              </Route> */}
            </Route>
            <Route path='leave/create' element={<LeaveRequest />} >
              {/* <Route path=':payment_id'>
                <Route path='edit' />
              </Route> */}
            </Route>
            <Route path='kanBanBoardMain/create' element={<KanBanBoardMain />} >
              {/* <Route path=':payment_id'>
                <Route path='edit' />
              </Route> */}
            </Route>
            {/* <Route path='recharge' element={<RechargePage />} >
              <Route path=':recharge_id'>
                <Route path='edit' />
              </Route>
            </Route> */}
            {/* <Route path='devices-pages' element={<DevicesPages />} /> */}
            {/* <Route path='notifications' element={<Notifications />} /> */}
            {/* <Route path='template' element={<Template />} />
            <Route path='app-settings' element={<AppSettings />} > */}
          </Route>
          {/* </Route> */}

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        draggable
        transition={Bounce}
      />
    </Provider>





  )
}

export default App
