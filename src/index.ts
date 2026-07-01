// code instructions 
// 'express' library imported to create/build a web server
import express from "express";
// 'incidentRoutes' imported to parse routing functionality to ensure application functions
import incidentsRoutes from "./routes/incidents";

// Creates the Express application 
const app = express();

const PORT = 3000;

// Enables parsing of incoming JSON request bodies 
app.use(express.json());

// Root endpoint used to verify that the API is running  
app.get("/", (req,res) => {
    // A signle response from the endpoint confirming the server is operational 
    res.send("Cybersecurity Incident API is running");
});

// the application would register all incident-related routes
// once an incident requests has been requested the router handles the request 
app.use("/incidents",incidentsRoutes);

// Starts the server and listen for incoming requests 
app.listen(PORT, () => {
    // PORT used to call port 3000
   console.log(`Server running on http://localhost:${PORT}`);
});