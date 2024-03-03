import { Link } from "react-router-dom";
import './Error.css'
export default function Error() {
	return (
		<div className='error'>
			<h2>Page not Found</h2>
			<Link to="/snoop">
				<h3 >Click here to head back home!</h3>
			</Link>
		</div>
	)
}