import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const routes = [
    {
        name:'Home',
        path: '/',
        main: () =>  <h2>home</h2>
    },
    {
        name:'About',
        path: '/about',
        main: () =>  <h2>about</h2>
    },
    {
        name:'Skills',
        path: '/skills',
        main: () =>  <h2>skills</h2>
    },
    {
        name:'Education',
        path: '/education',
        main: () =>  <h2>education</h2>
    },
    {
        name:'Work',
        path: '/work',
        main: () =>  <h2>work Experience</h2>
    },
    {
        name:'contact',
        path: '/contact',
        main: () =>  <h2>contact</h2>
    }
];

function Main(props) {
    return (
        <Router>
            <div className='d-flex w-5'>
                <div>
                    {
                        routes.map((route,index) => (
                            <li>
                                <Link key={index} to={route.path}>
                                    {
                                        route.name
                                    }
                                </Link>
                            </li>
                        ))
                    }
                </div>
                <div>
                        <Routes>
                            {
                                routes.map((route,index) => (
                                    <Route key={index} element={<route.main />} path={route.path} />
                                ))
                            }
                        </Routes>
                </div>
            </div>

        </Router>
    );
}

export default Main;