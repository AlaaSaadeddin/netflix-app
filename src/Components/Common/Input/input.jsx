import {Link} from 'react-router-dom';
import "./input.css"

const Input = () => {
    return ( 
<article className="input-container">        
<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
<div className="input-layout">
<input className="email-input" placeholder="Email address"/>
<Link to="/login" className="start-btn">Get Started</Link>
    
</div>

</article>
     );
}
 
export default Input;

