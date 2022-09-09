import './css/App.css';
import './css/navbar.css';
import { useSelector } from "react-redux"
import ScreenContainer from "./components/App/ScreenContainer";
import NavBar from "./components/App/NavBar";
import Footer from "./components/App/Footer";

function App() {
    const userSignin = useSelector(state => state.userSignin);
    const { userLogin } = userSignin;



    return (
        <div className="main">
            <header className="app-header">
                <h1> SJSU ONLINE BANKING </h1>
                {userLogin && <NavBar/>}
            </header>
            <ScreenContainer />
            { userLogin &&
            (<footer id="app-footer">
                <Footer/>
            </footer>)}
        </div>
    );
}

export default App;
