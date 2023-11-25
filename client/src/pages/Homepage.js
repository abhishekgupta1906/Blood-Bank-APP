import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Function to fetch blood records
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  useEffect(() => {
    setData([
      {
        _id: 1,
        bloodGroup: "A+",
        inventoryType: "Whole Blood",
        quantity: 350,
        email: "donor1@example.com",
        createdAt: "2023-11-21T10:30:00Z", // A sample date and time in ISO format
      },
      {
        _id: 2,
        bloodGroup: "O-",
        inventoryType: "Plasma",
        quantity: 200,
        email: "donor2@example.com",
        createdAt: "2023-11-20T09:45:00Z", // A sample date and time in ISO format
      },

      {
        _id: 3,
        bloodGroup: "B+",
        inventoryType: "Platelets",
        quantity: 150,
        email: "donor3@example.com",
        createdAt: "2023-11-19T14:20:00Z",
      },
      {
        _id: 4,
        bloodGroup: "AB-",
        inventoryType: "Red Blood Cells",
        quantity: 500,
        email: "donor4@example.com",
        createdAt: "2023-11-18T11:10:00Z",
      },

      {
        _id: 5,
        bloodGroup: "B+",
        inventoryType: "Platelets",
        quantity: 150,
        email: "donor3@example.com",
        createdAt: "2023-11-19T14:20:00Z",
      },
      {
        _id: 6,
        bloodGroup: "AB-",
        inventoryType: "Red Blood Cells",
        quantity: 500,
        email: "donor4@example.com",
        createdAt: "2023-11-18T11:10:00Z",
      },

      {
        _id: 7,
        bloodGroup: "B-",
        inventoryType: "Platelets",
        quantity: 160,
        email: "donor7@example.com",
        createdAt: "2023-11-15T14:35:00Z",
      },
      {
        _id: 8,
        bloodGroup: "A-",
        inventoryType: "Red Blood Cells",
        quantity: 550,
        email: "donor8@example.com",
        createdAt: "2023-11-14T09:10:00Z",
      },
      {
        _id: 9,
        bloodGroup: "AB+",
        inventoryType: "Whole Blood",
        quantity: 420,
        email: "donor9@example.com",
        createdAt: "2023-11-13T12:25:00Z",
      },
      {
        _id: 10,
        bloodGroup: "O-",
        inventoryType: "Plasma",
        quantity: 190,
        email: "donor10@example.com",
        createdAt: "2023-11-12T08:50:00Z",
      },

      {
        _id: 11,
        bloodGroup: "B+",
        inventoryType: "Platelets",
        quantity: 300,
        email: "donor11@example.com",
        createdAt: "2023-11-11T15:40:00Z",
      },
      {
        _id: 12,
        bloodGroup: "A+",
        inventoryType: "Whole Blood",
        quantity: 480,
        email: "donor12@example.com",
        createdAt: "2023-11-10T10:20:00Z",
      },
      {
        _id: 13,
        bloodGroup: "O+",
        inventoryType: "Red Blood Cells",
        quantity: 700,
        email: "donor13@example.com",
        createdAt: "2023-11-09T18:30:00Z",
      },
    ]);
  }, []);

  return (
    <Layout>
      {/* Redirect if user is admin */}
      {user?.role === "admin" && navigate("/admin")}

      {/* Show error message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Show loading spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mt-4">
          {/* Button to add inventory */}
          <h4
            className="ms-3 mb-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{
              cursor: "pointer",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              padding: "15px 20px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-plus text-success py-2 pe-2"></i>
            Add Inventory
          </h4>

          {/* Table to display blood records */}
          <table className="table">
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
              {/* Mapping through data to display records */}
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity} (ML)</td>
                  <td>{record.email}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal for adding inventory */}
          <Modal />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
