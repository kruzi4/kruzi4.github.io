import './assets/styles/style.scss'
import FormControl from "./components/FormControl";

function App() {
    return (
        <div className="page">
            <div className="mobile-top">
                <span className="burger"></span><span>Favourite</span>
            </div>
            <div className="content">
                <main className="main">
                    <h3 className="page-title">MSI 2020</h3>
                    <h1>Hey!</h1>
                    <h2 className="form-title">Let’s try to find a joke for you:</h2>
                    <FormControl />
                    <div className="jokes" id="jokes"></div>
                </main>
                <aside className="sidebar">
                    <h3 className="sidebar-title"><span className="burger active"></span><span>Favourite</span></h3>
                    <div className="favourite-cards-wrapper">
                        <div className="favourites">
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default App;
