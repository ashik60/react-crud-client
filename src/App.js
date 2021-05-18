import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import Nav from './components/Nav';
import Students from './components/Students';
import UpdateStudent from './components/UpdateStudent';

function App() {
    return (
        <div className='container '>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route path='/add-student' component={AddStudent} />
                    <Route path='/update-student/:id' component={UpdateStudent} />
                    <Route path='/' exact component={Students} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
