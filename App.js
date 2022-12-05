import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {

    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'X-RapidAPI-Key': 'a9f165a07bmshe5b57916181a1cfp1e0362jsn3eb0d376b453',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response)
      console.log(response.data)
      setResponseData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

    
  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
        <button type='button' onClick={fetchData}>Click for Data</button>
      </header>
      <main>
        {responseData &&
          <blockquote>
            "{responseData && responseData.content}"
            <small>{responseData && responseData.originator && responseData.originator.name}</small>
          </blockquote>
        }
        </main>
      {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre> */}
    </div>
  );
}

export default App;