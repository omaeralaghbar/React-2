import React from 'react';
import './Dashboard.css';

const Dashboard = ({ data }) => {
    return (
        <div className="dashboard">
            <h2>🎉 Submission Successful!</h2>
            <div className="card">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Experience:</strong> {data.experience}</p>
                <p><strong>Years of Experience:</strong> {data.years}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>City:</strong> {data.city}</p>
            </div>
        </div>
    );
};

export default Dashboard;
