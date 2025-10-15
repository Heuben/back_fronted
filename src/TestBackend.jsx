import { useEffect, useState } from "react";

function TestBackend() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        console.log("Fetching from backend...");
        fetch("http://localhost:3000")
            .then((res) => res.text())
            .then((data) => {
                console.log("Received:", data);
                setMessage(data);
            })
            .catch((err) => {
                console.error("Error:", err);
                setMessage("Failed to connect to backend.");
            });
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>React + NestJS Connection Test</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default TestBackend;
