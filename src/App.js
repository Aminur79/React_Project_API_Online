import React, { useEffect, useState } from 'react'
function App() {
  // hook for getting api
  const [data, setData] = useState([])

  // hook for running api instantly
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      }).catch((e) => {
        console.log("there is something wrong")
      })
  }, [])
}
return (
  <div>
    <h1>List of all the products</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
        <th>Image</th>
        <th colSpan={2}>Rating</th>
      </tr>
      {
        data.map((ecom) => (
          <tr>
            <td>{ecom.id}</td>
            <td>{ecom.title}</td>
            <td>{ecom.price}</td>
            <td>{ecom.description}</td>
            <td>{ecom.category}</td>
            <td><img src={ecom.image} style={{ width: "30px" }} /></td>
            <td>{ecom.rating.rate}</td>
            <td>{ecom.rating.id}</td>
          </tr>
        ))
      }
    </table>
  </div>
)

export default App




