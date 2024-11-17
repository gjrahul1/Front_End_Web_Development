import propTypes from 'prop-types'

function List(props) {

    const cat = props.category;
    const itemList = props.items;

    const listItems = itemList.map(
        item => <li key={item.id}>
            {item.name}: &nbsp; <b>{item.cal}</b>
        </li>
    );

    return( <>
        <h3 className="list-category">{cat}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

//Default Props
List.defaultProps = {
    category: "category",
    items: []
}

//Prop Rule
List.propTypes = {
                category: propTypes.string,
                items: propTypes.arrayOf(propTypes.shape({id:propTypes.    number,
                name:propTypes.string,
                cal:propTypes.number,
    })),
}
export default List;