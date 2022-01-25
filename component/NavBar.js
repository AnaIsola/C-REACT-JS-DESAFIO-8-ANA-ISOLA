import {CarWidget} from './carwidget'

export function NavBar() {
	return( 
		<header className= "flex h-24 bg-gray-900 fixed top-0 w-full z-10">
		<div className="flex container mx.auto items-center px6 md:px-0">
		<h3 className=" font-mono text-white text-3xl">UndedinedShop</h3>
		<div className= " flex h-16 ml-auto"
		<Link to ="/cart"></Link>
		<a>
		<CarWidget numOfItems={4} />
		</a>
		</Link>
		</div>
		</div>
		</header>
	)
}