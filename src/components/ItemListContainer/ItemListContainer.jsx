import './ItemListContainer.scss'

function ItemListContainer ( {greeting} ) {
    return (
        <main className='main'>
            <h1> {greeting} </h1>
        </main>
    );
}

export default ItemListContainer