import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("http://127.0.0.1:8000/api/list_items/") // Fetch items from your Django API
      .then((response) => setItems(response.data)) // Store fetched data in 'items'
      .catch((error) => console.error("Error fetching items:", error));
  };

  return (
    <div style={styles.container}>
      <h1>Stock Items </h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Additional Attribute</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.item_id}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.additional_attribute}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No items found in the database.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Basic styles to center the table
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  table: {
    borderCollapse: "collapse",
    width: "80%",
    marginTop: "20px",
  },
  th: {
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },
  td: {
    padding: "8px",
    border: "1px solid #ddd",
  },
};

export default App;
