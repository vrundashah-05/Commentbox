import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !comment) {
      alert("All fields are required");
      return;
    }

    const newEntry = {
      id: Date.now(),
      name,
      email,
      comment,
    };

    setData([...data, newEntry]);
    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <>
      <div className="form-container">
        <h2>Student Details</h2>
        <p className="subtitle">We’d love to hear your thoughts</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <textarea
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {/* Display submitted data */}
        <div className="data-list">
          {data.length === 0 && (
            <p className="empty">No submissions yet</p>
          )}

          {data.map((item) => (
            <div className="data-card" key={item.id}>
              <h4>{item.name}</h4>
              <p className="email">{item.email}</p>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        body {
          background: linear-gradient(135deg, rgba(226, 242, 253, 1), rgba(252, 228, 236, 1));
          font-family: "Segoe UI", sans-serif;
        }

        .form-container {
          width: 420px;
          margin: 50px auto;
          padding: 30px;
          background: rgba(255, 255, 255, 1);
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          text-align: center;
        }

        h2 {
          margin-bottom: 5px;
          color: rgba(34, 34, 34, 1);
        }

        .subtitle {
          font-size: 14px;
          color: rgba(119, 119, 119, 1);
          margin-bottom: 20px;
        }

        .input-group {
          margin-bottom: 5px;
          padding:10px 14px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(221, 221, 221, 1);
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }

        input:focus,
        textarea:focus {
          border-color: rgba(0, 123, 255, 1);
          box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
        }

        textarea {
          resize: none;
          height: 100px;
        }

        button {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 1), rgba(0, 86, 179, 1));
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
        }

        .data-list {
          margin-top: 25px;
          text-align: left;
        }

        .empty {
          text-align: center;
          color: rgba(120, 120, 120, 1);
        }

        .data-card {
          background: rgba(248, 249, 250, 1);
          padding: 14px;
          border-radius: 10px;
          margin-bottom: 12px;
          border-left: 5px solid rgba(0, 123, 255, 1);
        }

        .data-card h4 {
          margin: 0;
          font-size: 15px;
          color: rgba(34, 34, 34, 1);
        }

        .email {
          font-size: 13px;
          color: rgba(85, 85, 85, 1);
          margin-bottom: 5px;
        }

        .data-card p {
          margin: 0;
          font-size: 14px;
          color: rgba(68, 68, 68, 1);
        }
      `}</style>
    </>
  );
}
