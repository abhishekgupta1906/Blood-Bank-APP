import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";

const Hospitals = () => {
  const [data, setData] = useState([]);

  // Dummy hospital data
  const dummyHospitals = [
    {
      _id: 1,
      hospitalName: "Hospital A",
      email: "hospitalA@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
      createdAt: "2023-11-01T09:00:00Z",
    },

    {
      _id: 2,
      hospitalName: "Hospital B",
      email: "hospitalB@example.com",
      phone: "987-654-3210",
      address: "456 Oak Ave, Town, Country",
      createdAt: "2023-11-02T10:00:00Z",
    },
    {
      _id: 3,
      hospitalName: "Hospital C",
      email: "hospitalC@example.com",
      phone: "111-222-3333",
      address: "789 Elm St, Village, Country",
      createdAt: "2023-11-03T11:00:00Z",
    },

    {
      _id: 4,
      hospitalName: "Hospital D",
      email: "hospitalD@example.com",
      phone: "444-555-6666",
      address: "101 Pine St, City, Country",
      createdAt: "2023-11-04T12:00:00Z",
    },
    {
      _id: 5,
      hospitalName: "Hospital E",
      email: "hospitalE@example.com",
      phone: "777-888-9999",
      address: "202 Oak Ave, Town, Country",
      createdAt: "2023-11-05T13:00:00Z",
    },
    {
      _id: 6,
      hospitalName: "Hospital F",
      email: "hospitalF@example.com",
      phone: "101-202-3030",
      address: "303 Elm St, Village, Country",
      createdAt: "2023-11-06T14:00:00Z",
    },
    {
      _id: 7,
      hospitalName: "Hospital G",
      email: "hospitalG@example.com",
      phone: "404-505-6060",
      address: "404 Pine St, City, Country",
      createdAt: "2023-11-07T15:00:00Z",
    },
    {
      _id: 8,
      hospitalName: "Hospital H",
      email: "hospitalH@example.com",
      phone: "606-707-8080",
      address: "505 Oak Ave, Town, Country",
      createdAt: "2023-11-08T16:00:00Z",
    },
    {
      _id: 9,
      hospitalName: "Hospital I",
      email: "hospitalI@example.com",
      phone: "909-101-1122",
      address: "606 Elm St, Village, Country",
      createdAt: "2023-11-09T17:00:00Z",
    },
    {
      _id: 10,
      hospitalName: "Hospital J",
      email: "hospitalJ@example.com",
      phone: "212-313-4141",
      address: "707 Pine St, City, Country",
      createdAt: "2023-11-10T18:00:00Z",
    },
    // Add 12 more dummy hospital objects here...
  ];

  useEffect(() => {
    setData(dummyHospitals);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Hospitals;
