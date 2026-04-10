 import {pool} from "./lib/pool";
 
 export async function GET() {
    const result = await pool.query("SELECT * FROM your_table_name");
     return Response.json(result.rows);
  }
  export async function POST(req: Request) {
    const { name, phone, date } = await req.json();

    await pool.query(
        "INSERT INTO bookings (name, phone, date) VALUES ($1, $2, $3)",
        [name, phone, date]
    );
    return Response.json({ success: true});
 
  }
    
  
    

    