import Header from "./components/Header/Header.tsx";
import './styles/index.css'
import Spreadsheet from "./components/Spreadsheet/Spreadsheet.tsx";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import type {AppDispatch} from "./store/store.ts";
import {setVisitors} from "./store/slices/visitorSlice.ts";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetch('http://localhost:3000/visitors')
            .then((response) => response.json())
            .then((data) => dispatch(setVisitors(data)))
    }, []);

  return (
    <>
        <Header />
        <Spreadsheet />
        <Footer />
    </>
  )
}

export default App
