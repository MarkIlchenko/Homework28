import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ExploreCreators from "./components/exploreCreators";

function App() {
  return (
    <div className="App flex">
        <Sidebar />
        <div className="container h-screen">
            <Header />
            <ExploreCreators />
        </div>
    </div>
  );
}

export default App;
