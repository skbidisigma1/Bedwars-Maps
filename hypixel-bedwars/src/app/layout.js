import "./globals.css"
import App from "./app.js"

export const metadata = {
    title: "Bedwars Maps",
    description: "Bedwars Maps by Bruh Banana"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="main-layout">
        <header>
            <h1>Bedwars Maps</h1>
        </header>
        <App />
        <main>{children}</main>
        <footer>
            <p>
                © 2025 Bedwars Maps by <a href="https://youtube.com/@bruhbanana1" target="_blank">Bruh Banana</a>
            </p>
        </footer>
        </body>
        </html>
    )
}
