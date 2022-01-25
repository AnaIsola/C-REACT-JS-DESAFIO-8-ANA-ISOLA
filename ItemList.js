import { Link } from 'react-router-dom'
import {Item} from './Item'

export function ItemList({product}) {
	return (
		<div className="flex mx-auto">
		<div className=" grid gap-2 grid-cols-2 md:grid-cols-3 grid-rowa-3">
			{product.map((product) =>{ 
				return <link to={"/p" + "/"- product.id}>
				
				<Item key={product.id} product={product} />
				</link>
				
			})}
		</div>
		</div>

	)
}