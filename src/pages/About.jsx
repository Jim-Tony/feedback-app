import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
function About() {
  return (
    <Card>
        <h1>About</h1>
        <h3>This is a React project for leaving feedback for products</h3>
        <h4>Version 1.0.0</h4>
        <h4>
            <Link to="/">Back to Home</Link>
        </h4>
    </Card>
  )
}

export default About