import React from 'react'
import Service from './Server/Service';
import './App.css';

function App() {
  return (
    <div className="card-container">
      <img className='background' src='https://images.unsplash.com/photo-1546074176-abecd33d2b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='' />
      <div className="title-container">
        <div className="title">
          <h1>
            You are invited!!
          </h1>
          <h3>
            Come join us in Wendy and Danny's baby shower!
          </h3>
        </div>
      </div>
      <div className="body-content">
        <ul>
          <li>
            <p>
              When:
            </p>
            <p>
              February 25th, 2023
            </p>
          </li>
          <li>
            <p>
              Where:
            </p>
            <p>
              Lower Scholls Canyon Park
            </p>
          </li>
          <li>
            <p>
              Directions:
            </p>
            <p>
              2849 E. Glenoaks Blvd
              Glendale, CA 91206
            </p>
          </li>
        </ul>
        <h2>
          Important times:
        </h2>
        <ul>
          <li>
            <p>
              Party starts:
            </p>
            <p>
              1:00pm
            </p>
          </li>
          <li>
            <p>
              Food is served:
            </p>
            <p>
              3:00pm - 5:00pm
            </p>
          </li>
        </ul>
      </div>
      <div id='registry-container'>
        <h1>
          Baby Registry
        </h1>
        <p>
          If you would like to see our baby registry, you can click <span><a target="_blank" href='https://www.amazon.com/baby-reg/wendy-osuna-may-2023-mountlaketerrace/2CGY89WMV121F'>here</a></span>.
        </p>
      </div>
      <Service/>
    </div>
  );
}

export default App;
