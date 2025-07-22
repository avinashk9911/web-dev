import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {

    return (

        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id} // if you don't add this you will see the error in the inspact terminal of the web
                    item = {item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList