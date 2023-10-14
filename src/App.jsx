import './App.css'
import {Routes, Route} from 'react-router-dom'


import MainPage from "./pages/MainPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage/>}/>
                    <Route path='posts' element={<FormPage/>}/>

                    <Route path='*' element={<h1>не найдено</h1>}/>
                </Route>
            </Routes>
        </>
    )

}

export default App
