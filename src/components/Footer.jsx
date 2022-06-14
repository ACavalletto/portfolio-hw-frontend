import { Link } from 'react-router-dom'
const Footer = (props) => {
    const navStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      border: '3px solid black',
      padding: '8px',
      width: '90%',
      margin: 'auto',
    };
  return (
    <footer>
      <nav style={navStyle}>
        <Link to="https://github.com/ACavalletto">
          <div>GITHUB</div> 
        </Link>
        <Link to="www.linkedin.com/in/arnaud-cavalletto">
          <div>LINKEDIN</div>
        </Link>
      </nav>
    </footer>
  )
}

export default Footer