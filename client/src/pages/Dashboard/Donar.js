import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";

const Donar = () => {
  const [data, setData] = useState([]);

  // Function to generate dummy data
  const generateDummyData = () => {
    const dummyData = [
      {
        _id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        createdAt: "2023-11-01T09:00:00Z",
      },
      {
        _id: 2,
        name: "Alice Smith",
        email: "alice@example.com",
        phone: "987-654-3210",
        createdAt: "2023-11-02T10:00:00Z",
      },
      {
        _id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "111-222-3333",
        createdAt: "2023-11-03T11:00:00Z",
      },
      {
        _id: 4,
        name: "Ella Brown",
        email: "ella@example.com",
        phone: "444-555-6666",
        createdAt: "2023-11-04T12:00:00Z",
      },
      {
        _id: 5,
        name: "David Wilson",
        email: "david@example.com",
        phone: "777-888-9999",
        createdAt: "2023-11-05T13:00:00Z",
      },
      {
        _id: 6,
        name: "Emma Taylor",
        email: "emma@example.com",
        phone: "101-202-3030",
        createdAt: "2023-11-06T14:00:00Z",
      },
      {
        _id: 7,
        name: "Oliver Martinez",
        email: "oliver@example.com",
        phone: "404-505-6060",
        createdAt: "2023-11-07T15:00:00Z",
      },
      {
        _id: 8,
        name: "Sophia Adams",
        email: "sophia@example.com",
        phone: "606-707-8080",
        createdAt: "2023-11-08T16:00:00Z",
      },
      {
        _id: 9,
        name: "James Lee",
        email: "james@example.com",
        phone: "909-101-1122",
        createdAt: "2023-11-09T17:00:00Z",
      },
      {
        _id: 10,
        name: "Lily Clark",
        email: "lily@example.com",
        phone: "212-313-4141",
        createdAt: "2023-11-10T18:00:00Z",
      },
      {
        _id: 11,
        name: "William Rodriguez",
        email: "william@example.com",
        phone: "515-616-7171",
        createdAt: "2023-11-11T19:00:00Z",
      },
      {
        _id: 12,
        name: "Mia Garcia",
        email: "mia@example.com",
        phone: "818-919-2020",
        createdAt: "2023-11-12T20:00:00Z",
      },
      {
        _id: 13,
        name: "Henry Hernandez",
        email: "henry@example.com",
        phone: "313-414-5151",
        createdAt: "2023-11-13T21:00:00Z",
      },
    ];
    return dummyData;
  };

  useEffect(() => {
    const dummyDonars = generateDummyData();
    setData(dummyDonars);
  }, []);

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record._id}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Donar;
