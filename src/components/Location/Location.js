import './Location.css'
import { Link } from 'react-router-dom'

export default function Location(){
	return (
		<div className="locationPage">
			<h1>This is the Location Page</h1>
			<Link to={'/snoop'} className='homePageLink'>
				<h3>
					Click here to go back home
				</h3>
			</Link>
		</div>
	)
}