import Header from "./components/Header/Header.tsx";
import './styles/index.css'
import Spreadsheet from "./components/Spreadsheet/Spreadsheet.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "./store/store.ts";
import {setVisitors} from "./store/slices/visitorSlice.ts";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    const dispatch = useDispatch<AppDispatch>();
    const sortBy = useSelector((state: RootState) => state.sortedBy.sortedBy)
    const searchName = useSelector((state: RootState)=> state.input.inputText)
    useEffect(() => {
        let query: string[] = []
        query.push(sortBy)
        if (searchName) query.push(`fullName_like=${searchName.trim().toLowerCase()}`)
        const queryString = query.length ? '?' + query.join('&') : ''
        fetch('http://localhost:3000/visitors' + queryString)
            .then((response) => response.json())
            .then((data) => dispatch(setVisitors(data)))
    }, [sortBy, searchName]);

  return (
    <>
        <Header />
        <Spreadsheet />
        <Footer />
    </>
  )
}

export default App
