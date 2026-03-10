import React from 'react'
import { useState } from 'react';
import '../Components/Order.css';
import orders  from '../Components/Order.json';
const Order = () => {
    const [selectedOrder, setSelectedOrder] = useState(orders [0]);
  return (
  <div className="d-flex">

      {/* LEFT SIDEBAR */}

      <div className="sidebar">

        <h5 className="p-3">Dashboard</h5>

        <ul className="menu">
          <li>Dashboard</li>
          <li className="active">Orders</li>
          <li>Companies</li>
          <li>Users</li>
          <li>Billing</li>
          <li>Support</li>
          <li>Setting</li>
        </ul>

      </div>


      {/* MAIN CONTENT */}

      <div className="main-content container-fluid">

        {/* PAGE TITLE */}

        <div className="d-flex justify-content-between mt-3">

          <div>
            <h3>Orders</h3>
            <p className="text-muted">Manage all your orders here.</p>
          </div>

          <div>
            <button className="btn btn-light me-2">View Drafts</button>
            <button className="btn btn-light me-2">Export CSV</button>
            <button className="btn btn-primary">Create new order</button>
          </div>

        </div>


        {/* FILTERS */}

        <div className="row mb-3">

          <div className="col-md-3">
            <input className="form-control" placeholder="Order ID" />
          </div>

          <div className="col-md-2">
            <select className="form-select">
              <option>Filter by Domicile</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select">
              <option>Filter by Company</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select">
              <option>Filter by Status</option>
            </select>
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary me-2">Filter</button>
            <button className="btn btn-secondary">Clear Filter</button>
          </div>

        </div>



        {/* ORDERS SECTION */}

        <div className="row">

          {/* ORDER LIST */}

          <div className="col-md-3 order-list">

            <h6 className="mb-3">
              Orders <span className="badge bg-light text-dark">{orders.length}</span>
            </h6>

            {orders.map((order) => (

              <div
                key={order.id}
                className="order-item"
                onClick={() => setSelectedOrder(order)}
              >

                <strong>{order.id}</strong>

                <p className="mb-1">{order.company}</p>

                <span className="badge bg-success">
                  {order.status}
                </span>

              </div>

            ))}

          </div>


          {/* ORDER DETAILS */}

          <div className="col-md-9">

            <div className="card p-3">

              <div className="d-flex justify-content-between">

                <div>
                  <h5>#{selectedOrder.id}</h5>
                  <span className="badge bg-success">
                    {selectedOrder.status}
                  </span>
                </div>

                <div>
                  <button className="btn btn-outline-secondary me-2">
                    Print
                  </button>

                  <button className="btn btn-outline-secondary">
                    Save as PDF
                  </button>
                </div>

              </div>

              <hr />

              {/* ORDER INFO */}

              <div className="row">

                <div className="col-md-3">
                  <b>Placed By</b>
                  <p>{selectedOrder.placedBy}</p>
                </div>

                <div className="col-md-3">
                  <b>Requester</b>
                  <p>{selectedOrder.requester}</p>
                </div>

                <div className="col-md-3">
                  <b>Order Date</b>
                  <p>{selectedOrder.orderDate}</p>
                </div>

                <div className="col-md-3">
                  <b>Service Level</b>
                  <p>{selectedOrder.serviceLevel}</p>
                </div>

              </div>

            </div>


            {/* TABS */}

            <div className="card mt-3">

              <div className="card-header">

                <ul className="nav nav-tabs">

                  <li className="nav-item">
                    <a className="nav-link active">Order Details</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">Order Requirements</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">Contacts</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">Documents</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">Status History</a>
                  </li>

                </ul>

              </div>

              <div className="card-body">

                <div className="row">

                  {/* RECEIPT */}

                  <div className="col-md-6">

                    <div className="receipt-box">

                      <h6>Receipt</h6>

                      {selectedOrder.receipt.map((item, index) => (

                        <div
                          key={index}
                          className="d-flex justify-content-between"
                        >

                          <span>{item.title}</span>

                          <span>${item.price}</span>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* ORDER HISTORY */}

                  <div className="col-md-6">

                    <div className="receipt-box">

                      <h6>Order History</h6>

                      <p>✔ Order Created</p>
                      <p>✔ At State</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Order