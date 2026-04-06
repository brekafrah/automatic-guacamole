"use client";
import {useRouter } from "next/navigation";
import {useState} from "react";

export default function loginpage() {
     const router = useRouter();

    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
      if (!email || !password) {
        alert("please enter email and password");
        return;
      }
      localStorage.setItem("loggedIn", "true");
      router.push("/");
    };
      
      return (
        <main
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea, #764ba2)"
        }}
        >
        <div style={{
          background: "white",
           padding: "30px",
           borderRadius: "12px",
           width: "320px",
           boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
           }}
           >
            <h2
            style={{
              textAlign: "center",
              marginBottom: "20px"
            }} 
            >
              Login
              </h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{
  width: "90%",
  padding: "10px",
  marginBottom:"10px",
  borderRadius: "5PX",
  border: "1px solid #ddd"
}}
/>

<input
  type="password"
  placeholder="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{
    width: "90%",
  padding: "10px",
  marginBottom:"16px",
  borderRadius: "5PX",
  border: "1px solid #ddd"
  }}
  />
 

  <button 
  onClick={handleLogin}
    style={{
      width: "90%",
      padding: "10px",
      background: "#667eea",
      color: "white",
      borderRadius: "6PX",
      fontSize: "18PX",
      cursor: "pointer"
    }}
>
Login
  </button>
        </div>
        </main>
      );
    }
