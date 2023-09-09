import Home from '../Pages/Student/Home';
import Login from '../Pages/Login';
import Classroom from '../Pages/Student/Classroom';
import JoinClass from '../Pages/Student/JoinClass';
import { Fragment } from 'react';

const publicRoute = [];

const privateRoute = [
    { path: '/student/', component: Home },
    { path: '/student/home', component: Home },
    { path: '/student/joinclass', component: JoinClass },
    { path: '/student/classroom', component: Classroom },
    { path: '/student/account', component: Fragment },
    { path: '/login', component: Login, layout: null },
];

export { publicRoute, privateRoute };
