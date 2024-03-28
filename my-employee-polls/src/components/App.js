
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/reducers/users";
function App() {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
   
    console.log(users);
  }, [dispatch]);


  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
          Learn React
  
      </header>
    </div>
  );
}

export default App;
