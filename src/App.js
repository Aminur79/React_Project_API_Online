import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e["there is something wrong"]);
      });
  }, []);

  return (
    <div class="container mt-4"> 
      <h1 class="text-center mb-3" id='d1'>List of all the products</h1> 

      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover"> 
          <thead>
            <tr>
              <th class="bg-primary">ID</th> 
              <th class="bg-primary">Title</th>
              <th class="bg-primary">Price</th>
              <th class="bg-primary">Description</th>
              <th class="bg-primary">Category</th>
              <th class="bg-primary">Image</th>
              <th class="bg-primary" colSpan="2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ecom) => (
              <tr key={ecom.id}>
                <td class="bg-secondary text-white">{ecom.id}</td>
                <td class="bg-secondary text-white">{ecom.title}</td>
                <td class="bg-secondary text-white">{ecom.price}</td>
                <td class="bg-secondary text-white">{ecom.description}</td>
                <td class="bg-secondary text-white">{ecom.category}</td>
                <td class="bg-secondary text-white">
                  <img src={ecom.image} alt={[]} style={{ width: "140px" }} />
                </td>
                <td class="bg-success text-white">{ecom.rating.rate}</td>
                <td class="bg-success text-white">{ecom.rating.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;