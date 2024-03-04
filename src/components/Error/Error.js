import { Link } from "react-router-dom";
import './Error.css'
export default function Error() {
	return (
		<div className='error'>
			<h2>Oh No, you shouldn't be here!</h2>
			<h2>Perhaps a Bad Request?</h2>
			<Link to="/">
				<h3 >Click here to head back home!</h3>
			</Link>
		</div>
	)
}