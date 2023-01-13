import './App.css';
import IndexPage from './components';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import Hello from './components/ListPage'

function App() {
  return (
    <IndexPage/>
    // <Router>
    //   <IndexPage/>
    //   <Link to="/TodoList">
    //     <Button/>
    //   </Link>

    //   <Routes>
    //       <Route path="/TodoList" exact element={<Hello/>}>
    //       </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
