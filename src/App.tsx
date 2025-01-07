import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="company-section">
          <h1 className="company-name">Hakadoriya Co.</h1>
          <p className="tagline">Bringing 捗り to Your Business</p>
          <a
            href="https://github.com/hakadoriya"
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            GitHub
          </a>
        </div>

        <div className="profile-section">
          <h2 className="profile-name">ginokent</h2>
          <p className="description">
            System Architect / SRE / Backend Engineer / DevOps
          </p>

          <a
            href="https://github.com/ginokent"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
        </div>

        <div className="tech-stack">
          <span className="tech">System Design</span>
          <span className="tech">Infrastructure as Code</span>
          <span className="tech">CI/CD</span>
          <span className="tech">Kubernetes</span>
          <span className="tech">Google Cloud</span>
          <span className="tech">AWS</span>
          <span className="tech">Go</span>
          <span className="tech">Observability</span>
          <span className="tech">OpenTelemetry</span>
        </div>

      </div>
    </div>
  )
}

export default App
