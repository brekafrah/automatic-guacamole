"use client";
import { useEffect, useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);

  const getBookings = async () => {
    const res = await fetch("/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    getBookings();
  }, []);

  const handleBooking = async () => {
    await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, date }),
    });

    setName("");
    setPhone("");
    setDate("");
    getBookings();
  };

  const deleteBooking = async (index: number) => {
    await fetch("/api/bookings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index }),
    });
    getBookings();
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Book Appointment</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br /><br />

      <button onClick={handleBooking}>Book</button>

      <h2>Bookings</h2>

      {bookings.map((b, i) => (
        <div key={i} style={{border:"1px solid #ddd",padding:10,marginBottom:10}}>
          <p>Name: {b.name}</p>
          <p>Phone: {b.phone}</p>
          <p>Date: {b.date}</p>

          <button onClick={() => deleteBooking(i)}>
            Delete
          </button>
        </div>
      ))}
    </div>

  )

}


