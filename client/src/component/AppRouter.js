import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminPanel from '../pages/AdminPanel'
import Auth from '../pages/Auth'
import Basket from '../pages/Basket'
import DevicePage from '../pages/DevicePage'
import Shop from '../pages/Shop'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/constans"
import { useSelector } from 'react-redux'



const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.user)

  return (
    <Routes>
      {isAuth 
        ? <>
            <Route path={ADMIN_ROUTE} element={<AdminPanel />} />
            <Route path={BASKET_ROUTE} element={<Basket />} />
            <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} />
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route index path={SHOP_ROUTE} element={<Shop />} />
            <Route
              path="*"
              element={<Navigate to={SHOP_ROUTE} replace />}
            />
          </>
        : <>
            <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} />
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route index path={SHOP_ROUTE} element={<Shop />} />
            <Route
              path="*"
              element={<Navigate to={SHOP_ROUTE} replace />}
            />
          </>
      }
    </Routes>
  )
}

export default AppRouter