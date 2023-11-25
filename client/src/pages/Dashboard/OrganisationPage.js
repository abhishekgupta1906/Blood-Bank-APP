import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";

const OrganisationPage = () => {
  // Dummy data for organisations
  const dummyOrganisations = [
    {
      _id: 1,
      organisationName: "Org A",
      email: "orgA@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
      createdAt: "2023-11-01T09:00:00Z",
    },
    // Add 12 more dummy organisation objects...
    // ... (Add dummy data in the same format as above)
  ];

  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // Logic to fetch organisation data (dummy data for demonstration purposes)
  const getOrg = () => {
    // Assuming the user role determines the data for organisations
    let orgData = [];

    if (user?.role === "donar") {
      orgData = dummyOrganisations.slice(0, 7); // Dummy data for "donar" role
    } else if (user?.role === "hospital") {
      orgData = dummyOrganisations.slice(7); // Dummy data for "hospital" role
    }

    setData(orgData);
  };

  useEffect(() => {
    getOrg();
  }, ); // Trigger effect when the user changes

  return (
    <Layout>
      <table className="table">
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
              <td>{record.organisationName}</td>
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

export default OrganisationPage;
