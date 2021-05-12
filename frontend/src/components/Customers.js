import react, { useState, useEffect, Fragment } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const response = await fetch("/customers");
    const jsonData = await response.json();
    console.log(jsonData);
    setCustomers(jsonData);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="Customers">
      <div className="container">
        <h1 >List of all customers</h1>
        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Account Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr>
                <td>{customer.c_id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
