import React, { useState, useEffect } from "react";
import {lazy,Suspense} from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Practise from "./components/Practise";

const AppComponent = ()=>{

    const [userName,setUserName] = useState(0);
    console.log(userName);
    useEffect(()=>{
        const details = {name:"Pranai Sai Reddy Kalva"};
        setUserName(details.name);
    },[])
    
    return <div>
        <Provider store={appStore}>
            <UserContext.Provider value = {{loggedInUser:userName, setUserName}}>
                <Header/>
                <Outlet/>
            </UserContext.Provider>
        </Provider>
        
    </div>
}

const Grocery = lazy(()=>import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppComponent/>,
        errorElement : <Error/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            ,
            {
                path: '/about',
                element : <About/>
            },
            {
                path:'contact',
                element: <Contact/>
            },
            {
                path:'/cart',
                element: <Cart/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback ="<h1>Im coming</h1>"> <Grocery /> </Suspense>
            },
            {
                path: '/restaurants/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/Practise',
                element:<Practise/>
            }
        ]    
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);

