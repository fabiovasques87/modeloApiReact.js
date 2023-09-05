  import axios from "axios";
  import {React, useEffect, useState} from "react";


  const App = ()  => {

    const  [user, setUser]= useState ('');

    useEffect(()=>{
      api()
    },[])

    const api = async() => {

      try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
        setUser(data);
      }catch(error) {
      console.error(error);
      }

    }

    

    return (

      

      
      <div>

        <h1>Dados trazidos da Api</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }

  export default App;
