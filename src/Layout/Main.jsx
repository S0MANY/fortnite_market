import { Preloader } from "../Components/Preloader"
import { ProductCard } from "../Components/ProdutCard"
// import { Pagination } from "../Components/Pagination"


function Main(props) {
    return (
        <main>
            {props.isLoaded ? (props.items.map(item => <ProductCard addCart={props.addCart} key={item.id} {...item}/>)): <Preloader/> }
        </main>
    )
}

export { Main }