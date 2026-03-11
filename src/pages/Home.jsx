import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (
    <div className="home">

      <div className="bg-animation"></div>

      <div className="circle circle1"></div>
  <div className="circle circle2"></div>

      <div className="hero">

        <h1 className="hero-title">
          Smart Circuit Diagram Dashboard
        </h1>

        <p className="hero-text">
          Upload circuit diagrams and explore components
          with an interactive viewer.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")}
        >
          Open Dashboard
        </button>

      </div>

    </div>
  )
}

export default Home