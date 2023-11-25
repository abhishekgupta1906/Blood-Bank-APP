import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

  // Function to generate random dummy blood group data
  const generateRandomBloodGroupData = () => {
    const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const dummyData = [];

    for (let i = 0; i < 15; i++) {
      const randomBloodGroup =
        bloodGroups[Math.floor(Math.random() * bloodGroups.length)];
      const record = {
        bloodGroup: randomBloodGroup,
        totalIn: Math.floor(Math.random() * 1000) + 500,
        totalOut: Math.floor(Math.random() * 500) + 100,
        availabeBlood: Math.floor(Math.random() * 1000) + 500,
      };
      dummyData.push(record);
    }
    return dummyData;
  };

  //GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      // Simulating API call with dummy data
      const dummyBloodGroupData = generateRandomBloodGroupData();
      setData(dummyBloodGroupData);
      // Uncomment below code to fetch data from API
      /*
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
      */
    } catch (error) {
      console.log("Error fetching blood group data:", error);
    }
  };

  // Lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  // Function to generate dummy recent blood transactions
  const generateDummyTransactions = () => {
    const dummyTransactions = [
      {
        _id: 1,
        bloodGroup: "A+",
        inventoryType: "Whole Blood",
        quantity: 450,
        email: "donor1@example.com",
        createdAt: "2023-11-15T10:00:00Z",
      },
      {
        _id: 2,
        bloodGroup: "B-",
        inventoryType: "Plasma",
        quantity: 300,
        email: "donor2@example.com",
        createdAt: "2023-11-14T09:30:00Z",
      },
      {
        _id: 3,
        bloodGroup: "AB+",
        inventoryType: "Red Blood Cells",
        quantity: 600,
        email: "donor3@example.com",
        createdAt: "2023-11-13T11:45:00Z",
      },
      {
        _id: 4,
        bloodGroup: "O-",
        inventoryType: "Whole Blood",
        quantity: 400,
        email: "donor4@example.com",
        createdAt: "2023-11-12T08:15:00Z",
      },
      {
        _id: 5,
        bloodGroup: "A-",
        inventoryType: "Plasma",
        quantity: 350,
        email: "donor5@example.com",
        createdAt: "2023-11-11T14:20:00Z",
      },
    ];

    return dummyTransactions;
  };

  // Get function for recent blood records
  const getBloodRecords = async () => {
    try {
      // Simulating API call with dummy data
      setInventoryData(generateDummyTransactions());
      // Uncomment below code to fetch data from API
      /*
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
      }
      */
    } catch (error) {
      console.log("Error fetching recent blood records:", error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            {/* Placeholder content */}
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b> (ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availabeBlood}</b> (ML)
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donor Email</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {generateDummyTransactions().map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
