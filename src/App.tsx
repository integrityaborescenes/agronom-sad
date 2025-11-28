    import Header from "./components/Header/Header.tsx";
    import './styles/index.css'
    import Spreadsheet from "./components/Spreadsheet/Spreadsheet.tsx";
    import {useEffect} from "react";
    import {useDispatch, useSelector} from "react-redux";
    import type {AppDispatch, RootState} from "./store/store.ts";
    import {setVisitors} from "./store/slices/visitorSlice.ts";
    import Footer from "./components/Footer/Footer.tsx";
    import ModalWindow from "./components/ModalWindow/ModalWindow.tsx";
    import {resetSorting, sortByAbsent, sortByPresent} from "./store/slices/sortedSlice.ts";
    import {inputText} from "./store/slices/inputSlice.ts";

    function App() {
        const dispatch = useDispatch<AppDispatch>();
        const isModalOpen = useSelector((state: RootState) => state.isModalOpen.value)
        const searchName = useSelector((state: RootState)=> state.input.inputText)
        const sortBy = useSelector((state: RootState) => state.sortedBy.sortedBy)

        useEffect(() => {
            const params = new URLSearchParams(window.location.search)
            const nameParam = params.get('fullName_like') || '';
            const presentParam = params.get('present');

            if (presentParam === 'true') dispatch(sortByPresent());
            else if (presentParam === 'false') dispatch(sortByAbsent());
            else dispatch(resetSorting());

            if (nameParam) dispatch(inputText(nameParam));
        }, [dispatch]);

        useEffect(() => {
            const fetchParams = new URLSearchParams()
            if (sortBy === 'true') fetchParams.append('present', 'true');
            if (sortBy === 'false') fetchParams.append('present', 'false');

            if (searchName) fetchParams.append("fullName_like", searchName.trim().toLowerCase())

            const queryString = fetchParams.toString();
            const currentQuery = window.location.search.slice(1);

            if (queryString !== currentQuery) {
                window.history.replaceState({}, '', queryString ? `/?${queryString}` : '/');
            }

            fetch('http://localhost:3000/visitors?' + fetchParams.toString())
                .then((response) => response.json())
                .then((data) => dispatch(setVisitors(data)))
        }, [sortBy, searchName, dispatch]);


      return (
        <>
            <Header />
            {isModalOpen && <ModalWindow/>}
            <Spreadsheet />
            <Footer />
        </>
      )
    }

    export default App
