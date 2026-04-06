
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [ service, setServce] = useState("");
  const [date, setDate] = useState("");
  const [bookings, setBookings] =useState<any[]>([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login");
    }
   const savedBooking =
   JSON.parse(localStorage.getItem("bookings") || "[]");
  
   setBookings (savedBooking);
  }, [router]);
 
  
  const handleBooking = () => {
    if (!name || !service || !date) {
      alert("please fill in all fields");
      return;
    }

    const newBooking = { name, service, date};
   
    const updatedBookings =[...bookings, newBooking];
   
    setBookings(updatedBookings);
    localStorage.setItem("booking", JSON.stringify(updatedBookings));
    
    setName("");
    setServce("");
    setDate("");
  };

  function handleDelete(index: number) {
    const updated = bookings.filter((item, i) => {
      return i != index;
    });
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  }
    const handleLogout = () => {
      localStorage.removeItem("loggedIn");
      router.push("/login");
    };


  return (
    <main 
    style={{
      minHeight:"100vh",
      background:"#f4f6f8",
       padding: "40px",
        fontFamily: "Arial",
        }}
        >
          <div
          style={{
            maxWidth: "500px",
            margin: "auto",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,0,0,0.08)"
          }}
          >
           <h1 style={{textAlign: "center"}}>
           Appointment Booking 
       </h1>
         <button 
         onClick={handleLogout}
         style={{
          float: "right",
          background: "#112",
          color: "white",
          padding: "7px, 14px",
          borderRadius: "6px",
          cursor: "pointer" ,
         }}
         >
          logout
         </button>
         
      <div style={{ marginTop: "30px"}}>
        <input 
        type="text"
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e. target. value)}
        style={{ 
          width: "90%",
          padding: "10px",
          marginBottom: "1opx",
          borderRadius: "6px",
          border: "2px solid #ddd"
        }}
        />
        
        <select
        value={service}
        onChange={(e) => setServce(e.target .value)}
        style={{
           width: "90%",
           padding: "10px",
           marginBottom: "10px",
           borderRadius: "6px",
           border: "2px solid #ddd"
        }}
        >
          <option value="">Select Service</option>
          <option value="Doctor">Doctor</option>
          <option value="Consultation">Consultation</option>
          <option value="Salon">Salon</option>
        </select>
        
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e. target. value)}
          
        style={{
          width: "90%",
           padding: "10px",
           marginBottom: "10px",
           borderRadius: "6px",
           border: "2px solid #ddd"
         }}
        />
        <button 
        onClick={handleBooking}
        style={{
          width: "100%",
          padding: "15px",
          background: "#0070f4",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "18px",
          cursor: "pointer",
        }}
        > 
          Boogk Appointment
        </button>
         </div>

         <h2 style={{marginTop: "20px" }}>My Bookings</h2>

          {bookings.length === 0 && (
            <p>No bookings yet</p>
            )}

          {bookings.map((b, index) => (
            <div
             key={index} 
             style={{
              background: "#f9fafb",
              padding:"12px",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "2px solid #eee"
               }}
               >
                <strong> {b.name} </strong>
                <br/>
                {b.service} -{b.date}
              <div style={{ marginTop: "8px"}}>

              <button
              onClick={() => handleDelete(index)}
              style={{
               background: "#ff4d4f",
               color: "white",
               border: "none",
               padding: "6px 12px",
               borderRadius: "6px",
               marginRight: "5px",
               cursor: "pointer"
              }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setName(b.name);
                  setServce(b.service);
                  setDate(b.date);
                  handleDelete(index);
                }}
                style={{
               background: "#555",
               color: "white",
               border: "none",
              padding:"6px 12px ",
              borderRadius: "8px",
              cursor: "pointer"
                }}
                >
                  Edit
              </button>
            </div>
            </div>
          ))}
          </div>
          </main>
       );
      }




