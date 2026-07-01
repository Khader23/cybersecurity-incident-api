// express library imported to create routes 
import express from "express";
// Import the in-memory incident data from the data layer.
// This router uses the data to respond to API requests.
import { incidents } from "../data/incidents"; 

// Handle requests to the base incidents route.
// This becomes '/incidents' when mounted in index.ts.
const router = express.Router();

// * Endpoints that returns all stored cybersecurity incidents *
// using '/' to connect router to the 'incidents'
// mainly returns all stored cybersecurity incidents 
// 'get; endpoint 
router.get("/", (req, res) => {
    // Return the incident data as JSON.
    res.json(incidents);
});

router.get("/:id", (req,res) => {
  // extract the requested ID from the URL and convert it to number 
  // converts the URL parameter into a number 
  const id = Number(req.params.id);
  // finds the correct matching incident 
  const incident = incidents.find(i => i.id === id);
     
  // if there is no incident equivalent to one's stored in array 
  // error is executed and displayed - indicates nothing is found 
   if(!incident)
    {

      // REST API conventions: using status to identify 404 as http and mapped to error message     
      // return to stop the function once it has been executed 
      return res.status(404).send("Incident not found");
    
    }
  
       // returns incident as json file 
       res.json(incident);

});

// POST endpoint used to create a new cybersecurity incident 
// client sends a new incident 
router.post("/", (req,res) => {

    //Extract the submitted incident details from the request body
    //creates data 
    const {title, severity, status} = req.body;

    // validates the new incident data 
    if (!title || !severity || !status) {
        return res.status(400).send("Missing required incident fields");
    }



    // a new incident is added and follows the incident structure 
    const newIncident = {
        id: incidents.length + 1,
        title,
        severity,
        status
    
};
    //stores the new incident in the in-memory data store
    incidents.push(newIncident);

    //
    res.status(201).json(newIncident);
});



// router can be imported specifically by index.ts file - used by the main application 
export default router; 