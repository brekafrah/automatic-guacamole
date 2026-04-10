import Link from "next/link";

export default function Dashboard() {
    return (
        <div style={{ padding: 40}}>
            <h1>Dashboard</h1>

        <div style={{ display: "flex", gap:20 }}>
            <Link href="/login">
            <button>Login</button>
            
            </Link>
            </div>
            </div>
    )
}
