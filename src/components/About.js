import {Link} from 'react-router-dom'

function About() {
    return ( 
        <div className="about">
            
            <h1>About</h1>
            <Link to='/add'>Go</Link>
        </div>
     );
}

export default About;