import React from 'react'
import '../Components/Sidebar.css';
import { useState } from 'react';
import order from '../Components/Order.json';
const Sidebar = () => {
    const [selectedOrder, setSelectedOrder] = useState(order[0]);
    return (
        <div className="container-fluid dashboard">

            {/* HEADER */}
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <h3>Orders</h3>
                    <p className="text-muted">Manage all your orders here</p>
                </div>

                <div>
                    <button className="btn btn-light mx-1">View Drafts</button>
                    <button className="btn btn-light mx-1">Export CSV</button>
                    <button className="btn btn-primary mx-1">Create new order</button>
                </div>
            </div>

            {/* FILTER BAR */}
            <div className="filters d-flex gap-2 mt-3">
                <input className="form-control" placeholder="Order ID" />
                <select className="form-control">
                    <option>Filter by Domicile</option>
                </select>
                <select className="form-control">
                    <option>Filter by Company</option>
                </select>
                <select className="form-control">
                    <option>Filter by Status</option>
                </select>

                <button className="btn btn-primary">Filter</button>
                <button className="btn btn-light">Clear</button>
            </div>

            <div className="row mt-3">

                {/* LEFT ORDER LIST */}
                <div className="col-3 order-list">

                    <div className="order-title">
                        Orders <span className="badge bg-primary">{order.length}</span>
                    </div>

                    {order.map((orders) => (


                        <div
                            key={orders.id}
                            className="order-item"
                            onClick={() => setSelectedOrder(orders)}
                        >

                            <div>
                                <p className='order-id'>{orders.id}</p>

                                <p className="order-company">{orders.company}</p>
                            </div>

                            <span className="status pending">
                                {orders.status}
                            </span>

                        </div>




                    ))}
                    <div className='mx-1 my-1'>
                        <button className='btn border'>Previous</button>
                        <button className='btn border'>Next</button>

                    </div>
                </div>

                {/* RIGHT SIDE DETAILS */}
                <div className="col-9">

                    <div className="order-card">

                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>#{selectedOrder.id}</h5>
                                <p className="text-muted">{selectedOrder.company}</p>
                            </div>

                            <div>
                                <button className="btn btn-light mx-1">Print</button>
                                <button className="btn btn-light">Save as PDF</button>
                            </div>
                        </div>

                        {/* ORDER INFO */}
                        <div className="row">
                            {/* LEFT SIDE ORDER INFO */}
                            <div className="col-8">
                                <div className="order-info-grid">

                                    <div className="info-box">
                                        <p className="label">Placed By</p>
                                        <p>{selectedOrder.placedBy}</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">Requester</p>
                                        <p>{selectedOrder.requester}</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">PO/External ID</p>
                                        <p>2122415485</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">Requester Email</p>
                                        <p>{selectedOrder.email}</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">Order Date</p>
                                        <p>{selectedOrder.orderDate}</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">Expected Date</p>
                                        <p>{selectedOrder.expectedDate}</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">Completion Date</p>
                                        <p>{selectedOrder.completionDate}</p>
                                    </div>

                                    <div className="info-box">
                                        <p className="label">Service Level</p>
                                        <p>{selectedOrder.serviceLevel}</p>
                                    </div>

                                </div>
                            </div>

                            {/* PROFILE CARD */}
                            <div className="col-4 profile-card">

                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://i.pravatar.cc/100"
                                        className="profile-img"
                                        alt=""
                                    />

                                    <div>
                                        <p className="fw-bold mb-0">{selectedOrder.contact.name}</p>
                                        <small className="text-success">Primary</small>
                                    </div>
                                </div>

                                <div className="profile-details">
                                    <p>📞 {selectedOrder.contact.phone}</p>
                                    <p>✉ {selectedOrder.contact.email}</p>
                                    <p>📍 New York, USA</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* TABS */}
                    <ul className="tabs">
                        <li className="active">Order Details</li>
                        <li>Order Requirements</li>
                        <li>Contacts</li>
                        <li>Documents</li>
                        <li>Status History</li>
                    </ul>

                    {/* BOTTOM CARDS */}
                    <div className="row mt-3 p-3">

                        <div className="col card-box">
                            <div className="card-title">Receipt</div>

                            <div className="price-row">
                                <p>{selectedOrder.receipt[0].title}</p>
                                <p>${selectedOrder.receipt[0].price}</p>
                            </div>

                            <ul>
                                <li>Government fee</li>
                                <li>Application filing fee</li>
                            </ul>

                            <div className="price-row">
                                <p>{selectedOrder.receipt[1].title}</p>
                                <p>${selectedOrder.receipt[1].price}</p>
                            </div>
                            <ul>
                                <li>Government fee</li>
                            </ul>
                        </div>

                        <div className="col card-box">

                            <div className="card-title">Order History</div>

                            <div className="history-item">
                                <p>Order Created</p>
                                <p>Mar 26 2024</p>
                            </div>
                            <div className='history-item-data'>
                                <p>proced by <span className='text-primary'><b>Customer_name</b></span></p>
                                <p>Order has placed successfuly</p>
                            </div>

                            <div className="history-item">
                                <p>At State</p>
                                <p>Mar 26 2024</p>
                            </div>
                            <div className='history-item-data'>
                                <p>proced by <span className='text-primary'><b>State_membar</b></span></p>
                                <p>The prepared filling has been submited to the apropriate state or goverment agency</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Sidebar