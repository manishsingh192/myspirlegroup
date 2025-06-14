import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AutomobileLayout from '../../pages/Public/Layouts/AutomobileLayout';
import Home from '../../pages/Public/Pages/Automobile/AutomobilePage/Pages/Home';
import Aboutus from '../../pages/Public/Pages/Automobile/AutomobilePage/Pages/Aboutus';

const AutomobileRoute = () => (
    <Routes>
        <Route path='/' element={<AutomobileLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<Aboutus />} />
        </Route>
    </Routes>
);

export default AutomobileRoute;
