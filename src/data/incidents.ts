// Define the structure of a cybersecurity incident.
// Every incident stored by the API must follow this format.
export interface Incident {
    id: number;
    title: string;
    severity: "Low" | "Medium" | "High";
    status: "Open" | "Investigating" | "Resolved";
}

 // In-memory data store used for development.
// This can later be replaced with a PostgreSQL database.
 // the const variable 'incidents' stores an array of cybersec incidents 
export const incidents: Incident[] = [
    {
        id: 1,
        title: "Phishing Email",
        severity: "Medium",
        status: "Investigating"
    },
    {
        id: 2, 
        title: "SQL Injection Attempt",
        severity: "High",
        status: "Open"
    },
    {
        id:3,
        title:"Malware Infection",
        severity: "High",
        status: "Resolved"
    }
];