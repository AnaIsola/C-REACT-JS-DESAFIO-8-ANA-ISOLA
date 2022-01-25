import { UseParams} from 'react-router-dom'
import { ItemDetailContainer } from '..Components/ItemDetailContainer'

export default function ProductDetailPage() {
    const { productId} = useParams()

    return <ItemDetailContainer productId="3"/>
}