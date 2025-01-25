"use client";

import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const solosButton = document.getElementById("solosButton");
            const threesButton = document.getElementById("threesButton");
            solosButton.classList.add("active");
            solosButton.addEventListener("click", () => {
                solosButton.classList.add("active");
                threesButton.classList.remove("active");
            });
            threesButton.addEventListener("click", () => {
                threesButton.classList.add("active");
                solosButton.classList.remove("active");
            });
        }
    }, []);

    return null;
}
