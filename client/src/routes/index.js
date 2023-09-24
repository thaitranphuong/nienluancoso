import { Fragment } from 'react';

import Home from '../Pages/Student/Home';
import Login from '../Pages/Auth/Login';
import Classroom from '../Pages/Student/Classroom';
import JoinClass from '../Pages/Student/JoinClass';
import Exam from '../Pages/Student/Exam';
import TakeTest from '../Pages/Test/TakeTest';
import EndTest from '../Pages/Test/EndTest';
import History from '../Pages/Test/History';
import Account from '../Pages/Auth/Account';

const publicRoute = [{ path: '/auth/login', component: Login, layout: null }];

const privateRoute = [
    { path: '/student/test/history', component: History },
    { path: '/student/test/take-test', component: TakeTest, layout: null },
    { path: '/student/test/end-test', component: EndTest },
    { path: '/student/', component: Home },
    { path: '/student/home', component: Home },
    { path: '/student/exam', component: Exam },
    { path: '/student/joinclass', component: JoinClass },
    { path: '/student/classroom', component: Classroom },
    { path: '/auth/account/:id', component: Account }, //sử dụng useParams của react router dom để lấy id
];

export { publicRoute, privateRoute };
