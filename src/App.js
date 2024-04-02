import { useEffect, useState } from "react";
import axios from 'axios';
//import React from "react";

function App() {
  const [tutorials, settutorials] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try{

      const fetchItems = async () => {
        const response = await axios.get('http://localhost:8080/api/tutorials');
        settutorials(response.data);
      };

      fetchItems();
    }
    catch(error){
      console.error("O Erro foi no fetch");
      return error;
    }
    finally{
      setLoading(false);
    }
  }, []);


  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>tutorials</h1>
          <table className="style-table">
          <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>published</th>
                <th>updatedAt</th>
                <th>createdAt</th>
              </tr>
            </thead>  
            <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial.id}>
                <td>{tutorial.id}</td>
                <td>{tutorial.title}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.publshed? "true" : "false"}</td>
                <td>{tutorial.updatedAt}</td>
                <td>{tutorial.createdAt}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}
      
   
    </div>
  );
}

export default App;
