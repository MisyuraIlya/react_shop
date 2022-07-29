import React from 'react';
import { useContext } from 'react';
import {Routes,Route,} from "react-router-dom";
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path,component}) => 
                <Route key={path} path={path} element={component} />
            )}
            {publicRoutes.map(({path,component}) => 
                <Route key={path} path={path} element={component} />
            )}
        </Routes>
    );
};

export default AppRouter;