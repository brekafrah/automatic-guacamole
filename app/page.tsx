"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = async () => {
    if (!name || !date || !phone) {
      alert("Please fill all fields");
      return;
    }

    await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, date, phone }),
    });

    alert("Booking successful");
    setName("");
    setDate("");
    setPhone("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Book Appointment</h1>

        <input
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          style={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button style={styles.button} onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },

  title: {
    textAlign: "center" as const,
    marginBottom: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#0070f3",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

